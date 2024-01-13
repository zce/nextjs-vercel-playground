export default function Home() {
  return (
    <pre><code>{JSON.stringify(process.env, null, 2)}</code></pre>
  )
}
