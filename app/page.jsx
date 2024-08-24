import GettingStarted from "./ui/landing-page/getting-started";
import Broadcast from "./ui/landing-page/broadcast";
import Campaign from "./ui/landing-page/campaign";
import AutoReply from "./ui/landing-page/auto-reply";
import Opportunity from "./ui/landing-page/opportunity";
import Pricing from "./ui/landing-page/pricing";
import Footer from "./ui/landing-page/footer";
import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-netral">
      <section
        id="getting-started"
        className="h-[790px] md:min-h-[940px] w-full flex items-center justify-center overflow-x-clip overflow-hidden relative"
      >
        <Image
          src="/bg-header-mobile.png"
          width={395 * 4}
          height={790 * 4}
          className="absolute inset-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2 md:hidden"
        />
        <Image
          src="/bg-header.png"
          width={1440}
          height={845}
          className="inset-0 hidden -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/3 left-1/2 md:absolute md:block md:min-w-full md:top-1/4 lg:top-1/3"
        />
        <GettingStarted />
      </section>
      <section
        id="broadcast"
        className="h-[790px] w-full md:min-h-[845px] flex items-center justify-center"
      >
        <Broadcast />
      </section>
      <section
        id="campaign"
        className="h-[790px] md:min-h-[845px] w-full bg-white flex items-center justify-center"
      >
        <Campaign />
      </section>
      <section
        id="auto-reply"
        className="h-[790px] md:min-h-[845px] w-full flex items-center justify-center"
      >
        <AutoReply />
      </section>
      <section
        id="opportunity"
        className="py-[7.125rem] w-full bg-white flex items-center justify-center"
      >
        <Opportunity />
      </section>
      <section
        id="pricing"
        className="py-[7.125rem] w-full bg-white flex items-center justify-center"
      >
        <Pricing />
      </section>
      <section
        id="footer"
        className="py-[5.313rem] w-full bg-primary flex  justify-center
         relative overflow-x-clip overflow-hidden"
      >
        <Image
          className="absolute inset-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2 md:min-w-full md:bottom-0 md:-translate-y-1/3"
          src="/bg-footer-mobile.png"
          width={395 * 4}
          height={558 * 4}
          loading="lazy"
        />
        <Footer />
      </section>
    </main>
  );
}
