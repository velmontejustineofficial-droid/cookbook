import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://cook-book-api-tau.vercel.app/api/health/db")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        return response.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Environment Variables</h1>

      <h2>Database API</h2>

      {loading && <p>Checking database...</p>}

      {error && <p>Error: {error}</p>}

      {data && (
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}

      <h2>Environment</h2>

      <pre>
        {JSON.stringify(import.meta.env, null, 2)}
      </pre>
    </div>
  );
}