import React from "react"
import PropTypes from "prop-types"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap"
import './layout.css';

const LayoutBare = ({ children }) => {
  return (
    <>
      <Container fluid>
        <main>{children}</main>
      </Container>
      {/*<div*/}
      {/*  style={{*/}
      {/*    margin: `0 auto`,*/}
      {/*    // maxWidth: 960,*/}
      {/*    padding: `0 1.0875rem 1.45rem`,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <main>{children}</main>*/}
      {/*  /!*<footer>*!/*/}
      {/*  /!*  © {new Date().getFullYear()}*!/*/}
      {/*  /!*</footer>*!/*/}
      {/*</div>*/}
    </>
  )
}

LayoutBare.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutBare
