import Image from "next/image";
import { lexendDeca } from "../fonts";
import { ButtonPrimary, ButtonPrimaryOutline } from "../button";

export default function Opportunity() {
  return (
    <div className="flex flex-col max-w-[465px] px-10 md:max-w-5xl md:px-7">
      <h3
        className={`${lexendDeca.className} antialiased font-bold text-[2.125rem] mt-11 text-primary text-center `}
      >
        "One Step Closer to More Effective and Connected Communication!"
      </h3>
      <div className="items-center md:flex">
        <Image
          src="/image-5.png"
          width={866}
          height={832}
          alt="Dashboard ForwardIN"
          className="md:w-1/3 mb-9 mt-7"
        />
        <div className="md:flex md:flex-col md:items-center md:w-2/3">
          <div className="flex flex-col gap-2 md:flex-row">
            <ButtonPrimary isFit={true}>Bisnis dan Pemasaran</ButtonPrimary>
            <ButtonPrimaryOutline isFit={true}>
              Komersial dan Penjualan
            </ButtonPrimaryOutline>
            <ButtonPrimaryOutline isFit={true}>
              Organisasi Sosial
            </ButtonPrimaryOutline>
          </div>
          <p className="py-4 text-sm font-medium md:px-7">
            Bidang ini dapat memanfaatkan fitur broadcast untuk mengirim
            promosi, pengumuman, dan informasi produk kepada pelanggan dalam
            jumlah besar secara efisien. Sementara itu, fitur campaign dapat
            membantu merencanakan dan menyampaikan pesan iklan dengan waktu yang
            tepat kepada target audiens yang sesuai.
          </p>
        </div>
      </div>
    </div>
  );
}
