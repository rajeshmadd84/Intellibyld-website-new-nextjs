import { features1 as features } from "@/data/features1";
import React from "react";

export default function Doing() {
  return (
    <div className="wg-doing">
      <div className="themesflat-container">
        <div className="row">
          
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
