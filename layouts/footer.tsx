import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SOCIAL_LINKS } from '../constants';

const navlinkDetails = ['about me', 'projects', 'contacts'];
const socialdetails = [
  {
    name: 'twitter',
    Icon: FiTwitter,
    link: SOCIAL_LINKS.twitter,
  },
  {
    name: 'github',
    Icon: FiGithub,
    link: SOCIAL_LINKS.github,
  },
  {
    name: 'linkedIn',
    Icon: FiLinkedin,
    link: SOCIAL_LINKS.linkedin,
  },
];
const Footer = () => (
  <footer className="wrapper bg-blue-900 dark:bg-blue-600 elegant:bg-slate-800">
    <div className="flex flex-col lg:flex-row justify-between gap-4 py-4">

      <div>
        <h1 className="title">Lourvens.</h1>
        <h3 className="font-sans capitalize text-lg text-orange elegant:text-slate-300">
          Frontend developer
        </h3>
      </div>
      <div>
        <span className="title">
          Follow me on
        </span>
        <div className="flex gap-8 my-4 lg:text-xl">
          {socialdetails.map(({ Icon, link, name }) => (
            <div className="flex flex-col items-center" key={name}>
              <a className="text-4xl text-slate-100" href={link} target="_blank" rel="noreferrer">
                <Icon />
              </a>
              <span className="capitalize text-slate-300">{name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="title">navigate</h1>
        <div className="flex gap-8 capitalize text-lg">
          {navlinkDetails.map((link) => (
            <a
              href="#link"
              key={link}
              className="underline text-slate-300 font-heading"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="text-center pb-2 text-blue-400">
      Created carefully by Luxamar Lourvens.
    </div>
  </footer>
);

export default Footer;
