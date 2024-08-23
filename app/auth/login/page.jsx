import LoginForm from "@/app/ui/auth/login-form";
import { lexendDeca } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="block md:flex md:gap-28 md:items-center">
        <LoginForm />
      </div>
    </>
  );
}
