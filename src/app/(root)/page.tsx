import { AboutUs } from "@/components/aboutus";
import { ContactUs } from "@/components/contact";
import Faqs from "@/components/Faqs";
import { Galary } from "@/components/Galary";
import { HeroSection } from "@/components/hereSection";
import Rating from "@/components/Rating";

export default function Home() {
  return (
    <div>
      {/* section here page */}
      <HeroSection />

      {/* section for about us*/}
      <AboutUs />

      {/* section for contact */}
      <ContactUs />

      {/* galary */}
      <Galary />

      {/* Rating */}
      <Rating />

      {/* Faqs */}
      <Faqs />
    </div>
  );
}
