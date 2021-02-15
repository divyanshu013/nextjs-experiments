import Head from "next/head";
import dynamic from "next/dynamic";
// https://nextjs.org/docs/advanced-features/dynamic-import#basic-usage

// https://github.com/kentcdodds/babel-plugin-preval#import-comment
// will be preval(ed) and passed as a parameter to /scripts/terser
import inlineDemo from /* preval("../scripts/inline-demo.js") */ "../scripts/terser";

import styles from "../styles/Home.module.css";

const inlineScript = `
console.log("From inline script");
`;

// In actual implementation would be using some cookie - session store or service
// to identify which variant the user should be served
const getExperimentVariant = () => (Math.random() > 0.5 ? "A" : "B");

const DynamicA = dynamic(() => import("../components/A"));
const DynamicB = dynamic(() => import("../components/B"));

const variant = getExperimentVariant();

export default function Home() {
  console.log("From page");
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        {/* This would be sent in the HTML */}
        {/* For global usage we can make changes in _document or _app */}
        <script dangerouslySetInnerHTML={{ __html: inlineScript }} />
      </Head>

      <main className={styles.main}>
        {variant === "A" ? <DynamicA /> : <DynamicB />}
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
