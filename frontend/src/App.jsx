import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Configure Multi-stage Dockerfile for React', status: 'Completed', priority: 'High' },
    { id: 2, title: 'Set up Express Node.js Backend Service', status: 'Completed', priority: 'High' },
    { id: 3, title: 'Deploy MongoDB with Persistent Volume', status: 'Completed', priority: 'Critical' },
    { id: 4, title: 'Orchestrate Full Stack via docker-compose up', status: 'In Progress', priority: 'High' }
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: inputVal.trim(), status: 'Pending', priority: 'Medium' }]);
    setInputVal('');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <header style={{ background: '#1e293b', padding: '1.25rem 2rem', borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.4rem', color: '#38bdf8', margin: 0 }}>🐳 Docker Compose Orchestration</h1>
        <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>ITUE301: Practical 11 | 24CS024</span>
      </header>

      <main style={{ maxWidth: '960px', margin: '2rem auto', padding: '0 1.5rem' }}>
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '2rem', marginBottom: '2rem' }}>
          <span style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '0.3rem 0.8rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600 }}>
            Active Containers: 3 / 3
          </span>
          <h2 style={{ fontSize: '1.8rem', marginTop: '1rem', marginBottom: '0.5rem' }}>Full Stack Containerized Environment</h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>
            Frontend, Backend, and MongoDB isolated in dedicated containers communicating over the internal bridge network <code>app-network</code> with named persistent volume <code>mongo-data</code>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' }}>
              <strong style={{ color: '#38bdf8' }}>Frontend Container</strong>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.3rem' }}>Port: 5173 | Host: 0.0.0.0</div>
              <span style={{ color: '#4ade80', fontSize: '0.85rem' }}>● Multi-stage Build</span>
            </div>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' }}>
              <strong style={{ color: '#38bdf8' }}>Backend Container</strong>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.3rem' }}>Port: 5000 | Node 18 Alpine</div>
              <span style={{ color: '#4ade80', fontSize: '0.85rem' }}>● Connected to MongoDB</span>
            </div>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' }}>
              <strong style={{ color: '#38bdf8' }}>MongoDB Container</strong>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.3rem' }}>Port: 27017 | Image: mongo:6</div>
              <span style={{ color: '#4ade80', fontSize: '0.85rem' }}>● Volume: mongo-data</span>
            </div>
          </div>
        </div>

        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '2rem' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>Task Management Inside Container</h3>
          <form onSubmit={handleAdd} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Add new containerized task..."
              style={{ flex: 1, background: '#0f172a', border: '1px solid #334155', color: '#fff', padding: '0.75rem 1rem', borderRadius: '8px', outline: 'none' }}
            />
            <button type="submit" style={{ background: '#0284c7', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
              Add Task
            </button>
          </form>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {tasks.map(t => (
              <div key={t.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0f172a', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid #334155' }}>
                <span>{t.title}</span>
                <span style={{ background: t.status === 'Completed' ? 'rgba(74, 222, 128, 0.15)' : 'rgba(251, 191, 36, 0.15)', color: t.status === 'Completed' ? '#4ade80' : '#fbbf24', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                  {t.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;