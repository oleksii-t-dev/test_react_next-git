import Link from "next/link";
import { PhoneOutgoing, Mail, MapPin } from "lucide-react";
import FooterForm from "./forms/FooterForm";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-[20px]">
      <div className="container mx-auto pt-[80px] pb-[45px]">
        <div className="inter-font text-center text-4xl font-bold">
          Logo Here
        </div>
      </div>

      <div className="container mx-auto bg-white h-px" />

      <div className="container mx-auto">
        <div className="w-full py-10 flex justify-center lg:justify-between">
          <div className="inline-grid gap-8 lg:gap-10 w-full grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:[grid-template-columns:repeat(5,auto)]">
            <div className="max-w-[300px]">
              <h3 className="text-lg font-bold mb-4">Reach us</h3>
              <div className="flex flex-col md:flex-row items-start space-x-2 mb-[24px]">
                <PhoneOutgoing className="shrink-0 mr-[25px] mb-2 md:mb-0" />
                <p className="poppins-regular">+1012 3456 789</p>
              </div>
              <div className="flex flex-col md:flex-row items-start space-x-2 mb-[24px]">
                <Mail className="shrink-0 mr-[25px] mb-2 md:mb-0" />
                <p className="poppins-regular">demo@gmail.com</p>
              </div>
              <div className="flex flex-col md:flex-row items-start space-x-2 mb-[24px]">
                <MapPin className="shrink-0 mr-[25px] mb-2 md:mb-0" />
                <p className="poppins-regular">
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </p>
              </div>
            </div>

            <div className="ml-auto sm:ml-0 lg:min-w-[130px]">
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-base">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-base">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-base">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 lg:min-w-[130px]">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-base">Privacy Policy</li>
                <li className="text-base">Terms & Services</li>
                <li className="text-base">Terms of Use</li>
                <li className="text-base">Refund Policy</li>
              </ul>
            </div>

            <div className="ml-auto sm:ml-0 lg:min-w-[130px]">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-base">Techlabz Keybox</li>
                <li className="text-base">Downloads</li>
                <li className="text-base">Forum</li>
              </ul>
            </div>

            <FooterForm/>

          </div>
        </div>
      </div>
    </footer>
  );
}
