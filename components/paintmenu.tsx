import { useContext } from 'react';
import { Menu } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import { MdInvertColors } from 'react-icons/md';
import { FaPaintBrush } from 'react-icons/fa';

import useTheme from '../hooks/theme';

const styles = {
  container: 'relative inline-block',
  menu: 'z-10 px-2 absolute right-4 mt-2 shadow-md rounded-lg bg-blue-500 bg-primary bg-blue-500',
  btn: 'p-2 rounded-full bg-primary text-slate-100',
  menuItem: 'flex w-full rounded-lg gap-x-4 items-center text-lg text-slate-100 cursor-pointer hover:bg-tint my-2 px-3 py-1',
};

const PaintMenu = () => {
  const { themeContext } = useTheme();
  const { updateTheme } = useContext(themeContext);

  const themes = [
    { name: 'light', Icon: RiSunLine },
    { name: 'dark', Icon: RiMoonClearLine },
    { name: 'elegant', Icon: MdInvertColors },
  ];
  return (
    <Menu as="div" className={styles.container}>
      {
        ({ open }) => (
          <>
            <Menu.Button className={styles.btn}>
              <FaPaintBrush />
            </Menu.Button>
            <AnimatePresence>
              {open
              && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <Menu.Items className={styles.menu} static>
                  {themes.map(({ name, Icon }) => (
                    <Menu.Item
                      key={name}
                      as="button"
                      onClick={() => updateTheme(name)}
                      className={styles.menuItem}
                    >
                      <>
                        <Icon />
                        <span className="capitalize">{name}</span>
                      </>
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </motion.div>
              )}
            </AnimatePresence>
          </>
        )
      }
    </Menu>
  );
};

export default PaintMenu;
