import { motion } from 'framer-motion';
import PaintMenu from '../components/paintmenu';

const styles = {
  container: 'wrapper grid-wrap mt-4 lg:mt-12 flex w-full items-center justify-between',
  title: 'font-heading title lg:col-span-4',
  nav: 'lg:col-span-8 flex justify-between',
  navLink: 'hidden lg:flex gap-16',
  navItem: 'link first-letter:capitalize font-sans',
  btnGroup: 'flex items-center gap-8 ',
  btnIcon: 'text-2xl',
  btnMore: ' lg:hidden',
  btnPaint: ' hidden lg:block',
};

const Navbar = () => (
  <motion.nav
    className={styles.container}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
  >
    <h1 className={styles.title}>
      lourvens.
    </h1>
    <div className={styles.nav}>
      <ul className={styles.navLink}>
        <li className={styles.navItem}><a href="#Home">home</a></li>
        <li className={styles.navItem}><a href="#about">about me</a></li>
        <li className={styles.navItem}><a href="#project">projects</a></li>
        <li className={styles.navItem}><a href="#contact">contact</a></li>
      </ul>
      <div className={styles.btnGroup}>
        <PaintMenu />
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
