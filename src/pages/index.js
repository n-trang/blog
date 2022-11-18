import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <h2>Hi there my name is Trang</h2>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="hello world 👋 | nguyen trang" />;
