export default function () {
  return (
    <div>
      <h1>Environment Variables</h1>

      <pre>
        {JSON.stringify(import.meta.env, null, 2)}
      </pre>
    </div>
  );
}