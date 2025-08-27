import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer.jsx';
import projectsData from '../data/projects.json';

const ProjectDetail = () => {
  const { slug } = useParams();

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const projects = projectsData;

  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-screen">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-2xl font-medium mb-6 text-white">Project Not Found</h1>
            <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
            <Link to="/projects" className="text-white hover:text-gray-300">
              ← Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container-custom py-16">
        <div className="mb-8">
          <Link to="/projects" className="text-gray-400 hover:text-white mb-6 inline-block">
            ← Back to Projects
          </Link>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-500 font-mono text-sm">
              {project.year}
            </span>
            <h1 className="text-3xl font-medium text-white">
              {project.title}
            </h1>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.socialLinks && (
            <div className="flex gap-4 mb-8">
              {project.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-12 max-w-3xl">
          <div>
            <h2 className="text-xl font-medium mb-6 text-white">Overview</h2>
            <div className="text-gray-400 leading-relaxed space-y-4">
              {project.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-6 text-white">Key Features</h2>
            <div className="space-y-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-6 text-white">Technologies Used</h2>
            <div className="text-gray-400 leading-relaxed">
              {project.technologies.join(', ')}.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;