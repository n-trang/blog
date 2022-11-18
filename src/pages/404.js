import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <code>
        oops the page is not found. maybe go back to my fancy{" "}
        <Link to="/">hompage</Link> instead? or just telepathy me dude, tell me
        what are you looking for?
      </code>
      <br></br>
      <code> 👓👓👓</code>
      <br></br>
      <code>
        great choice - <a href="">here you go</a> ~
      </code>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>hi??</title>;
