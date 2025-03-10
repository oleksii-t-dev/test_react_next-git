import {
  PhoneOutgoing,
  Mail,
  MapPin,
  Twitter,
  Instagram,
  Phone,
} from 'lucide-react';
import ContactForm from '../../components/forms/ContactForm';

export default function Contact() {
  return (
    <div>
      <h1 className="text-4xl poppins-bold text-center mb-3">Contact Us</h1>
      <p className="text-center text-[#717171] mb-5 md:mb-12">
        Any question or remarks? Just write us a message!
      </p>
      <div className="contact flex flex-col lg:flex-row mt-4 p-2 md:p-4 bg-white rounded-lg">
        <div className="contact__info relative overflow-hidden w-full lg:max-w-[490px] bg-black p-[40px] text-white rounded-xl rounded-br-none">
          <h2 className="contact__info_header text-center md:text-start">
            Contact Information
          </h2>
          <p className="contact__info_subheader mb-[15px] md:mb-[100px] text-center md:text-start">
            Say something to start a live chat!
          </p>

          <div className="md:max-w-[350px] mb-[50px] md:mb-[150px]">
            <div className="flex flex-col md:flex-row items-center md:items-start space-x-2 mb-[24px]">
              <PhoneOutgoing className="shrink-0 md:mr-[25px] mb-2 md:mb-0" />
              <p className="poppins-regular">+1012 3456 789</p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start space-x-2 mb-[24px]">
              <Mail className="shrink-0 md:mr-[25px] mb-2 md:mb-0" />
              <p className="poppins-regular">demo@gmail.com</p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start space-x-2 mb-[24px]">
              <MapPin className="shrink-0 md:mr-[25px] mb-2 md:mb-0" />
              <p className="poppins-regular text-center md:text-start z-10">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start  gap-5 z-10">
            <a
              href="#"
              className="z-10 group cursor-pointer flex items-center justify-center w-12 h-12 rounded-full bg-[#1b1b1b] transition-all duration-300 hover:bg-white border border-transparent hover:border-black">
              <Twitter className="w-4 h-4 fill-white group-hover:fill-black transition-all duration-300" />
            </a>
            <a
              href="#"
              className="z-10 group cursor-pointer flex items-center justify-center w-12 h-12 rounded-full bg-[#1b1b1b] transition-all duration-300 hover:bg-white border border-transparent hover:border-black">
              <Instagram className="w-4 h-4 group-hover:fill-black transition-all duration-300" />
            </a>
            <a
              href="#"
              className="z-10 group cursor-pointer flex items-center justify-center w-12 h-12 rounded-full bg-[#1b1b1b] transition-all duration-300 hover:bg-white border border-transparent hover:border-black">
              <Phone className="w-4 h-4  group-hover:fill-black transition-all duration-300" />
            </a>
          </div>

          <div className="z-1 absolute right-[20px] md:right-[40px] bottom-[20px] w-[54px] h-[54px] md:w-[138px] md:h-[138px] bg-custom rounded-full"></div>
          <div className="absolute right-[-80px] bottom-[-150px] w-[192px] h-[192px] md:w-[269px] md:h-[269px] bg-[#1a1a1a] rounded-full"></div>
        </div>

        <div className="contact__form w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
