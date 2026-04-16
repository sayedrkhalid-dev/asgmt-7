import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin, BsX } from "react-icons/bs";

const FooterCom = () => {
  return (
    <Footer>
      <div className="w-full max-w-11/12 mx-auto pt-8 py-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            KeenKeeper
          </h1>
          <p className="mt-4 flex items-center text-center font-normal text-gray-500 dark:text-gray-300">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        <div className="my-8 flex flex-col items-center">
          <h3 className="text-xl text-gray-900 dark:text-gray-50">
            Social links
          </h3>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center gap-4">
            <Link href="https://www.facebook.com/SayedRKhalid/">
              <BsFacebook size="24" fill="gray" />
            </Link>
            <Link href="#">
              <BsInstagram size="24" fill="gray" />
            </Link>
            <Link href="https://www.linkedin.com/in/sayed-r-khalid-al-amin-9461733b6/">
              <BsLinkedin size="24" fill="gray" />
            </Link>
            <Link href="#">
              <BsX size="24" fill="gray" />
            </Link>
          </div>
        </div>

        <FooterDivider />

        <div container className="mt-8 flex justify-between">
          <div className="flex items-center gap-2">
            <FooterCopyright href="/" by=" KinKeeper" year={2026} />
            <span className="text-xs text-gray-700 dark:text-gray-300">
              All Rights reserved.
            </span>
          </div>
          <FooterLinkGroup className="flex items-center gap-2">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Services</FooterLink>
            <FooterLink href="#">Cookies</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
