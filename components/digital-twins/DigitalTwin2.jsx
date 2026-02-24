import { counters } from "@/data/facts";
import React from "react";
import Image from "next/image";
import Counter from "@/components/common/Counter";
export default function DigitalTwin2() {
  return (
    <div className="wg-create-design style-3 pb-130 pt-130">
      <div className="themesflat-container">
        <div className="row">
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
          <div className="col-lg-6">
            <div className="content">
              <div className="heading-section wow fadeInUp style-1">
                
                <div className="main-title" style={{ color: "#000" }}>
                  
                  <span className="animation-text tf-color-green">
                    The Digital Nervous System
                  </span>
                </div>
              </div>
              <h5 style={{ fontStyle: "italic", marginBottom: "20px", color: "#555" }}>
                Closing the loop between procurement and installation, because a building shouldn't be a puzzle with missing pieces.
              </h5>
              <p className="">
                Legacy BIM models typically stop at the site boundary, leaving the most volatile part of the project - the global supply chain - in the dark. 
                Intellibyld’s Digital Twin extends its reach into the entire lifecycle of your materials, creating a single thread of truth from the factory floor to the final installation point.
              </p>
             
              <a href="/agentic-ai" className="tf-button style-2 mt-20">
                <span>Learn more</span>
                <i className="icon-arrow-right2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
