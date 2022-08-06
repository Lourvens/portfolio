import { FC } from 'react';

const styles = {
  animeLabel: `absolute left-12 transform py-3 transition-transform pointer-events-none
    peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:-translate-x-4
    peer-valid:-translate-y-1/2 peer-valid:scale-90 peer-valid:-translate-x-4
  `,
};
type PropTypes = FC<{ Icon: JSX.Element, placeholder: string}>
const InputField: PropTypes = ({
  Icon, placeholder,
}) => (
  <div className="relative outlined rounded-md flex items-center p-3 my-4">
    <span className="text-2xl pointer-events-none">
      <Icon />
    </span>
    <input
      required
      type="text"
      name="text"
      autoComplete="off"
      min={4}
      className="w-full ml-4 peer text-slate-500"
    />
    <span className={styles.animeLabel}>
      <span className="bg-slate-50 dark:bg-blue-900 px-2">
        {placeholder}
      </span>
    </span>
  </div>
);

export default InputField;
