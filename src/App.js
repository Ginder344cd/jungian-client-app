import React, { useState } from "react";

const archetypes = [
  "Sage", "Explorer", "Hero", "Caregiver",
  "Innocent", "Magician", "Everyman", "Jester", "Outlaw", "Lover", "Ruler", "Creator"
];

const clientTraitsList = [
  "Analytical", "Empathetic", "Collaborative", "Goal-Oriented",
  "Independent", "Detail-Oriented", "Creative", "Logical"
];

export default function App() {
  const [advisorName, setAdvisorName] = useState("");
  const [archetype, setArchetype] = useState("");
  const [clientTraits, setClientTraits] = useState([]);
  const [recommendation, setRecommendation] = useState("");

  const toggleTrait = (trait) => {
    setClientTraits(prev =>
      prev.includes(trait) ? prev.filter(t => t !== trait) : [...prev, trait]
    );
  };

  const generateRecommendation = () => {
    if (!archetype || clientTraits.length === 0) {
      setRecommendation("Please select an archetype and at least one client trait.");
      return;
    }

    const suggestions = {
      Sage: ["Academics", "Researchers", "Consultants"],
      Explorer: ["Travel Bloggers", "Entrepreneurs", "Adventurers"],
      Hero: ["Athletes", "Military Veterans", "Crisis Managers"],
      Caregiver: ["Nurses", "Teachers", "Therapists"]
    };

    const matched = suggestions[archetype] || ["Professionals aligned with your traits"];
    setRecommendation(
      `As a ${archetype}, your ideal clients may value traits like ${clientTraits.join(", ")}. You might align well with: ${matched.join(", ")}.`
    );
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", maxWidth: "600px", margin: "auto" }}>
      <h1>Jungian Client Alignment App v2</h1>
      <input
        type="text"
        placeholder="Your Name"
        value={advisorName}
        onChange={(e) => setAdvisorName(e.target.value)}
        style={{ marginBottom: "1rem", width: "100%", padding: "0.5rem" }}
      />

      <label>Choose Your Archetype:</label>
      <select
        value={archetype}
        onChange={(e) => setArchetype(e.target.value)}
        style={{ marginBottom: "1rem", width: "100%", padding: "0.5rem" }}
      >
        <option value="">-- Select --</option>
        {archetypes.map(a => (
          <option key={a} value={a}>{a}</option>
        ))}
      </select>

      <label>Select Ideal Client Traits:</label>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
        {clientTraitsList.map(trait => (
          <div
            key={trait}
            onClick={() => toggleTrait(trait)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              border: clientTraits.includes(trait) ? "2px solid green" : "1px solid gray",
              cursor: "pointer"
            }}
          >
            {trait}
          </div>
        ))}
      </div>

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