"use client";
import { useEffect, useState } from 'react';

// Define types for MongoDB and GitHub projects
interface MongoProject {
  _id: string;
  name: string;
  description: string;
  url: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count?: number; // Optional for popular repos
}

export default function Home() {
  const [mongoProjects, setMongoProjects] = useState<MongoProject[]>([]);
  const [githubRepos, setGitHubRepos] = useState<GitHubRepo[]>([]);
  const [popularRepos, setPopularRepos] = useState<GitHubRepo[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(''); // Language filter state

  const [newProject, setNewProject] = useState({ name: '', description: '', url: '' }); // New project state

  // Fetch MongoDB projects
  useEffect(() => {
    const fetchMongoProjects = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/projects/mongodb');
        const data: MongoProject[] = await res.json();
        setMongoProjects(data);
      } catch (error) {
        console.error('Failed to fetch MongoDB projects', error);
      }
    };

    // Fetch repositories from GitHub username
    const fetchGitHubRepos = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/projects/github');
        const data: GitHubRepo[] = await res.json();
        setGitHubRepos(data);
      } catch (error) {
        console.error('Failed to fetch GitHub repositories', error);
      }
    };

    fetchMongoProjects();
    fetchGitHubRepos();
  }, []);

  // Fetch popular GitHub repositories with optional language filter
  useEffect(() => {
    const fetchPopularRepos = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/projects/github/popular${selectedLanguage ? `?language=${selectedLanguage}` : ''}`
        );
        const data: GitHubRepo[] = await res.json();
        setPopularRepos(data);
      } catch (error) {
        console.error('Failed to fetch popular GitHub repositories', error);
      }
    };

    fetchPopularRepos();
  }, [selectedLanguage]);

  // Handle new project form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProject),
      });

      if (res.ok) {
        const createdProject = await res.json();
        setMongoProjects([...mongoProjects, createdProject]); // Add the new project to the list
        setNewProject({ name: '', description: '', url: '' }); // Clear form
      }
    } catch (error) {
      console.error('Failed to create new project', error);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8">Welcome to Open Source MarketPlace!</h1>

      {/* Form to create a new MongoDB project */}
      <div className="max-w-lg mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">Submit a New Project</h2>
        <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Project Name</label>
            <input
              type="text"
              id="name"
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
              className="border p-2 w-full rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Description</label>
            <input
              type="text"
              id="description"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              className="border p-2 w-full rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label htmlFor="url" className="block text-sm font-semibold text-gray-700">Project URL</label>
            <input
              type="url"
              id="url"
              value={newProject.url}
              onChange={(e) => setNewProject({ ...newProject, url: e.target.value })}
              className="border p-2 w-full rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
            Submit Project
          </button>
        </form>
      </div>

      {/* Section for MongoDB Projects */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Open Source Projects (MongoDB)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mongoProjects.length > 0 ? (
            mongoProjects.map((project) => (
              <div key={project._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  View Project
                </a>
              </div>
            ))
          ) : (
            <p>No MongoDB projects available.</p>
          )}
        </div>
      </section>

      {/* Section for GitHub Repositories */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4">My GitHub Repositories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {githubRepos.length > 0 ? (
            githubRepos.map((repo) => (
              <div key={repo.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
                <p className="text-gray-600">{repo.description}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  View Repository
                </a>
              </div>
            ))
          ) : (
            <p>No GitHub repositories available.</p>
          )}
        </div>
      </section>

      {/* Language Filter for Popular Repositories */}
      <section className="mt-12">
        <div className="max-w-lg mx-auto">
          <label htmlFor="language" className="block text-sm font-semibold text-gray-700">Filter Popular Repos by Language</label>
          <select
            id="language"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="border p-2 w-full rounded-lg mt-2 focus:ring focus:ring-blue-300"
          >
            <option value="">All Languages</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="ruby">Ruby</option>
            <option value="go">Go</option>
            <option value="typescript">TypeScript</option>
          </select>
        </div>
      </section>

      {/* Section for Popular GitHub Repositories */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Popular Open Source Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popularRepos.length > 0 ? (
            popularRepos.map((repo) => (
              <div key={repo.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
                <p className="text-gray-600">{repo.description}</p>
                <p className="text-gray-500">⭐ {repo.stargazers_count} stars</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  View Repository
                </a>
              </div>
            ))
          ) : (
            <p>No popular GitHub repositories available.</p>
          )}
        </div>
      </section>
    </div>
  );
}
