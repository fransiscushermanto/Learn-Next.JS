import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <b>Fransiscus</b>. I'm a frontend engineer at Topremit. You
          can contact me on{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/fransiscus-h-a19952119/"
          >
            LinkedIn
          </a>
          .
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
