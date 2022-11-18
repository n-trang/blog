import * as React from "react";
import Layout from '../components/layout';
import Seo from '../components/seo';


const IndexPage = () => {
  return (
    <Layout>
      <p>Hello</p>
    </Layout>

  )
}

export default IndexPage

export const Head = () => <Seo title="hello world" />
