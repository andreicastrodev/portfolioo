import React from 'react';
import Footer from './Footer.jsx';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container-custom py-16">
        <div className="mb-12">
          <h1 className="text-2xl font-medium mb-6 text-white">About</h1>
          <div className="space-y-6 text-gray-400 leading-relaxed max-w-2xl">
            <p>
              I'm Andrei Castro, a full-stack developer based in Manila. I specialize in building 
              modern web applications using React.js and Node.js, with a particular focus on 
              creating robust REST APIs and seamless user experiences.
            </p>
            
            <p>
              My journey in software development started with curiosity about how things work 
              behind the scenes. Today, I enjoy solving complex problems and turning ideas 
              into functional, beautiful applications that make a difference.
            </p>
            
            <p>
              I believe in writing clean, maintainable code and staying up-to-date with the 
              latest technologies and best practices in web development.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-medium mb-6 text-white">What I Do</h2>
          <div className="space-y-4 max-w-2xl">
            <div className="flex gap-6 py-4 border-b border-gray-800 last:border-b-0">
              <div className="flex-1">
                <h3 className="text-white font-normal mb-1">Frontend Development</h3>
                <p className="text-gray-400 text-sm">
                  Building responsive and interactive user interfaces with React.js, 
                  focusing on performance and user experience.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 py-4 border-b border-gray-800 last:border-b-0">
              <div className="flex-1">
                <h3 className="text-white font-normal mb-1">Backend Development</h3>
                <p className="text-gray-400 text-sm">
                  Creating scalable server-side applications and REST APIs using 
                  Node.js and modern backend technologies.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 py-4 border-b border-gray-800 last:border-b-0">
              <div className="flex-1">
                <h3 className="text-white font-normal mb-1">API Design</h3>
                <p className="text-gray-400 text-sm">
                  Designing and implementing RESTful APIs that are reliable, 
                  well-documented, and easy to integrate.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-medium mb-6 text-white">Hobbies & Interests</h2>
          <div className="space-y-4 max-w-2xl">
            <div className="flex gap-6 py-4 border-b border-gray-800 last:border-b-0">
              <div className="flex-1">
                <h3 className="text-white font-normal mb-1">Gaming</h3>
                <p className="text-gray-400 text-sm">
                  Passionate about video games, especially strategy and RPG genres. 
                  Gaming inspires creative problem-solving approaches in development.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 py-4 border-b border-gray-800 last:border-b-0">
              <div className="flex-1">
                <h3 className="text-white font-normal mb-1">Cat Rescue</h3>
                <p className="text-gray-400 text-sm">
                  Passionate about helping stray and abandoned cats find loving homes. 
                  Volunteering at local shelters and fostering cats in need.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 py-4 border-b border-gray-800 last:border-b-0">
              <div className="flex-1">
                <h3 className="text-white font-normal mb-1">Coffee</h3>
                <p className="text-gray-400 text-sm">
                  Coffee enthusiast who enjoys exploring different brewing methods 
                  and discovering new roasts. Perfect fuel for coding sessions.
                </p>
              </div>
            </div>
            
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-6 text-white">Currently</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed max-w-2xl">
            <p>
              Working on exciting projects that challenge me to grow as a developer. 
              Always open to new opportunities and collaborations.
            </p>
            <p>
              When I'm not coding, you'll find me exploring Manila's coffee scene, 
              playing games, or being a devoted slave to my adopted cats.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;