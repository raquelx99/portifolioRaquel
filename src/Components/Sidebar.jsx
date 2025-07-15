import React from 'react';
import './Sidebar.css';

export default function Sidebar({ tabs, activeTab, onSelectTab }) {
  return (
    <div className="sidebar">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
          onClick={() => onSelectTab(tab)}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  );
}