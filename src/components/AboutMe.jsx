// import { useState } from "react";

// function AboutMe() {
//   const [isToggled, setIsToggled] = useState(false);
//   return (
//     <>
//       <div className="w-full bg-black pb-30 text-white pt-30">
//         <div className="pl-30">
//           <h1 className=" font-myfontMed text-5xl mb-10 text-white ">I am?</h1>
//           <button
//             onClick={() => setIsToggled(!isToggled)}
//             className={`relative inline-flex h-10 w-18 items-center rounded-full transition-colors cursor-none  focus:ring-offset-black ${
//               isToggled ? "bg-[#cf8b01] cursor-none" : "bg-gray-400 cursor-none"
//             }`}
//           >
//             <span
//               className={`inline-block h-7 w-7 transform rounded-full cursor-none bg-white shadow-[2px_14px_19px_-1px_rgba(0,_0,_0,_0.1)] transition-transform ${
//                 isToggled ? "translate-x-10" : "translate-x-1"
//               }`}
//             />
//           </button>
//         </div>
//         <div className="flex px-30">
//           <div className="text-[#cccccc]">
//             <div className="transition-all duration-300 max-w-sm mt-16">
//               <p className="text-base leading-relaxed font-myfontText">
//                 <span
//                   className={
//                     isToggled
//                       ? "line-through opacity-40 transition-all duration-700"
//                       : ""
//                   }
//                 >
//                   Hey there! I’m
//                 </span>{" "}
//                 Prachi — a UI/UX designer{" "}
//                 <span
//                   className={
//                     isToggled
//                       ? "line-through opacity-40 transition-all duration-700"
//                       : ""
//                   }
//                 >
//                   and
//                 </span>{" "}
//                 NIFT grad{" "}
//                 <span
//                   className={
//                     isToggled
//                       ? "line-through opacity-40 transition-all duration-700"
//                       : ""
//                   }
//                 >
//                   with a passion for creating
//                 </span>{" "}
//                 intuitive, user-centered{" "}
//                 <span
//                   className={
//                     isToggled
//                       ? "line-through opacity-40 transition-all duration-700"
//                       : ""
//                   }
//                 >
//                   digital experiences. Skilled in and responsive design
//                 </span>{" "}
//                 Figma, UX research, wireframing,{" "}
//                 <span
//                   className={
//                     isToggled
//                       ? "line-through opacity-40 transition-all duration-700"
//                       : ""
//                   }
//                 >
//                   and
//                 </span>{" "}
//                 responsive design.{" "}
//                 <span
//                   className={
//                     isToggled
//                       ? "line-through opacity-40 transition-all duration-700"
//                       : ""
//                   }
//                 >
//                   I love turning real-world problems into
//                 </span>{" "}
//                 clean and functional interfaces{" "}
//                 <span
//                   className={
//                     isToggled
//                       ? "line-through opacity-40 transition-all duration-700"
//                       : ""
//                   }
//                 >
//                   that feel good and look even better.
//                 </span>{" "}
//               </p>
//             </div>
//           </div>

//           <div className=" pl-15 mt-35 text-[#cccccc]">
//             <div className="transition-all duration-300 max-w-sm mt-16">
//               <p className="text-base leading-relaxed font-myfontText">
//                 <span
//                   className={
//                     isToggled
//                       ? "line-through opacity-40 transition-all duration-700"
//                       : ""
//                   }
//                 >
//                   I’ve always had a bit of an OCD when it comes to visual
//                   neatness, which shows in my
//                 </span>{" "}
//                 pixel-perfect layouts{" "}
//                 <span
//                   className={
//                     isToggled
//                       ? "line-through opacity-40 transition-all duration-700"
//                       : ""
//                   }
//                 >
//                   and love for
//                 </span>{" "}
//                 clarity
//                 <span
//                   className={
//                     isToggled
//                       ? "line-through opacity-40 transition-all duration-700"
//                       : ""
//                   }
//                 ></span>{" "}
//                 and consistency.{" "}
//                 <span
//                   className={
//                     isToggled
//                       ? "line-through opacity-40 transition-all duration-700"
//                       : ""
//                   }
//                 >
//                   My design style leans
//                 </span>{" "}
//                 modern, minimal, and purposeful
//                 <span
//                   className={
//                     isToggled
//                       ? "line-through opacity-40 transition-all duration-700"
//                       : ""
//                   }
//                 >
//                   - everything has a reason to exist. Whether it’s aligning
//                   elements or refining a
//                 </span>{" "}
//                 design system,{" "}
//                 <span
//                   className={
//                     isToggled
//                       ? "line-through opacity-40 transition-all duration-700"
//                       : ""
//                   }
//                 >
//                   I find joy in getting the
//                 </span>{" "}
//                 details just right.
//               </p>
//             </div>
//           </div>

//           <div className=" px-15 mt-60 text-[#cccccc]">
//             <div className="transition-all duration-300 max-w-sm mt-24">
//               <p className="text-base leading-relaxed font-myfontText">
//                 <span
//                   className={
//                     isToggled
//                       ? "line-through opacity-40 transition-all duration-700"
//                       : ""
//                   }
//                 >
//                   And here’s a fun twist — my
//                 </span>{" "}
//                 background in fashion{" "}
//                 <span
//                   className={
//                     isToggled
//                       ? "line-through opacity-40 transition-all duration-700"
//                       : ""
//                   }
//                 >
//                   means I also bring an eye for style to the table. I’ve got a
//                   knack for putting looks together,
//                 </span>{" "}
//                 <span
//                   className={
//                     isToggled
//                       ? "line-through opacity-40 transition-all duration-700"
//                       : ""
//                   }
//                 >
//                   so don’t be surprised if working with me comes with the
//                   occasional office outfit inspo! For me, whether it’s styling a
//                   screen or a fit, it’s all about
//                 </span>{" "}
//                 creating something that feels just right.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AboutMe;


import { useState } from "react";

function AboutMe() {
  const [isToggled, setIsToggled] = useState(false);

  const strikeClass = isToggled
    ? "line-through opacity-40 transition-all duration-700"
    : "transition-all duration-700";

  const keywordClass =
    "text-black transition-all duration-700";

  return (
    <div className="w-full bg-white pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-24 px-5 sm:px-8 md:px-16 lg:px-24">
      <div className="mb-8 md:mb-12">
        <h1 className="text-black font-myfontMed text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 uppercase">
          I AM
        </h1>

        <button
          onClick={() => setIsToggled(!isToggled)}
          className={`relative inline-flex h-10 w-20 items-center rounded-full transition-colors ${
            isToggled ? "bg-[#cf8b01]" : "bg-[#cfcfcf]"
          }`}
        >
          <span
            className={`inline-block h-7 w-7 transform rounded-full bg-white shadow-md transition-transform ${
              isToggled ? "translate-x-11" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-black">
        {/* Column 1 */}
        <div className="max-w-md">
          <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.4] sm:leading-[1.28] font-myfontText">
            <span className={strikeClass}>Hi, I’m </span>
            <span className={keywordClass}>Prachi</span>
            <span className={strikeClass}> — a </span>
            <span className={keywordClass}>UI/UX designer</span>
            <span className={strikeClass}>
              {" "}
              and NIFT graduate passionate about creating intuitive,{" "}
            </span>
            <span className={keywordClass}>user-centered digital experiences.</span>
            <span className={strikeClass}> I have hands-on experience with </span>
            <span className={keywordClass}>
              Figma, UX research, wireframing, and responsive design
            </span>
            <span className={strikeClass}>
              , and I’m continuously improving my skills as I grow as a designer.
              I enjoy turning{" "}
            </span>
            <span className={keywordClass}>
              real-world problems into clean, functional interfaces
            </span>
            <span className={strikeClass}>
              {" "}
              that are both effective and visually engaging.
            </span>
          </p>
        </div>

        {/* Column 2 */}
        <div className="max-w-md xl:mt-28">
          <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.4] sm:leading-[1.28] font-myfontText">
            <span className={strikeClass}>I have a strong </span>
            <span className={keywordClass}>eye for detail</span>
            <span className={strikeClass}>
              {" "}
              and a natural inclination toward visual clarity, which reflects in my
              structured, consistent, and{" "}
            </span>
            <span className={keywordClass}>pixel-precise designs.</span>
            <span className={strikeClass}> My style is modern, minimal, and purposeful—where </span>
            <span className={keywordClass}>every element has a clear reason to exist.</span>
            <span className={strikeClass}>
              {" "}
              Whether it’s refining layouts or building design systems, I enjoy
              perfecting the finer details.
            </span>
          </p>
        </div>

        {/* Column 3 */}
        <div className="max-w-md xl:mt-48">
          <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.4] sm:leading-[1.28] font-myfontText">
            <span className={strikeClass}>
              With a background in fashion, I also bring a strong{" "}
            </span>
            <span className={keywordClass}>sense of aesthetics</span>
            <span className={strikeClass}>
              {" "}
              and styling into my work. For me, whether it’s{" "}
            </span>
            <span className={keywordClass}>designing a digital experience</span>
            <span className={strikeClass}>
              {" "}
              or putting together a look, it’s all about{" "}
            </span>
            <span className={keywordClass}>
              creating something that feels just right.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;