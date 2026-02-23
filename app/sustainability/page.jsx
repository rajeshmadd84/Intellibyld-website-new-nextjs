import Cta from "@/components/common/Cta";
import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Faq from "@/components/sustainability/Faq";
import Features from "@/components/sustainability/Features";
import FlatTitle from "@/components/sustainability/FlatTitle";
import Tools from "@/components/sustainability/Tools";
import React from "react";

export const metadata = {
  title: "Sustainability || Intellibyld - The OS for Construction Supply Chains",
  description:
    "Track carbon emissions, score suppliers on sustainability, and generate ESG reports with Intellibyld's green construction intelligence.",
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
