import { useState } from "react";

export default function App() {
  const [kudos, setKudos] = useState([
    {
      from: "Sarah",
      to: "Michael",
      message: "Thanks for helping with deployment!",
    },
  ]);

  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  const submitKudos = () => {
    if (!recipient || !message) return;

    setKudos([
      {
        from: "Eeshita",
        to: recipient,
        message,
      },
      ...kudos,
    ]);

    setRecipient("");
    setMessage("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>🎉 Team Kudos</h1>

      <h2>Give Kudos</h2>

      <select
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      >
        <option value="">Choose colleague</option>
        <option value="Sarah">Sarah</option>
        <option value="Michael">Michael</option>
        <option value="David">David</option>
      </select>

      <br />
      <br />

      <textarea
        rows={4}
        cols={50}
        placeholder="Write appreciation message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br />
      <br />

      <button onClick={submitKudos}>
        Submit Kudos
      </button>

      <hr />

      <h2>Recent Kudos</h2>

      {kudos.map((k, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <strong>
            {k.from} → {k.to}
          </strong>
          <p>{k.message}</p>
        </div>
      ))}
    </div>
  );
}