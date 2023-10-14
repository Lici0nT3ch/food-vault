import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>This is about me. I created this site.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" /> 

export default AboutPage