"use client";

import Dresscue from "../assets/Dresscue.jpeg";
import Frame from "../assets/Frame.png";
import Banc from "../assets/Banc.jpeg";
import React, { useState, useEffect } from "react";

const StackingScrollShowcase = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      id: 1,
      category: "UI/UX Case study",
      title: "Dresscue",
      subtitle: "Styling Smarter, Every Day",
      description: `Dresscue is a personal wardrobe styling app that helps users overcome the daily what to wear dilemma. It generates outfit suggestions based on the user's existing wardrobe, personal preferences, and current fashion trends. The app blends personalization with trend-awareness and includes a social feature where users can share their outfits and get inspired by others.
`,
      toolsUsed: "Figma · FigJam · Illustrator · Photoshop",
      skills: `· User Research · Journey Mapping · Wireframing
· Visual Design · Design Systems · UX Writing · Mobile UI`,
      img: Dresscue,
    },
    {
      id: 2,
      category: "UX/UI Design",
      title: "OneBanc",
      subtitle: "Bank Smart. Live Free",
      description: `A modern UPI-based banking app tailored for seamless everyday payments, OneBanc was designed to help users manage, track, and simplify their financial activities with clarity and ease. I designed the platform with a focus on intuitive dashboards, real-time transaction visibility, and value-added features like spend/save insights, currency conversion, and bill splitting. The goal was to create an intelligent, secure, and user-friendly financial ecosystem that feels modern and trustworthy.`,
      toolsUsed: "Figma · FigJam · Illustrator",
      skills: `UX Research · Wireframing · UI Design · Design Systems
  Information Architecture · Interaction Design · Fintech UX
  Mobile App Design · Dashboard Design · Microinteractions · Visual Hierarchy`,
      img: Banc,
    },
    {
      id: 3,
      category: "UI/UX Case study",
      title: "Redesigning User Interface",
      subtitle: "College Management System",
      description: `A modern e-commerce platform built with React and Node.js that provides seamless shopping experience. The platform features advanced search capabilities, personalized recommendations, and secure payment processing.
The project involved creating a scalable architecture that can handle high traffic loads while maintaining optimal performance and user experience.`,
      toolsUsed: "Figma · Illustrator · Photoshop",
      skills: `User Research · Journey Mapping · Wireframing · Dashboard Design · Information Architecture · Visual Design · Interaction Design · Accessibility· Task Flow Optimization`,
      img: Frame,
    },
    {
      id: 4,
      category: "Website Design Project",
      title: "VIXII",
      subtitle: "Beautifully Imperfect",
      description: `Dresscue is a personal wardrobe styling app that helps users overcome the daily what to wear dilemma. It generates outfit suggestions based on the user's existing wardrobe, personal preferences, and current fashion trends. The app blends personalization with trend-awareness and includes a social feature where users can share their outfits and get inspired by others.
I led the end-to-end design process—from user research and journey mapping to wireframes, UI design, and prototyping—ensuring a seamless, intuitive, and visually engaging experience.`,
      toolsUsed: "Figma · Illustrator · Photoshop",
      skills: `· User Research · Journey Mapping · Wireframing
· Visual Design · Design Systems · UX Writing · Mobile UI`,
      img: "/VIXII (1).png",
      bgImage: true,
      link: "/vixii",
    },
    {
      id: 5,
      category: "Website Design Project",
      title: "Blitz Trip",
      subtitle: "Website Design Project",
      description: `Dresscue is a personal wardrobe styling app that helps users overcome the daily what to wear dilemma. It generates outfit suggestions based on the user's existing wardrobe, personal preferences, and current fashion trends. The app blends personalization with trend-awareness and includes a social feature where users can share their outfits and get inspired by others.
I led the end-to-end design process—from user research and journey mapping to wireframes, UI design, and prototyping—ensuring a seamless, intuitive, and visually engaging experience.`,
      toolsUsed: "Figma · Illustrator · Photoshop",
      skills: `· User Research · Journey Mapping · Wireframing
· Visual Design · Design Systems · UX Writing · Mobile UI`,
      img: "/Blitz trip.png",
      bgImage: true,
    },
  ];

  const getSectionStyle = (index) => {
    const sectionHeight = window.innerHeight;
    const triggerPoint = sectionHeight * (index + 1); // Start from second screen
    const progress = Math.max(
      0,
      Math.min(1, (scrollY - triggerPoint) / sectionHeight)
    );

    return {
      position: "sticky",
      top: `${120 + index * 20}px`,
      zIndex: 50 + index + 1,
      transform: `translateY(${progress * -50}px) scale(${
        1 - progress * 0.05
      })`,
      transition: "all 0.1s ease-out",
    };
  };

  const getSectionBgColor = (id) => {
    const colors = {
      1: "#f9f8f8",
      2: "#5e5e5e",
      3: "white",
      4: "#c8d8e8",
      5: "#4a4a4a",
    };

    return colors[id] || "#f9f8f8";
  };

  const getSectionBorderColor = (id) => {
    const colors = {
      1: "#f9f8f8",
      2: "black",
      3: "black",
      4: "#c8d8e8",
      5: "#4a4a4a",
    };

    return colors[id] || "#f9f8f8";
  };

  const getDescriptionBgColor = (id) => {
    const colors = {
      1: "white",
      2: "black",
      3: "white",
      4: "#f0c8c8",
      5: "white",
    };
    return colors[id] || "#f9f8f8";
  };

  const getDescriptionTextColor = (id) => {
    const colors = {
      1: "black",
      2: "white",
      3: "black",
      4: "black",
      5: "black",
    };
    return colors[id] || "#f9f8f8";
  };

  const getButtonTextColor = (id) => {
    const colors = {
      1: "black",
      2: "white",
      3: "black",
      4: "black",
      5: "black",
    };
    return colors[id] || "#f9f8f8";
  };

  const getButtonBorderColor = (id) => {
    const colors = {
      1: "black",
      2: "white",
      3: "black",
      4: "black",
      5: "black",
    };
    return colors[id] || "#f9f8f8";
  };

  const getButtonLinks = (id) => {
    const links = {
      1: "https://www.behance.net/gallery/228510137/Dresscue-smart-wardrobe-case-study",
      2: "https://www.behance.net/gallery/229794877/Fintech-App-Design-for-OneBanc-Technologies-pvt-ltd",
      3: "https://www.behance.net/gallery/227658907/UI-redesign-project-College-Management-stystem",
      4: "/vixii",
      5: "#",
    };
    return links[id] || "#";
  };

  return (
    <div className="min-h-screen bg-black pb-40">
      <div className="sticky top-0 left-0 w-full z-50 bg-black px-15 pt-10 pb-10">
        <h1 className="text-white text-7xl pl-10 mb-30 font-myfontMed">Work</h1>
      </div>

      <div className="px-15">
        {sections.map((section, index) => (
          <div
            key={section.id}
            style={getSectionStyle(index)}
            className="min-h-screen flex items-center justify-center py-8 "
          >
            <div
              className=" w-full flex flex-col lg:flex-row items-center rounded-[27px] overflow-hidden relative border-2 "
              style={{
                backgroundColor: section.bgImage ? "transparent" : getSectionBgColor(section.id),
                borderColor: getSectionBorderColor(section.id),
                minHeight: "600px",
              }}
            >
              {/* Background Image (for VIXII & Blitz Trip) */}
              {section.bgImage && (
                <img
                  src={section.img}
                  alt={`${section.title} background`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {/* Left Card Section */}
              <div
                className={`bg-white rounded-[57px] shadow px-8 pb-12 py-8 max-w-lg w-full ml-6 my-6 ${section.bgImage ? "relative z-10" : ""}`}
                style={{ backgroundColor: getDescriptionBgColor(section.id) }}
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p
                      className="text-xl font-light text-black"
                      style={{ color: getDescriptionTextColor(section.id) }}
                    >
                      {section.category}
                    </p>
                    <h1
                      className="text-4xl font-medium text-black"
                      style={{ color: getDescriptionTextColor(section.id) }}
                    >
                      {section.title}
                    </h1>
                    <h2
                      className="text-2xl font-normal text-black"
                      style={{ color: getDescriptionTextColor(section.id) }}
                    >
                      {section.subtitle}
                    </h2>
                  </div>

                  <div
                    className="text-black leading-relaxed text-[13px]"
                    style={{ color: getDescriptionTextColor(section.id) }}
                  >
                    {section.description.split("\n").map((paragraph, idx) => (
                      <React.Fragment key={idx}>
                        {paragraph}
                        {idx < section.description.split("\n").length - 1}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3
                        className="font-semibold text-black text-base mb-1"
                        style={{ color: getDescriptionTextColor(section.id) }}
                      >
                        Tools Used:
                      </h3>
                      <p
                        className="font-normal text-black text-[13px]"
                        style={{ color: getDescriptionTextColor(section.id) }}
                      >
                        {section.toolsUsed}
                      </p>
                    </div>

                    <div>
                      <h3
                        className="font-semibold text-black text-base mb-1"
                        style={{ color: getDescriptionTextColor(section.id) }}
                      >
                        Skills Applied:
                      </h3>
                      <p
                        className="font-normal text-black text-[13px] leading-relaxed"
                        style={{ color: getDescriptionTextColor(section.id) }}
                      >
                        {section.skills.split("\n").map((skill, idx) => (
                          <React.Fragment key={idx}>
                            {skill}
                            {idx < section.skills.split("\n").length - 1 && (
                              <br />
                            )}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                    <a
                      href={getButtonLinks(section.id)}
                      className="cursor-none"
                      target="_blank"
                    >
                      <button
                        className=" border-black border-1 rounded-xl px-2 py-1 text-[15px] cursor-none"
                        style={{
                          color: getButtonTextColor(section.id),
                          borderColor: getButtonBorderColor(section.id),
                        }}
                      >
                        View Project
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Image Section (for non-bg cards) */}
              {!section.bgImage && (
                <div className="flex-1 max-w-4xl">
                  <img
                    className=" rounded-lg "
                    alt={`${section.title} showcase`}
                    src={section.img}
                    height={10000}
                    width={22000}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackingScrollShowcase;
