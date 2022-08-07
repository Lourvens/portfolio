import { MdCall } from 'react-icons/md';
import { RiTwitterFill, RiLinkedinFill, RiGithubFill } from 'react-icons/ri';
import { HiOutlineDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';
import MaskTextEffect from '../components/maskTextEffect';
import { SOCIAL_LINKS } from '../constants';

const styles = {
  container: 'relative flex justify-between items-center',
  title: 'text-4xl font-heading text-black dark:text-slate-200',
  highlight: 'inline-block capitalize font-serif mt-4 mb-8 p-2 rounded bg-blue-50 text-blue-500 dark:bg-blue-600 dark:text-slate-200 elegant:bg-slate-200 elegant:text-slate-700',
  btnGroup: 'flex items-center gap-4 my-4',
  outlineBtn: 'outlined',
  socialIcon: 'text-[32px] elegant:text-slate-500',
  socialBox: 'flex flex-col gap-5 items-center',
  socialIndicator: 'w-1 h-8 bg-primary rounded-md',
};
const socialData = [
  {
    link: SOCIAL_LINKS.github,
    Icon: RiGithubFill,
  },
  {
    link: SOCIAL_LINKS.linkedin,
    Icon: RiLinkedinFill,
  },
  {
    link: SOCIAL_LINKS.twitter,
    Icon: RiTwitterFill,
  },
];

const socialBoxVariant = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1,
        staggerChildren: 0.3,
      },
    },
  },
  btn: {
    hidden: { opacity: 0, translateY: -30 },
    show: { opacity: 1, translateY: 0 },
  },
};
const Home = () => (
  <div className={styles.container} id="home">
    <div className="lg:w-[500px]">
      <MaskTextEffect>
        <h1 className={styles.title}>
          <mark className="bg-transparent text-orange elegant:text-slate-500">
            Hello,
          </mark>
          {' '}
          I am Luxamar Lourvens
        </h1>
      </MaskTextEffect>
      <div className={styles.highlight}>frontend developer</div>
      <p className="desc">
        You want to create shapely, scalable and robust web application then
        it is good to refer to a competent person in this field.
      </p>
      <div className={styles.btnGroup}>
        <a className="btn btn-primary" href="#contact">
          <MdCall />
          <span>contact me</span>
        </a>
        <a className="btn outlined" download href="cv.pdf">
          <HiOutlineDownload />
          <span>download the CV</span>
        </a>
      </div>
    </div>
    <motion.div
      variants={socialBoxVariant.container}
      initial="hidden"
      animate="show"
      className={styles.socialBox}
    >
      {socialData.map((social) => (
        <motion.a
          variants={socialBoxVariant.btn}
          className={styles.socialIcon}
          href={social.link}
          target="_blank"
          key={social.link}
        >
          <social.Icon />
        </motion.a>
      ))}
      <div className={styles.socialIndicator} />
    </motion.div>
  </div>
);

export default Home;
