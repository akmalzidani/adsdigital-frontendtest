import { lexendDeca } from "../fonts";
import Image from "next/image";

export default function Broadcast() {
  return (
    <div className="flex flex-col max-w-[465px] px-10 md:flex-row md:max-w-5xl md:gap-10 md:px-7 md:items-center">
      <Image
        className="md:w-3/5"
        src="/image-2.png"
        width={1873}
        height={1515}
        style={{
          filter: "drop-shadow(21px 0 50px rgba(0, 0, 0, 0.08))",
          objectFit: "contain",
        }}
        alt="Dashboard ForwardIN"
      />
      <div className="md:w-2/5">
        <h3
          className={`${lexendDeca.className} antialiased font-bold text-[2.125rem] mt-11`}
        >
          Reach Further with Ease
        </h3>
        <p className="py-4 text-sm font-medium">
          Fowardin memberikan Anda akses cepat untuk memperluas jangkauan
          komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim
          pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda
          tidak pernah semudah ini.
        </p>
      </div>
    </div>
  );
}
