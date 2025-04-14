import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <style>

        {`
        .custom-ecart-heading {
          display: flex;
          align-items: center;
          justify-content: flex-start;
      }
          .inl {
          display: inline-block; /* behaves like inline but keeps block features */
          margin-right: 10px;    /* optional spacing between them */
          margin-left: 120px;
      }
          ul, ol {
          padding-left: 0;
          margin-left: 0; /* Optional: also removes indentation */
      }
          .list{
          margin-left: 120px;
      }

        @media(max-width:769px){
          .red-on-mobile {
          color: red;
      }
          .custom-ecart-heading {
          justify-content: center;
      }
          .list{
          margin-left: -5px;
      }
          .contact{
          margin-left: -42px;
      }
          .contactInput{
          margin-left: -140px;
      }
          .fontlink {
          transform: translateX(-115px);
      }

        }
        `}
      </style>
      <footer className="bg-gray-900 text-white py-10 px-6 md:px-12">
        <div className='d-flex flex-wrap'>
          {/* Intro */}
          <div>
            <h5 className="custom-ecart-heading">
              <i className="fa-solid fa-truck-fast mr-2"></i> E-Cart
            </h5>

            <p className="text-sm mt-2 red-on-mobile ">
              Designed and built with love by the Luminar team with the help of our contributors.
            </p>

            <p className="text-sm custom-ecart-heading">Code licensed MIT, docs CC BY 3.0.</p>
            <p className="text-sm custom-ecart-heading">Currently v5.3.3.</p>

          </div>

          {/* Links */}

          <div className='list'>
            <h5>Links</h5>
            <ul className="space-y-2">
              <li><Link to={'/men'}>Men</Link></li>
              <li><Link to={'/women'}>Women</Link></li>
              <li><Link to={'/kids'}>Kids</Link></li>
            </ul>
          </div>



          {/* Guides */}
          <div className='inl'>
            <h5 className="text-lg font-semibold mb-2">Guides</h5>
            <ul className="space-y-2">
              <li><a href="https://react.dev/" target="_blank" className="hover:text-gray-400">React</a></li>
              <li><a href="https://tailwindcss.com/" target="_blank" className="hover:text-gray-400">React Tailwind</a></li>
              <li><a href="https://reactrouter.com/" target="_blank" className="hover:text-gray-400">React Router</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className='ms-40'>
            <h5 className="text-lg font-semibold mb-2 contact">Contact</h5>
            <div className="flex items-center gap-2">
              <input className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 contactInput" type="email" placeholder="Enter your email here" />
              <button className="bg-violet-600 hover:bg-violet-700 p-2 rounded text-white">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="flex gap-4 mt-4 fontlink ">
              <a href="#" className="hover:text-gray-400 text-xl "><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="hover:text-gray-400 text-xl"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="hover:text-gray-400 text-xl"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="hover:text-gray-400 text-xl"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#" className="hover:text-gray-400 text-xl"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="hover:text-gray-400 text-xl"><i className="fa-solid fa-phone"></i></a>
            </div>
          </div>
        </div>

        <p className="text-center text-sm mt-8">Copyright &copy; 2024</p>
      </footer>
    </div>
  );
};

export default Footer;
