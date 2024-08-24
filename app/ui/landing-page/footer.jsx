import Image from "next/image";
import { lexendDeca } from "../fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

function AccordionList() {
  return (
    <div className="flex flex-col gap-3">
      <Accordion type="single" collapsible>
        <AccordionItem className="px-4" value="item-1">
          <AccordionTrigger className="gap-5">
            Apa itu Forwardin?
          </AccordionTrigger>
          <AccordionContent>
            Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp
            yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor
            dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan
            berbagai fitur canggih seperti auto-reply, fitur broadcast,
            manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak
            Google.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem className="px-4" value="item-2">
          <AccordionTrigger className="gap-5">
            Apakah Forwardin cocok untuk saya?
          </AccordionTrigger>
          <AccordionContent>
            FowardIt is a powerful communication management tool that simplifies
            message forwarding, enhances contact management, and streamlines
            campaign scheduling for businesses of all sizes. Google.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem className="px-4" value="item-3">
          <AccordionTrigger className="gap-5">
            Apakah Forwardin perlu di-install ke komputer?
          </AccordionTrigger>
          <AccordionContent>Ya bisa dong!.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function Faq() {
  return (
    <div className="px-5">
      <h3
        className={`${lexendDeca.className} antialiased text-center text-white font-bold text-2xl mt-11`}
      >
        Frequently Asked Questions
      </h3>
      <div className="flex items-center justify-center gap-2 mt-10 mb-12">
        <div className="grow">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className='flex w-full px-5 py-2 text-xs border rounded-md h-11 border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"'
          />
        </div>
        <div className="flex-shrink-0">
          <button className="flex items-center justify-center p-[14px] transition-all rounded-lg hover:bg-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="text-white size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <AccordionList></AccordionList>
    </div>
  );
}

function PoweredLogo() {
  return (
    <div className="flex flex-row items-center justify-center gap-3 mb-8">
      <p className="text-sm font-light text-white">Powered By </p>
      <Link href="#">
        <Image src="/logo-text-white.svg" width={136} height={33.19} />
      </Link>
    </div>
  );
}

function RealFooter() {
  return (
    <div className="flex flex-col gap-12 md:flex-row">
      <div className="flex flex-col gap-12">
        <Image
          src="/logo-white.svg"
          width={175}
          height={33.25}
          alt="Forwardin Logo"
        />
        <p className="text-xs font-medium text-white">
          Fowardin is your ultimate communication management solution. We
          empower businesses of all sizes with efficient message forwarding,
          streamlined contact management, and powerful campaign scheduling. Our
          mission is to simplify your communication processes, helping you
          engage with your audience effectively and effortlessly. Join us in
          transforming your communication game today!
        </p>
      </div>
      <div className="flex flex-col gap-6 text-white">
        <h5 className="text-base font-bold">Contact Us</h5>
        <p className="text-xs font-medium">
          Join our mailing list to receive updates, exclusive content, and early
          access to upcoming events. By signing up, you become an integral part
          of our community, spreading the message of compassion and making a
          difference.
        </p>
        <ul className="text-xs font-medium">
          <li>Email: info@fowarin</li>
          <li>Phone: +1 (123) 456-7890</li>
        </ul>
      </div>
      <div className="flex flex-col gap-6 text-white">
        <h5 className="text-base font-bold">Let's Talk</h5>
        <p className="text-xs font-medium">
          Join our mailing list to receive updates, exclusive content, and early
          access to upcoming events. By signing up, you become an integral part
          of our community, spreading the message of compassion and making a
          difference.
        </p>
        <ul className="text-xs font-medium">
          <li>
            <a href="https://instagram.com/akmalzidani" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://instagram.com/akmalzidani" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://instagram.com/akmalzidani" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="flex flex-col max-w-[465px] px-10 gap-36 md:max-w-5xl">
      <Faq id="faq"></Faq>
      <RealFooter id="contact-us"></RealFooter>
      <PoweredLogo></PoweredLogo>
    </div>
  );
}
