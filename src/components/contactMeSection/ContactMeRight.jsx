import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import Contact_img from "../../images/email-image.png";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img src={Contact_img} alt="email image" className="max-w-[300px]" />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
