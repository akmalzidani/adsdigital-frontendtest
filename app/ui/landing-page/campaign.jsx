import { lexendDeca } from "../fonts";
import Image from "next/image";

export default function Campaign() {
  return (
    <div className="flex flex-col max-w-[465px] px-10 md:flex-row-reverse md:max-w-5xl md:gap-10 md:px-7 md:items-center">
      <Image
        className="md:w-3/5"
        src="/image-3.png"
        width={1848}
        height={1136}
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
          Right Time, Effective Messages
        </h3>
        <p className="py-4 text-sm font-medium">
          Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang
          tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan
          pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan
          Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.
        </p>
      </div>
    </div>
  );
}
