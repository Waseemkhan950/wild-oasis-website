"use client";
import { createContext, useContext, useState } from "react";
const ReservationContext = createContext();
function ReservationProvider({ children }) {
  const initailState = { from: null, to: null };
  const [range, setRange] = useState(initailState);
  const resetRange = () => setRange(initailState);
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}
function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}

export { ReservationProvider, useReservation };
