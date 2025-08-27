import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container-custom py-6">
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-6 text-white">Interested in working together?</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            I'm available for freelance projects and full-time opportunities. Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/andreicastrodev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              github
            </a>
            <a href="https://www.linkedin.com/in/andreicastrodev/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              linkedin
            </a>
            <a href="https://www.instagram.com/ctb.nics/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              instagram
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-xs text-gray-500 text-center">
          © 2025 Andrei Castro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;