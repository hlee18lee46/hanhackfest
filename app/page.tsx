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
}

export default function Home() {
  const [mongoProjects, setMongoProjects] = useState<MongoProject[]>([]);
  const [githubRepos, setGitHubRepos] = useState<GitHubRepo[]>([]);

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

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Welcome to HanHackFest</h1>
      <p>HanHackFest API is running...</p>

      {/* Section for MongoDB Projects */}
      <h2 className="text-2xl font-bold mt-8">Open Source Projects (MongoDB)</h2>
      {mongoProjects.length > 0 ? (
        <ul>
          {mongoProjects.map((project) => (
            <li key={project._id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No MongoDB projects available.</p>
      )}

      {/* Section for GitHub Repositories */}
      <h2 className="text-2xl font-bold mt-8">Open Source Repositories (GitHub)</h2>
      {githubRepos.length > 0 ? (
        <ul>
          {githubRepos.map((repo) => (
            <li key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View Repository
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No GitHub repositories available.</p>
      )}
    </div>
  );
}
