import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Text: text })
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data && data.language){
        setResult(data);
      } else {
        setError('Invalid response from the server');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>Language Detection</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter text to detect language</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          placeholder="Type or paste text here"
        />
        <button type="submit" disabled={loading || !text.trim()}>
          {loading ? 'Detecting...' : 'Detect Language'}
        </button>
      </form>

      {error && <div className="error">Error: {error}</div>}

      {result && (
        <div className="result">
          <h3>Prediction</h3>
          <p><strong>Text:</strong> {result.text}</p>
          <p><strong>Language:</strong> {result.language}</p>
        </div>
      )}

      <footer>
        <small>Backend: http://localhost:8000/predict</small>
      </footer>
    </div>
  );
}
