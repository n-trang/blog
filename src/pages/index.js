import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Icon from "../images/icon.png";
import Work from "../images/work.jpg";

const HomePage = ({ data }) => {
  return (
    <Layout>
      <h2>Hi there 👋 my name is Trang</h2>
      <ul>
        <li>
          I'm a software engineer{" "}
          <a href="https://youtu.be/gJLIiF15wjQ?t=48" target="_blank">
            wannabe
          </a>{" "}
          <b>
            (<Link to="/blog/resume">resume✒️</Link>)
          </b>
          .
        </li>
        <li>I love humor,</li>
        <li>
          and <Link to="">photography</Link>.
        </li>
      </ul>
      <p>
        Contact: <a href="mailto: n-trang@outlook.com">n-trang@outlook.com</a>.
      </p>
      <p>
        Other places:{" "}
        <a href="https://github.com/n-trang" target="_blank">
          Github
        </a>
        ,{" "}
        <a href="" target="_blank">
          LinkedIn
        </a>
        ,{" "}
        <a href="https://dev.to/ntrang" target="_blank">
          DEV.to
        </a>
        .
      </p>
      <h2>Cover letter</h2>
      <p>
        Losartan, sold under the brand name Cozaar among others, is a medication
        used to treat high blood pressure (hypertension).[3] It is in the
        angiotensin receptor blocker (ARB) family of medication, and is
      </p>
      <p>
        Losartan, sold under the brand name Cozaar among others, is a medication
        used to treat high blood pressure (hypertension).[3] It is in the
        angiotensin receptor blocker (ARB) family of medication, and is
      </p>
      <p>
        Losartan, sold under the brand name Cozaar among others, is a medication
        used to treat high blood pressure (hypertension).[3] It is in the
        angiotensin receptor blocker (ARB) family of medication, and is
      </p>
      <h2 id="projects">Projects</h2>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h3>
            <Link to={`/projects/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>{" "}
            {"|"} <code>{node.frontmatter.techstack}</code>
          </h3>
          <p>{node.frontmatter.tldr}</p>
        </article>
      ))}
      <br></br>
      <center>
        <img src={Work} alt="ain't much" width={300}></img>
      </center>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { folder: { eq: "projects" } } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          techstack
          tldr
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="hello world 👋" />;

export default HomePage;
