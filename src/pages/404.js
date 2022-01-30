import React from "react"
import Seo from "../components/seo"
import LayoutBare from "../components/layout-bare"

const NotFoundPage = () => (
  <LayoutBare>
    <Seo title="404: Not found"/>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutBare>
)

export default NotFoundPage
