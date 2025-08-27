import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="py-8">
      <div className="container-custom">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
              Andrei Castro
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a full-stack developer specializing in React.js and Node.js. I focus on building robust REST APIs and creating seamless user experiences with modern web technologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>
              Currently based in Manila
            </span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;