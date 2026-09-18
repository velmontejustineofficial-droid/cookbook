export default function () {
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <div>
      <h1>Environment Variable</h1>

      <p>{apiUrl}</p>
    </div>
  );
}