import { lexendDeca } from "../fonts";
import Image from "next/image";

export default function AutoReply() {
  return (
    <div className="flex flex-col max-w-[465px] px-10 md:flex-row md:max-w-5xl md:gap-10 md:px-7 md:items-center">
      <Image
        className="md:w-3/5"
        src="/image-4.png"
        width={1852}
        height={896}
        style={{
          filter: "drop-shadow(21px 0 50px rgba(0, 0, 0, 0.08))",
          objectFit: "contain",
        }}
        alt="Dashboard ForwardIN"
      />
      <div className="md:w-2/5">
        <h3
          className={`${lexendDeca.className} antialiased font-bold text-3xl mt-11`}
        >
          Respond Faster with the Convenience of Auto Reply
        </h3>
        <p className="py-4 text-sm font-medium">
          Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan
          dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami,
          Anda dapat menjawab pertanyaan atau memberikan respon otomatis,
          menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin.
        </p>
      </div>
    </div>
  );
}
