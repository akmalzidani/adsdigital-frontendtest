import LoginForm from "@/app/ui/auth/login-form";

export const metadata = {
  title: "Sign In",
};

export default function Page() {
  return (
    <div className="block md:flex md:gap-28 md:items-center">
      <LoginForm />
    </div>
  );
}
