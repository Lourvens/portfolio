import Image, { StaticImageData } from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { FC } from 'react';

const styles = {
  container: 'flex-shrink-0 relative w-96 shadow-md',
  line: 'absolute w-full h-2 bottom-0 bg-highlight',
  link: 'flex items-center gap-3 font-semibold section--subtitle text-base font-sans group',
  title: 'text-lg font-bold',
  arrowIcon: 'transform transition-transform group-hover:translate-x-2',
};

type PropTypes = FC<{ name : string, desc: string, banner: StaticImageData, link: string}>;

const Card: PropTypes = ({
  name, desc, banner, link,
}) => (
  <div className={styles.container}>
    <div className="relative h-48 w-full">
      <Image src={banner} layout="fill" />
      <div className={styles.line} />
    </div>
    <div className="p-4">
      <h1 className={styles.title}>{name}</h1>
      <p>
        {' '}
        {desc}
        {' '}
      </p>
      <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
        open the website
        {' '}
        <BsArrowRight className={styles.arrowIcon} />
      </a>
    </div>
  </div>
);

export default Card;
