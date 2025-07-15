import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import About from './Components/About';
import Projects from './Components/Projects';
import './App.css';

function App() {

  const tabs = ['jogos', 'web', 'mobile'];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [projectIndex, setProjectIndex] = useState(0);

  return (
    <div className="book-container">
      <Sidebar
        tabs={tabs}
        activeTab={activeTab}
        onSelectTab={tab => {
          setActiveTab(tab);
          setProjectIndex(0);
        }}
      />

      <div className="book-pages">
        <About />
        <Projects
          tab={activeTab}
          index={projectIndex}
          onNext={() => setProjectIndex(i => i + 1)}
          onPrev={() => setProjectIndex(i => Math.max(i - 1, 0))}
        />
      </div>
    </div>
  );
}

export default App;