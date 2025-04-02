"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(formData) {
  // 1. Check if the user is signed in
  const session = await auth();
  if (!session) throw new Error("You must be signed in to update your profile");
  // 2. Update the guest
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  if (!/^[0-9]{7}$/.test(nationalID))
    throw new Error("National ID must be 7 digits");
  const updateData = {
    nationality,
    countryFlag,
    nationalID,
  };
  const { data, error } = await supabase
    .from("Guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");
  // 3. Revalidate the profile page
  revalidatePath("/account/profile");
}

export async function DeleteReservationAction(bookingId) {
  // 1. Check if the user is signed in
  const session = await auth();
  if (!session)
    throw new Error("You must be signed in to delete a reservation");
  // 2. authorization: only the user who made the reservation can delete it
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to delete this reservation");
  // 3. Delete the reservation
  const { data, error } = await supabase
    .from("Bookings")
    .delete()
    .eq("id", bookingId);
  if (error) throw new Error("Reservation could not be deleted");
  // 4. Revalidate the reservations page
  revalidatePath("/account/reservations");
}

export async function updateBooking(formData) {
  // 1. Check if the user is signed in
  const session = await auth();
  const bookingId = Number(formData.get("bookingId"));

  if (!session)
    throw new Error("You must be signed in to update a reservation");
  // 2. authorization: only the user who made the reservation can update it
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);
  // ERROR: If the user is not the owner of the reservation, they can't update it
  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to update this reservation");
  // 3. Update the reservation
  const updateData = {
    observations: formData.get("observations").slice(0, 1000),
    numGuests: Number(formData.get("numGuests")),
  };
  const { error } = await supabase
    .from("Bookings")
    .update(updateData)
    .eq("id", bookingId);
  if (error) throw new Error("Reservation could not be updated");
  // 4. Revalidate the reservations page
  revalidatePath("/account/reservations");
  // 5. Revalidate the edit page
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  // 4. Redirect to the reservations page
  redirect("/account/reservations");
}

export async function createBooking(bookingData, formData) {
  console.log("formData", bookingData);
  // 1. Check if the user is signed in
  const session = await auth();
  if (!session)
    throw new Error("You must be signed in to create a reservation");
  // 2. Create the reservation
  const newBooking = {
    guestId: session.user.guestId,
    cabinId: bookingData.cabinId,
    startDate: bookingData.startDate,
    endDate: bookingData.endDate,
    observations: formData.get("observations").slice(0, 1000),
    numGuests: Number(formData.get("numGuests")),
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    numNights: bookingData.numNights,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { error } = await supabase.from("Bookings").insert([newBooking]);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }
  // 3. Revalidate the reservations page
  revalidatePath("/account/reservations");
  revalidatePath(`/cabins/${bookingData.cabinId}`);
  // 4. Redirect to the reservations page
  redirect("/cabins/thankyou");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signOutAction() {
  await signOut();
}
