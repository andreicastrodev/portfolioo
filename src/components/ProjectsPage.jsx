import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';
import projectsData from '../data/projects.json';

const ProjectsPage = () => {
  const projects = Object.values(projectsData);

  return (
    <div className="min-h-screen">
      <div className="container-custom py-16">
        <div className="mb-12">
          <h1 className="text-2xl font-medium mb-6 text-white">Projects</h1>
          <p className="text-gray-400 leading-relaxed max-w-2xl">
            Here are some of the projects I've worked on. They represent different aspects of my development journey and technical interests.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-8 text-white">Featured Projects</h2>
          <div className="space-y-0">
            {projects.map((project, index) => (
              <Link 
                key={index}
                to={`/project/${project.slug}`}
                className="flex gap-6 py-6 border-b border-gray-800 last:border-b-0 block hover:bg-gray-900/10"
              >
                <span className="text-gray-500 font-mono text-sm w-12 flex-shrink-0">
                  {project.year}
                </span>
                <div className="flex-1">
                  <h3 className="text-white font-normal mb-1 hover:text-gray-300 cursor-pointer">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>


        <div className="pb-8 border-b border-gray-800">
          <p className="text-gray-400 leading-relaxed mb-4">
            These are just a few highlighted projects. Check out my GitHub profile for more repositories and contributions.
          </p>
          <a href="https://github.com/andreicastrodev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            → View GitHub Profile
          </a>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;