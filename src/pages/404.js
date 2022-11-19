import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <code>
        oops the page is not found. maybe go back to my fancy{" "}
        <Link to="/">hompage</Link> instead? or just telepathy me dude, tell me
        what are you looking for? <a href="">this</a>? great choice!
      </code>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>hi??</title>;
