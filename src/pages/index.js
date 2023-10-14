import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const HomePage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>The PREMIRE recipe app.</p>
      <StaticImage
        alt="Asian seafood pasta dish"
        src="../images/pastaImage.jpg"
      />  
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default HomePage