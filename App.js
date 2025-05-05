import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./styles.css";
import "./App.css";

const topicsData = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "Photosynthesis", category: "Biology" },
  { id: 3, name: "Calculus", category: "Mathematics" },
  { id: 4, name: "Organic Chemistry", category: "Chemistry" },
  { id: 5, name: "Electromagnetism", category: "Physics" },
];

function TopicCard({ topic }) {
  return (
    <div className="topic-card">
      <h3>{topic.name}</h3>
      <p>{topic.category}</p>
    </div>
  );
}

function TopicSearch() {
  const [query, setQuery] = useState("");

  const filteredTopics = topicsData.filter((topic) =>
    topic.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="topic-title">Topic Search</h1>

      <input
        type="text"
        placeholder="Search topics..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-box"
      />

      {filteredTopics.length > 0 ? (
        <div className="topics-list">
          {filteredTopics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      ) : (
        <p>No topics found.</p>
      )}

      
      <div className="social-buttons">
        <a
          href="https://github.com/trisrjt"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn">
        
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/trisagni-mandal-rjt"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-btn">
        
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TopicSearch />);

export default TopicSearch;
