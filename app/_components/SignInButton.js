import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    // this is the server component; thus, we uses server action which is defined in the app/_lib/actions
    <form action={signInAction}>
      <button className="border-primary-300 flex items-center gap-6 border px-10 py-4 text-lg font-medium">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
