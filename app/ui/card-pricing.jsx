import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { NumberFormat } from "@/lib/utils";
import { ButtonPrimary, ButtonWarning } from "./button";
import { lexendDeca } from "./fonts";

export default function CardPricing({ list, categoryPrice }) {
  const featureList = list?.features?.map((feature) => (
    <li
      key={feature.icon}
      className="flex items-center py-1 text-xs font-medium"
    >
      <Image
        src={feature.icon}
        width={17.73}
        height={17.73}
        alt={feature.feature}
        className="mr-2"
      />{" "}
      {feature.feature}
    </li>
  ));

  return (
    <div
      className={clsx(
        "p-4 max-w-[245px] flex flex-col justify-center rounded-lg",
        {
          "bg-white shadow-xl": list?.title === "Basic",
        }
      )}
    >
      <header>
        <h5
          className={`${lexendDeca.className} antialiased font-bold  text-xl`}
        >
          {list?.title}
        </h5>
        <p className="text-[10px] font-medium">{list?.description}</p>
      </header>
      {categoryPrice === "monthly" ? (
        <div className="flex flex-col mt-3">
          <h5
            className={`${lexendDeca.className} antialiased font-bold  text-xl mt-3`}
          >
            {list.monthlyPrice === 0 ? (
              "Gratis"
            ) : (
              <>
                Rp. {NumberFormat(list.monthlyPrice)}{" "}
                <span className="text-xs font-medium">/bulan</span>
              </>
            )}
          </h5>
          <h6 className="text-xs font-semibold text-netral-teks">
            {list.annualPrice === 0 ? (
              "-"
            ) : (
              <>Rp. {NumberFormat(list.annualPrice)} /tahun</>
            )}
          </h6>
        </div>
      ) : (
        <div className="flex flex-col mt-3">
          <h5
            className={`${lexendDeca.className} antialiased font-bold  text-xl mt-3`}
          >
            {list.annualPrice === 0 ? (
              "Gratis"
            ) : (
              <>
                Rp. {NumberFormat(list.annualPrice)}{" "}
                <span className="text-xs font-medium"> /tahun</span>
              </>
            )}
          </h5>
          <h6 className="text-xs font-semibold text-netral-teks">
            {list.monthlyPrice === 0 ? (
              "-"
            ) : (
              <>Rp. {NumberFormat(list.monthlyPrice)} /bulan</>
            )}
          </h6>
        </div>
      )}

      <Link href="/#pricing">
        <div className="my-4">
          {list.buttonColor === "warning" ? (
            <ButtonWarning>Get Started</ButtonWarning>
          ) : list.title === "Starter" ? (
            <ButtonPrimary>Start Now</ButtonPrimary>
          ) : (
            <ButtonPrimary>Get Started</ButtonPrimary>
          )}
        </div>
      </Link>

      <ul>{featureList}</ul>
    </div>
  );
}
