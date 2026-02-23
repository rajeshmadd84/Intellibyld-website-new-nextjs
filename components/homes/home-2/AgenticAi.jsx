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
                <div className="main-title">
                  Agents that don’t just track-{" "}
                  <span className="animation-text tf-color-green">
                    They Execute
                  </span>
                </div>
              </div>
              <p className="">
                Stop wasting your team's potential on the "Integration Trap." While legacy systems require manual data entry and constant oversight, Intellibyld’s Agentic AI acts as a tireless digital workforce. 
                It autonomously manages the complex coordination between your BIM models, ERP data, and thousands of supplier interactions, making real-time decisions that keep your project on track.
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
