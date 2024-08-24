import Image from "next/image";
import { inter, lexendDeca } from "../ui/fonts";
import Link from "next/link";

function Information() {
  return (
    <div className="flex flex-col max-w-[465px]">
      <Image
        src="/image-1.png"
        width={2232}
        height={1405}
        style={{
          filter: "drop-shadow(21px 0 50px rgba(0, 0, 0, 0.05))",
          objectFit: "contain",
        }}
        alt="Dashboard ForwardIN"
      />
      <h3
        className={`${lexendDeca.className} antialiased font-bold text-2xl mt-11`}
      >
        Elevate Your Messaging Efficiency with Our Innovative Admin Tools
      </h3>
      <p className="mt-4 text-sm font-medium">
        Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah
        dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan
        fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan
        fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan
        manajemen konten yang praktis.
      </p>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <div className="flex justify-center md:min-w-full md:container xl:px-[150px] bg-white md:bg-netral">
      <div className="flex flex-col items-center min-h-screen py-12 px-9 lg:items-start md:min-w-full md:px-7">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={135}
            height={25.65}
            alt="ForwardIN Logo"
            className="block lg:hidden"
          />
          <Image
            src="/logo.svg"
            width={177}
            height={33.63}
            alt="ForwardIN Logo"
            className="hidden lg:block"
          />
        </Link>
        <div className="items-center justify-center hidden lg:flex grow md:min-w-full md:gap-28">
          <Information />
          <main className={`${inter.className} antialiased`}>{children}</main>
        </div>
        <div className="flex items-center justify-center lg:hidden grow">
          <main className={`${inter.className} antialiased`}>{children}</main>
        </div>
      </div>
    </div>
  );
}
