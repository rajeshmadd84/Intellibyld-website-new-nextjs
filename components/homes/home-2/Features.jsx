import { features } from "@/data/features";
import React from "react";

export default function Doing() {
  return (
    <div className="wg-doing">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-1 text-center">
              <h6 className="tf-color-green">What is Intellibyld?</h6>
              <div className="main-title">
                The <span className="tf-color-green">AI Powered OS</span> that orchestrates your&nbsp;
                <br /> construction supply chain through <br />
                &nbsp;{" "}
                <span className="animation-text tf-color-green">
                  Autonomous Execution
                </span>
              </div>
            </div>
          </div>
          {features.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className={`doing-item ${index == 1 ? "active" : ""}`}>
                <div className="icon">
                  <span className={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
