import Image from 'next/image';
import avatar from '../assets/avatar.png';

const About = () => (
  <div className="section lg:w-[600px]" id="about">
    <div className="section--header">
      <h3 className="section--subtitle">who am I ?</h3>
      <h1 className="section--title">about me</h1>
    </div>
    <div className="my-2 font-semibold">
      <div className="lg:hidden float-left mr-3 rounded h-32 w-32 bg-highlight overflow-hidden">
        <Image src={avatar} />
      </div>
      <p className="text-justify">
        Adept at digital technologies, programming has become my hobby.
        self learning frontend development rigorously.  Developed deep skills in Typescript,
        NextJs and other tools which improve development performance.  Dedicated to learning
        new skills (currently learning NodeJs and Nest).Build and capability to create progressive
        and scalable Web  App. Adessed and fixed complex bugs. Looking for an entry-level position
        at a great company to be a hard-working asset to any team, to learn, grow and develop
        long-term.
      </p>
    </div>
  </div>
);

export default About;
