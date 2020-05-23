import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const LayoutBare = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryBare {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        {/*<footer>*/}
        {/*  © {new Date().getFullYear()}*/}
        {/*</footer>*/}
      </div>
    </>
  )
}

LayoutBare.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutBare
