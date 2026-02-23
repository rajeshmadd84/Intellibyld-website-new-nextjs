import Cta from "@/components/common/Cta";
import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Faq from "@/components/digital-twins/Faq";
import Features from "@/components/digital-twins/Features";
import FlatTitle from "@/components/digital-twins/FlatTitle";
import Tools from "@/components/digital-twins/Tools";
import React from "react";

export const metadata = {
  title: "Digital Twins || Intellibyld - The OS for Construction Supply Chains",
  description:
    "See how Intellibyld's Digital Twins give you real-time visibility across every material, shipment, and site in your construction project.",
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <FlatTitle />
          <Tools />
          <Features />
          <Faq />
          <Cta />
          <Footer1 />
        </div>
      </div>
      <Mouse />
      <ScrollTop />
    </>
  );
}
