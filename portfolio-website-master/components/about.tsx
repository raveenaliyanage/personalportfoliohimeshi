"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am currently pursuing a Bachelor of Science in Information Technology with Honors at the University of Sri Jayewardenepura, Sri Lanka, maintaining a GPA of 3.77. Prior to this, I earned a Diploma in English from the National Institute of Business Management, Sri Lanka, with a merit distinction.
      </p>

      <p className="mb-3">
      As an aspiring IT undergraduate, I am eager to apply my technical skills and knowledge to gain practical experience in a professional setting. With a strong passion for coding and problem-solving, I am a quick learner, team player, and possess excellent communication skills.
      </p>

      <p>
      <span className="italic">Beyond academics,</span>, I actively contribute to journalism as a Column Writer and Dubbing Artist at Pinna Production since August 2020. This role not only allows me to explore my passion for storytelling and media production but also complements my IT background, fostering a multifaceted approach to communication and expression.{" "}
        
      </p>
    </motion.section>
  );
}
