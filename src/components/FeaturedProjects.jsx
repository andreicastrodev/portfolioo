import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

const FeaturedProjects = () => {
  const projects = Object.values(projectsData);

  return (
    <section id="projects" className="py-8">
      <div className="container-custom">
        <h2 className="text-xl font-semibold mb-6">Featured Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Link 
              to={`/project/${project.slug}`}
              key={index} 
              className="group cursor-pointer block"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                    {project.year}
                  </span>
                  <h3 className="text-lg font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm ml-14">
                  {project.description}
                </p>
                
                <div className="flex gap-2 ml-14">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            View all projects
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;