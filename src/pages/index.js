import React from "react"

import LayoutBare from "../components/layout-bare"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <LayoutBare>
    <SEO title="Sebastian Winkler"/>
    <h1 style={{
      fontFamily: `"Helvetica Neue", Helvetica, "Liberation Sans", Arial, sans-serif`,
      fontSize: `15vmin`
    }}>Sebastian<br/>Winkler</h1>
  </LayoutBare>
)

export default IndexPage
