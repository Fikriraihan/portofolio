import React from "react";
import { motion } from "framer-motion";
import Skillss from "./Skillss";
import { PageInfo, Skills as Skilltype } from "../typings";

type Props = {};

function Skill({}: Props) {
  return (
    <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for name</h3>

      <div className="grid grid-cols-4 gap-5">
        <Skillss image="https://cdn-icons-png.flaticon.com/512/732/732212.png" description="HTML" />
        <Skillss image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" description="CSS" />
        <Skillss image="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" description="JavaScript" />
        <Skillss image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mw1JQ5drPDUpem5IloySacat1zgp1_7T81YFJXu_SA&s" description="Bootstrap" />
        <Skillss image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" description="Tailwind" />
        <Skillss image="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" description="React" />
        <Skillss image="https://img.stackshare.io/service/7374/react-redux.png" description="React Redux" />
        <Skillss image="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" description="Next.js" />
        <Skillss image="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" description="Git" />
        <Skillss image="https://cdn-icons-png.flaticon.com/512/25/25231.png" description="GitHub" />
        <Skillss image="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png" description="GitLab" />
        <Skillss image="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_96102ac6497377cd53da621075fe828e/sanity.png" description="Sanity" />
      </div>
    </motion.div>
  );
}

export default Skill;

{
  /* {skills?.map((skill) => (
          <Skillss key={skill._id} skills={skills} />
        ))} */
}
