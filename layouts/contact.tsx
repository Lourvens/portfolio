import Image from 'next/image';
import { AiTwotoneSound } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoIosSend } from 'react-icons/io';

import CallIcon from '../assets/call.png';
import EmailIcon from '../assets/email.png';
import LocationIcon from '../assets/location.png';
import InputField from '../components/inputField';
import TextareaField from '../components/textarea';
import { CONTACT_INFO } from '../constants';

const styles = {
  container: 'wrapper section',
  infoBox: 'flex flex-col gap-4 my-4',
  infoCard: 'flex gap-8',
  infoTitle: 'title',
};

const Contact = () => {
  const contactDetails = [
    {
      name: 'Call me',
      desc: CONTACT_INFO.phone,
      icon: CallIcon,
    },
    {
      name: 'email',
      desc: CONTACT_INFO.email,
      icon: EmailIcon,
    },
    {
      name: 'location',
      desc: CONTACT_INFO.location,
      icon: LocationIcon,
    },
  ];
  return (
    <div className={styles.container} id="contact">
      <div className="section--header">
        <h3 className="section--subtitle">How you can find me ?</h3>
        <h1 className="section--title">Contact</h1>
      </div>
      <div className="grid-wrap">
        <div className="col-span-4">
          <h3 className="section--title text-xl flex gap-x-2 items-center">
            Let&apos;s talk
            <AiTwotoneSound />
          </h3>
          <div className={styles.infoBox}>
            {contactDetails.map((details) => (
              <div key={details.name} className={styles.infoCard}>
                <Image src={details.icon} width={48} height={48} />
                <div>
                  <h1 className={styles.infoTitle}>{details.name}</h1>
                  <h3 className="">{details.desc}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form
          className="col-span-5 my-16 lg:my-0"
          action="mailto:lourvens.luxamar@gmail.com"
          method="get"
          encType="text/plain"
        >
          <InputField Icon={FaUserAlt} placeholder="Full name" />
          <InputField Icon={MdEmail} placeholder="Email address" />
          <TextareaField />
          <button type="submit" className="btn btn-primary my-2 font-bold text-xl ">
            <IoIosSend />
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
