import Card from '../components/card';
import NetbookBrand from '../assets/brand/netbook.png';

const details = [
  {
    name: 'Netbook',
    desc: 'A responsive landing page created with NextJs',
    link: 'https://netbook-b44nkfyi6-lourvens.vercel.app/',
    banner: NetbookBrand,
  },
];

const Project = () => (
  <div className="wrapper section" id="project">
    <div className="section--header">
      <h3 className="section--subtitle">What I can do?</h3>
      <h1 className="section--title">Project</h1>
    </div>
    <div className="py-8 flex justify-center gap-4 overflow-x-scroll lg:overflow-x-hidden">
      {details.map((detail) => <Card key={detail.name} {...detail} />)}
    </div>
  </div>
);

export default Project;
