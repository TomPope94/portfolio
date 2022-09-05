import { Head } from "next/document";

export default function DocumentHead() {
  return (
    <Head>
      <title>Tom Pope</title>
      <meta
        content="A portfolio site for showing the work of Tom Pope. A full stack developer, entrepreneur and data engineer with over 5 years experience."
        name="description"
      />
      <link rel="icon" href="/favicon/logo_favicon.png" />
      <link rel="stylesheet" href="https://use.typekit.net/hpz0oyg.css" />
    </Head>
  );
}
