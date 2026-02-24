import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import ContactInfo from "@/components/contact/ContactInfo";
import FlatTitle from "@/components/contact/FlatTitle";
import Map from "@/components/contact/Map";
import Message from "@/components/contact/Message";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
export const metadata = {
  title: "Contact Us || Intellibyld - The OS for Construction Supply Chains",
  description: "Intellibyld - The OS for Construction Supply Chains",
};
import React from "react";

export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header2 />
          <FlatTitle />
          <ContactInfo />
          <Message />
          <Map />

          <Cta />

          <Footer2 />
        </div>
      </div>
      
      <ScrollTop />
    </>
  );
}
