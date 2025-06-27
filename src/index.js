import React from "react";
import ReactDOM from "react-dom/client";

function App() {function App() {
  return (
    <div className="min-h-screen bg-black text-white p-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-green-400">
        Welcome to The Empire
      </h1>
      <p>Status: Operational</p>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#00ffaa",
          color: "#000",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
        onClick={() => alert("Empire AI Activated")}
      >
        Launch Empire AI
      </button>
      <footer style={{ marginTop: "40px" }}>
        <a
          href="/privacy.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#00ffaa", fontSize: "0.9rem" }}
        >
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-black text-white p-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-green-400">Welcome to The Empire</h1>
      <p>Status: Operational</p>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#00ffaa",
          color: "#000",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
        onClick={() => alert("Empire AI Activated")}
      >
        Launch Empire AI
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
