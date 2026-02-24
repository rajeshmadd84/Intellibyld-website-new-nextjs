import { counters } from "@/data/facts";
import React from "react";
import Image from "next/image";
import Counter from "@/components/common/Counter";
export default function DigitalTwin1() {
  return (
    <div className="wg-create-design style-3 pb-130 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <div className="heading-section wow fadeInUp style-1">
                
                <div className="main-title" style={{ color: "#000" }}>
                  Closing the Reality Gap{" "}<br />
                  <span className="animation-text tf-color-green">
                    with Real-Time Digital Twins
                  </span>
                </div>
              </div>
              <p className="">
               Most digital models are out of date the moment construction begins. 
               Intellibyld’s Living Digital Twin creates a high fidelity bridge between your planning office and the active job site. 
               By continuously ingesting data from thousands of fragmented sources ranging from global shipping logs to WhatsApp site diaries. 
               Our AI ensures your BIM model is a live reflection of physical reality, not a historical design document.

              </p>
              
              
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image wow fadeInUp">
              <Image
                className="img-01"
                src="/assets/images/bg-section/agenticai.jpg"
                alt="image"
                width={558}
                height={522}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
