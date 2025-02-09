import React from "react";
import FooterList from "./FooterList";
import {
  FooterLink2,
  FooterLink1,
  FooterLogoArray,
  FooterBottomText,
} from "../../data/footer-links";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { FaHeart } from "react-icons/fa";
import FooterLogo from "./FooterLogo";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <div className='border-t border-[#6E727F] bg-[#161D29] py-10 text-sm'>
      <div className='mx-auto flex w-[95%] flex-col gap-6'>
        <div className='flex flex-col justify-between gap-[2rem] md:flex-row'>
          {/* Footer left */}
          <div className='flex flex-col justify-evenly gap-[2rem] md:w-[48%] md:flex-row'>
            <div className='flex flex-col gap-[1rem]'>
              <img
                src={Logo}
                alt='StudyNotion Logo'
                className='w-[150px] md:w-[200px]'
              />
              <FooterList data={FooterLink1[0]} />
              <FooterLogo data={FooterLogoArray} color={"#6E727F"} />
            </div>
            <div className='flex flex-col gap-[2rem] md:flex-row'>
              <div className='flex flex-col gap-[2rem]'>
                <FooterList data={FooterLink1[1]} />
                <FooterList data={FooterLink1[2]} />
              </div>
              <div className='flex flex-col gap-[2rem]'>
                <FooterList data={FooterLink1[3]} />
                <FooterList data={FooterLink1[4]} />
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className='hidden md:block'>
            <hr className='md:h-full md:w-[0.5px] md:border-none md:bg-[#405271]' />
          </div>

          {/* Footer right */}
          <div className='flex flex-col justify-evenly gap-[2rem] md:w-[48%] md:flex-row'>
            {FooterLink2.map((item, index) => (
              <div key={index} className='flex flex-col'>
                <FooterList data={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className='md:mx-auto md:h-[0.5px] md:w-[90%] md:bg-[#405271]'></div>

        {/* Footer Bottom */}
        <div className='mx-auto flex w-full flex-col justify-between gap-[1rem] text-[#6E727F] md:w-[80%] md:flex-row'>
          <div className='flex flex-col gap-[1rem] md:flex-row'>
            {FooterBottomText.map((item, index) => (
              <Link key={index} to={item.link}>
                {item.title}
              </Link>
            ))}
          </div>
          <p className='text-center md:text-left'>
            Made with <FaHeart className='inline text-[#ff1c1c]' /> Shubham
            Kumar © 2024 StudyNotion
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
