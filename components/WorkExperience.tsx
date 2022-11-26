import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
        {/* <ExperienceCard
          image="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/25f6ffcefbac1f1d53d01f97f7a264da.png"
          title="Full-Stack Web Developer"
          company="Harisenin.com"
          startDate="March 2022"
          endDate="July 2022"
          point1="Immersive training program with an emphasis on Full-Stack Web Development" */}

        {/* <ExperienceCard
          image="https://media-exp1.licdn.com/dms/image/C510BAQFjyctlNgsMYQ/company-logo_200_200/0/1534771700383?e=2147483647&v=beta&t=mdpYAgaEHfSLgWQZtXHJVjYT9lv4cNIeWp8SVSBiYFo"
          title="Front-End Developer Intern"
          company="FXMedia Internet PTE LTD"
          startDate="May 2022"
          endDate="November 2022"
          point1="Developed responsive website application using HTML, CSS, JavaScript."
          point2="Created fully animated website using React and GreenSock."
          point3="Created Drag and Drop “Analytics Project Plan Lifecycle Game” using Construct 3"
          point4="Do research about Web 3.0, Blockchain, and Moralis."
        />
        <ExperienceCard
          image="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/25f6ffcefbac1f1d53d01f97f7a264da.png"
          title="Front-End Developer"
          company="Harisenin.com"
          startDate="September 2022"
          endDate="Present"
          point1="Collaborated with the team to create a responsive web"
          point2="Implemented the design that provided by the design team on Figma into website using Next.js and Tailwind"
        /> */}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
