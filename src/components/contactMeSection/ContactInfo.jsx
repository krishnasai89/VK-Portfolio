import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo
        text="krishnasaivellampalli@gmail.com"
        Image={HiOutlineMail}
        name="to_name"
      />
      <SingleInfo text="+91 xxx-xxx-xxxx" Image={FiPhone} />
      <SingleInfo text="Andhra Pradesh, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
