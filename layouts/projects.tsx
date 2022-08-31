import Card from '../components/card';
import NetbookBrand from '../assets/brand/netbook.png';
import DagencyBrand from '../assets/brand/dagency.png';
import CreatificBrand from '../assets/brand/creatific.png';

const details = [
  {
    name: 'Netbook',
    desc: 'A responsive landing page created with NextJs',
    link: 'https://netbook-lourvens.vercel.app/',
    banner: NetbookBrand,
  }, {
    name: 'D-Agency',
    desc: 'A modern agency landing page create with NextJs / NextUi',
    link: 'https://dagency.vercel.app/',
    banner: DagencyBrand,
  }, {
    name: 'Creatific',
    desc: 'A minimalistic agency website build on Astro',
    link: 'https://creatific.vercel.app/',
    banner: CreatificBrand,
  },
];

const Project = () => (
  <div className="wrapper section" id="project">
    <div className="section--header">
      <h3 className="section--subtitle">What I can do?</h3>
      <h1 className="section--title">Project</h1>
    </div>
    <div className="py-8 flex lg:justify-center gap-4 overflow-x-scroll lg:overflow-x-hidden">
      {details.map((detail) => <Card key={detail.name} {...detail} />)}
    </div>
  </div>
);

export default Project;
