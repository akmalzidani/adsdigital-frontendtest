"use client";

import { Input } from "../input";
import Link from "next/link";
import { lexendDeca } from "@/app/ui/fonts";
import { ButtonPrimary } from "../button";

export default function LoginForm() {
  return (
    <div className="max-w-[314px] md:min-w-[466px] md:max-w-[466px] md:px-[30px] md:py-10 md:bg-white rounded-[10px] md:flex md:flex-col md:justify-center md:h-fit md:shadow-lg">
      <h3
        className={`${lexendDeca.className} antialiased text-2xl font-bold text-center `}
      >
        Welcome Back
      </h3>
      <p className="text-sm text-center">We’re so excited to see you again!</p>
      <form action="">
        <div className="flex flex-col gap-4 py-7">
          <Input type="text" name="username" placeholder="Username / Email" />
          <Input type="password" name="password" placeholder="Password" />
          <div>
            <Link
              href="/auth/forget-password"
              className="text-sm font-medium text-primary"
            >
              Lupa Password ?
            </Link>
          </div>
        </div>
        <ButtonPrimary>Sign In</ButtonPrimary>
      </form>
      <p className="text-sm font-medium text-center mt-7">
        Butuh buat akun?{" "}
        <Link href="/auth/register" className="text-primary">
          Daftar di sini
        </Link>
      </p>
    </div>
  );
}
