import React from 'react';
import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";
import { Link } from "@nextui-org/link"; 
import { MdiLinkedin, MdiGithub, MdiYoutube, SimpleIconsOrcid, AcademiconsGoogleScholar } from "@/components/icons";
import { anonPro, anonProBold } from '@/config/fonts';



const XBio: React.FC = () => {
    return (
      <div className="flex flex-col w-full border-2 p-6 border-slate-300 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2 text-fore">
          {/* Image */}
          <div className="col-span-1 md:col-start-1 md:col-end-2 flex justify-start md:justify-center mb-4 md:mb-0">
            <div className="thumbnail flex items-center justify-center rounded-full overflow-hidden w-40 h-40 md:w-20 md:h-20 border-4 border-fore">
              <Image
                src="/modified_headshot.jpg"
                alt="Headshot"
                width={800}
                height={200}
                className="object-cover -mt-12"
              />
            </div>
          </div>
          {/* Name and Title */}
          <div className="col-span-1 md:col-start-2 md:col-span-3 mb-4 md:mb-0">
            <p className="font-bold">Nick Janne</p>
            <p>PhD Student in Robotics @ the University of Michigan.</p>
          </div>
          {/* Icons */}
          <div className="col-span-1 md:col-start-5 md:col-span-2 flex flex-row items-center justify-around align-middle mb-5 md:mb-0">
            <a href="https://www.linkedin.com/in/nickjanne/" className="w-10 h-10">
              <MdiLinkedin className="w-10 h-10" />
            </a>
            <a href="https://github.com/njanne19" className="w-10 h-10">
              <MdiGithub className="w-10 h-10" />
            </a>
            <a href="https://www.youtube.com/@nickjanne" className="w-10 h-10">
              <MdiYoutube className="w-10 h-10" />
            </a>
            <a href="https://orcid.org/0009-0003-1721-8356" className="w-10 h-10">
              <SimpleIconsOrcid className="w-10 h-10" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=QPxZCFQAAAAJ&hl=en&authuser=1"
              className="w-10 h-10"
            >
              <AcademiconsGoogleScholar className="w-10 h-10" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 mx-auto">
          <p className="text-fore">Contact me: njanne (at) umich (dot) edu</p>
        </div>
      </div>
    );
  };
  

export default XBio;