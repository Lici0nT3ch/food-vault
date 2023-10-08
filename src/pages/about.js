import * as React from 'react'

import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>This is about me. I created this site.</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Description of the company" />
  </>
) 

export default AboutPage