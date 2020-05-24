import React from "react"
import PropTypes from "prop-types"

import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import "./layout.css"

const LayoutBare = ({ children }) => {
  return (
    <>
      <Container fluid className="d-flex flex-column vh-100">
        {children}
      </Container>
    </>
  )
}

LayoutBare.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutBare
