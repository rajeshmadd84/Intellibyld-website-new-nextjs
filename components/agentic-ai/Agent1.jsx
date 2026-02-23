import { counters } from "@/data/facts";
import React from "react";
import Image from "next/image";
import Counter from "@/components/common/Counter";
export default function AgenticAi() {
  return (
    <div className="wg-create-design style-3 pb-130 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <div className="heading-section wow fadeInUp style-1">
                <h6 className="tf-color-green">Autonomous Execution Layer</h6>
                <div className="main-title" style={{ color: "#000" }}>
                  Beyond Tracking:{" "}<br />
                  <span className="animation-text tf-color-green">
                    Meet Your Digital Workforce
                  </span>
                </div>
              </div>
              <p className="">
                Traditional software waits for you to tell it what happened. <strong>Intellibyld’s Agentic AI</strong> acts on its own to make sure your project stays on track. 
                By unifying your BIM models, ERP data, and supplier communications into a single <strong>Autonomous Execution Layer</strong>, we’ve moved beyond simple dashboards to a system that proactively manages the heavy lifting of construction logistics.
              </p>
              <ul className="list-item tick-white">
                <li>
                  <i className="icon-tick" style={{ color: "#fff" }} />
                  <span className="tf-color-green" style={{ fontWeight: 700 }}>
                    Autonomous Logistics:
                  </span>{" "}
                  Freeing teams for site execution.
                </li>
                <li>
                  <i className="icon-tick" style={{ color: "#fff" }} />
                  <span className="tf-color-green" style={{ fontWeight: 700 }}>
                    Proactive Neutralization:
                  </span>{" "}
                  Stopping threats early.
                </li>
                <li>
                  <i className="icon-tick" style={{ color: "#fff" }} />
                  <span className="tf-color-green" style={{ fontWeight: 700 }}>
                    Zero Friction:
                  </span>{" "}
                  Fast-tracking RFQs and shipments.
                </li>
              </ul>
              <a href="/agentic-ai" className="tf-button style-2 mt-20">
                <span>Learn more</span>
                <i className="icon-arrow-right2" />
              </a>
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
