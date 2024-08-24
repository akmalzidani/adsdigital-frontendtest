import RegisterForm from "@/app/ui/auth/register-form";

export const metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <div className="block md:flex md:gap-28 md:items-center">
      <RegisterForm />
    </div>
  );
}
