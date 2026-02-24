import Cta from "@/components/common/Cta";
import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Faq from "@/components/digital-twins/Faq";
import DigitalTwin1 from "@/components/digital-twins/DigitalTwin1";
import DigitalTwin2 from "@/components/digital-twins/DigitalTwin2";
import Features from "@/components/digital-twins/Features";
import Features3 from "@/components/digital-twins/Features3";
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
          <Header2 />
          <FlatTitle />
          <DigitalTwin1 />
          <DigitalTwin2 />
          <Tools />
          
          <Features3 />
          
          <Footer2 />
        </div>
      </div>
      
      <ScrollTop />
    </>
  );
}
