import { teamMembers } from "@/data/team";
import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <div className="wg-members pt-130 pb-130">
      <div className="themesflat-container">
        <div className="row items-center">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              
              <div className="main-title" style={{ color: "#fff" }}>
                Meet our core 
                {" "}
                <span className="animation-text">Team</span>
              </div>
            </div>
          </div>
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6 z-5" key={index}>
              <div className="member-item">
                <div className="image">
                  <Image
                    src={member.image}
                    width={300}
                    height={285}
                    alt={member.name}
                  />
                  <ul className="wg-social">
                    {member.socials.map((social, idx) => (
                      <li key={idx}>
                        <a href="#" className={social.icon} />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="content">
                  <h4>
                    <a href="#">{member.name}</a>
                  </h4>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
