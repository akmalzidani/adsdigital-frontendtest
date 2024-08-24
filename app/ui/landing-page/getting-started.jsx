import Image from "next/image";
import { lexendDeca } from "../fonts";
import Link from "next/link";

export default function GettingStarted() {
  return (
    <div className="flex flex-col max-w-[465px] px-10 relative md:flex-row-reverse md:max-w-5xl md:gap-10 md:px-7 md:justify-center">
      <Image
        className="md:w-3/5"
        src="/image-1.png"
        width={2232}
        height={1405}
        style={{
          filter: "drop-shadow(21px 0 50px rgba(0, 0, 0, 0.05))",
          objectFit: "contain",
        }}
        alt="Dashboard ForwardIN"
      />
      <div className="md:w-2/5">
        <h3
          className={`${lexendDeca.className} antialiased font-bold text-2xl mt-11`}
        >
          Elevate Your Messaging Efficiency with Our Innovative Admin Tools
        </h3>
        <p className="py-4 text-sm font-medium">
          Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah
          dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan
          dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis
          dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan
          dengan manajemen konten yang praktis.
        </p>
        <Link href="/auth/register">
          <div className="flex gap-x-[0.5px]">
            <button className="py-3 text-sm font-medium bg-black rounded-l-[5px] px-9 text-white">
              Daftar Sekarang
            </button>
            <button className="text-sm font-medium bg-black rounded-r-[5px] p-3 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
