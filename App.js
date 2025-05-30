import React, { useState } from "react";

export default function App() {
  const [advisorName, setAdvisorName] = useState("");
  const [archetype, setArchetype] = useState("");
  const [clientTraits, setClientTraits] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const generateRecommendation = () => {
    if (archetype && clientTraits) {
      setRecommendation(
        `As a ${archetype}, your best-fit clients likely value ${clientTraits}. Suggested targets: engineers, architects, analytical professionals.`
      );
    } else {
      setRecommendation("Please fill in both archetype and client traits.");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", maxWidth: "600px", margin: "auto" }}>
      <h1>Jungian Client Alignment App</h1>
      <input
        type="text"
        placeholder="Your Name"
        value={advisorName}
        onChange={(e) => setAdvisorName(e.target.value)}
        style={{ marginBottom: "1rem", width: "100%", padding: "0.5rem" }}
      />
      <input
        type="text"
        placeholder="Your Archetype (e.g., Sage, Explorer)"
        value={archetype}
        onChange={(e) => setArchetype(e.target.value)}
        style={{ marginBottom: "1rem", width: "100%", padding: "0.5rem" }}
      />
      <input
        type="text"
        placeholder="Ideal Client Traits (e.g., collaborative, analytical)"
        value={clientTraits}
        onChange={(e) => setClientTraits(e.target.value)}
        style={{ marginBottom: "1rem", width: "100%", padding: "0.5rem" }}
      />
      <button onClick={generateRecommendation} style={{ padding: "0.5rem", width: "100%" }}>
        Find Ideal Client Profiles
      </button>
      {recommendation && (
        <div style={{ marginTop: "1rem", color: "green", fontSize: "1.1rem" }}>
          {recommendation}
        </div>
      )}
    </div>
  );
}
