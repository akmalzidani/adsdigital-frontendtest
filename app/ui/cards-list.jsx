import CardPricing from "./card-pricing";
import { priceList } from "@/lib/pricelist";

export default function CardsList({ categoryPrice = "monthly" }) {
  return (
    <div className="flex flex-col items-center gap-1 md:flex-row ">
      {priceList.map((list) => (
        <CardPricing
          key={list.title}
          list={list}
          categoryPrice={categoryPrice}
        />
      ))}
    </div>
  );
}
