import * as React from 'react'

import Layout from '../components/layout'

const HomePage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h2>Food Vault</h2>
      <p>The PREMIRE recipe app.</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>Home Page</title>
    <meta name="home page" content="main page of the company" />
  </>
)

export default HomePage