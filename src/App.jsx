export default function () {
  return (
    <div>
      <h1>Environment Variables</h1>
      <h2>finsih</h2>
      <pre>
        {JSON.stringify(import.meta.env, null, 2)}
      </pre>
    </div>
  );
}