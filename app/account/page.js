import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};
async function page() {
  const session = await auth();
  const firstName = session?.user?.name.split(" ")[0];
  return (
    <h2 className="text-accent-400 mb-7 text-2xl font-semibold">
      Welcome {firstName}
    </h2>
  );
}

export default page;
