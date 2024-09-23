import Hero from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default async function LandingPage() {
  return (
    <>
       <SiteHeader/>
       <Hero/>
       <SiteFooter/>
    </>
  );
}
