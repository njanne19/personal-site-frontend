import { Image } from "@nextui-org/image";
import { Card } from "@nextui-org/card";
import { Link } from "@nextui-org/link"; 

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row mainpage-background">
      <div className="left-column md:sticky top-6 md:flex-shrink-0 md:w-1/3 p-4"> 
        <div className="thumbnail flex items-center justify-center rounded-full 
                        overflow-hidden w-72 h-72 bg-gray-200 border-4 border-indigo-500">
          <Image 
            src="/headshot.jpeg"
            alt="Headshot"
            className="object-cover mt-20"
            width={400}
            height={400}
          />
        </div>
        <div className="social-media-cards mt-4">
          <Card className="mb-4">Social Media 1</Card>
          <Card className="mb-4">Social Media 2</Card>
          <Card className="mb-4">Social Media 3</Card>  
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
        <div className="posts-list space-y-4">
          <Card> Post 1 </Card>
          <Card> Post 2 </Card>
          <Card> Post 3 </Card>
        </div>
      </div>
    </div> 
  );
}
