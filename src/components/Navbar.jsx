import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import CV from "../assets/js.pdf"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const mailtoHref = "mailto:1998javad@gmail.com?subject=SendMail&body=Description";


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-lg'>
      <div>
        <img src={Logo} alt='Logo Image'  className="contains h-[80px] w-36" />
      </div>

      {/* menu */}
      <ul className='hidden md:flex ' >
        <li className= ' hover:text-[#C778DD] font-bold'>
          <Link to='home' smooth={true} duration={500}>
            <span className='text-[#C778DD]'>#</span>Home
          </Link>
        </li>
        <li className= ' hover:text-[#C778DD] font-bold'>
          <Link to='about' smooth={true} duration={500}>
          <span className='text-[#C778DD]'>#</span> About
          </Link>
        </li>
        <li className= ' hover:text-[#C778DD] font-bold'>
          <Link to='skills' smooth={true} duration={500}>
          <span className='text-[#C778DD]'>#</span> Skills
          </Link>
        </li>
        <li className= ' hover:text-[#C778DD] font-bold'>
          <Link to='work' smooth={true} duration={500}>
          <span className='text-[#C778DD]'>#</span>Work
          </Link>
        </li>
        <li className= ' hover:text-[#C778DD] font-bold'>
          <Link to='contact' smooth={true} duration={500}>
          <span className='text-[#C778DD]'>#</span>Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl hover:text-[#C778DD]'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#C778DD]'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#C778DD]'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#C778DD]'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#C778DD]'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a target='_blank'
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/javad-sultani-8698ab174/' rel="noreferrer" 
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/JavDaGreat'
              rel="noreferrer" 
              target='_blank'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={mailtoHref}
             
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={CV}
              download="Javad Resume"
              target='-blank'
              rel='noopener noreferrer'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;