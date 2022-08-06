import { FaPen } from 'react-icons/fa';

const Textarea = () => (
  <div className="outlined relative rounded-md">
    <FaPen className="absolute bottom-2 right-2" />
    <textarea
      className="h-48 w-full py-2 px-4 text-slate-500 dark:text-slate-300 placeholder:text-slate-500"
      placeholder="write your message here..."
      minLength={8}
    />
  </div>
);

export default Textarea;
