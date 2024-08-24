"use client";

import { Input } from "../input";
import Link from "next/link";
import { lexendDeca } from "@/app/ui/fonts";
import { ButtonPrimary } from "../button";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      redirect: true, // Enable redirect after sign-in
      callbackUrl: "/dashboard", // Redirect after successful sign-in
      email,
      password,
    });

    if (res?.error) {
      setLoading(false);
      console.log(res.error);
      // Handle error (show error message, etc.)
    }
  };

  return (
    <div className="max-w-[314px] md:min-w-[466px] md:max-w-[466px] md:px-[30px] md:py-10 md:bg-white rounded-[10px] md:flex md:flex-col md:justify-center md:h-fit md:shadow-lg">
      <h3
        className={`${lexendDeca.className} antialiased text-2xl font-bold text-center `}
      >
        Welcome Back
      </h3>
      <p className="text-sm text-center">We’re so excited to see you again!</p>
      <form onSubmit={handleSignIn}>
        <div className="flex flex-col gap-4 py-7">
          <Input
            type="email"
            name="email"
            placeholder="Username / Email"
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <div>
            <Link
              href="/auth/forget-password"
              className="text-sm font-medium text-primary"
            >
              Lupa Password?
            </Link>
          </div>
        </div>
        <ButtonPrimary type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </ButtonPrimary>
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
