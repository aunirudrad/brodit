import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import ProjectCanvas from './ProjectCanvas';



const LatestProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch('/lastProjects.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load projects');
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        const list = data.projects || [];
        // sort by year desc, then keep original order for ties
        const sorted = list.slice().sort((a, b) => (b.year || 0) - (a.year || 0));
        const topSix = sorted.slice(0, 6);
        setProjects(topSix);
      })
      .catch((err) => {
        console.error(err);
        setProjects([]);
      })
      .finally(() => mounted && setLoading(false));

    return () => (mounted = false);
  }, []);

  if (loading) return <div className="py-20 text-center">Loading projects...</div>;

  return (
    
    <section className="py-20 bg-white">
      <div className="w-full mx-auto">
        <div className="text-center mb-12">
          <div className="text-cyan-500 uppercase tracking-widest text-xl mb-3">Last Projects</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">We complete your projects<br/>before deadline</h2>
        </div>

        <div className="">
          <ProjectCanvas project={projects} />
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;