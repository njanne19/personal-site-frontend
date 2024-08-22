import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";
import { Link } from "@nextui-org/link"; 
import { MdiLinkedin, MdiGithub, MdiYoutube, SimpleIconsOrcid, AcademiconsGoogleScholar } from "@/components/icons";
import Resume from "@/components/resume";
import Publications from "@/components/publications";

export default function Home() {
  return (
    <div className="container mx-auto">
    <div className="flex flex-col md:flex-row mainpage-background">
      <div className="left-column md:sticky top-6 md:flex-shrink-0 md:w-1/3 p-4"> 
        <div className="flex items-center justify-center"> 
        <div className="thumbnail flex items-center justify-center rounded-full 
                        overflow-hidden w-72 h-72 bg-gray-200 border-4 border-slate-700">
          <Image 
            src="/headshot.jpeg"
            alt="Headshot"
            className="object-cover mt-20"
            width={400}
            height={400}
          />
        </div>
        </div>
        <div className="flex items-center justify-center social-media-cards mt-4">
          <div className="flex flex-row space-x-4 items-center justify-around"> 
            <a href="https://www.linkedin.com/in/nickjanne/" className="w-10 h-10">
            <MdiLinkedin href="https://www.linkedin.com/in/nickjanne/" className="w-10 h-10" />
            </a>
            <a href="https://github.com/njanne19" className="w-10 h-10">
            <MdiGithub href="https://github.com/njanne19" className="w-10 h-10"/>
            </a>
            <a href="https://www.youtube.com/@nickjanne" className="w-10 h-10">
            <MdiYoutube href="https://www.youtube.com/@nickjanne" className="w-10 h-10"/>
            </a>
            <a href="https://orcid.org/0009-0003-1721-8356" className="w-10 h-10">
            <SimpleIconsOrcid href="https://orcid.org/0009-0003-1721-8356" className="w-10 h-10"/>
            </a>
            <a href="https://scholar.google.com/citations?user=QPxZCFQAAAAJ&hl=en&authuser=1" className="w-10 h-10">
            <AcademiconsGoogleScholar href="https://scholar.google.com/citations?user=QPxZCFQAAAAJ&hl=en&authuser=1" className="w-10 h-10"/>
            </a>
          </div>
        </div>
      </div>
      <div className="right-column flex-grow md:w-2/3 p-4 overflow-y-auto max-h-screen">
        <h1 className="text-4xl font-bold mt-6">I'm Nick Janne.</h1>
        <p>
          I'm a PhD student in the <Link href="#"> Department of Robotics </Link> at the University of Michigan. 
          I'm advised by Professors <Link href="#"> Brent Gillespie </Link> and <Link href="#"> Chad Jenkins </Link>. I graduated with my 
          B.S.E in Computer Engineering from the University of Michigan in 2023. My research interests are centered on bringing adaptation
          and learning mechanisms to robots for task and motion planning. I'm particularily interested in raising the capability of robots to deal with uncertainty, so that 
          we may one day raise a robot fleet to construct permanent human habitats on the Moon and Mars. I worked as an intern at SpaceX from 2021-2023 on the Guidance, Navigation, and Control team for the Starship HLS program, 
          as well as the Starship RF engineering team. I've now started a small rocket organization of my own called <Link href="#"> Cow2k </Link>, where I'm working towards my High Powered Rocketry certifications with a group of friends and colleagues. 
        </p>
      </div>
    </div> 
    <div className="flex flex-col md:p-20">
      <Publications />
      <Resume />
    </div>
    </div>
  );
}
