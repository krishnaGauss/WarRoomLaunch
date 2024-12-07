import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-gray-200 py-1 ">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 sm:grid-cols-5 gap-8">
         
          <div className="col-span-2 sm:col-span-3 sm:col-span-2 pr-8">
            <div className="transform  transition-transform duration-300">
              <h3 className="text-sm font-bold text-white mb-4">WarRoom</h3>
              <p className="text-gray-400 mb-6 text-sm ">
              Join a platform where connections thrive, ideas spark, and communities grow.
Discover like-minded individuals and collaborate on what truly matters to you.
Together, let's build a stronger, united future around shared interests
              </p>
              <div className="flex space-x-0">
                {[
                  { Icon: Github, label: 'GitHub' },
                  { Icon: Linkedin, label: 'LinkedIn' },
                  { Icon: Twitter, label: 'Twitter' }
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="bg-black p-2 rounded-full hover:bg-black-700 hover:scale-110 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

         
          <div className="transform transition-transform duration-300">
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home','Vision','Testinomial','Team'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="transform  transition-transform duration-300">
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {['Community Building', 'Blog', 'Finding gaming partner', 'Resolve your doubt '].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div className="transform  transition-transform duration-300 text-sm">
            <h4 className="text-sm font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a href="mailto:info@company.com" 
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                WarRoom@company.com
              </a>
              <a href="tel:+1234567890" 
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group">
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                4588983454
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>123 Business Ave,<br />Suite 100, CA 94107</span>
              </div>
            </div>
          </div>
        </div>

      
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Subscribe to our newsletter</h4>
              <p className="text-gray-400 text-sm">Stay updated with our latest news and updates</p>
            </div>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-sm flex-grow focus:outline-none text-sm focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              <button className="bg-blue-600 text-white text-sm px-4 py-1 rounded-xl hover:bg-blue-700 transition-colors duration-300 w-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

  
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-center sm:text-left text-sm">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;