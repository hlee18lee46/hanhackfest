"use client"; // This makes the component a Client Component

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/');
      const data = await res.text();
      setMessage(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Welcome to HanHackFest</h1>
      <p>{message}</p>
    </div>
  );
}
