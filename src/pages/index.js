import React from "react"

import LayoutBare from "../components/layout-bare"
import SEO from "../components/seo"
import "./index.css"
import { Col, ListGroup, Row } from "react-bootstrap"
import SNSLinkList from "../components/sns-links"

const IndexPage = () => (
  <LayoutBare>
    <SEO title="Sebastian Winkler"/>
    <Row>
      <Col xs={12} md={6}>
        <h1 style={{
          fontSize: `15vmin`
        }}>Sebastian<br/>Winkler</h1>
      </Col>
      <Col xs={12} md={{ span: 3, offset: 3 }}>
        <SNSLinkList/>
      </Col>
    </Row>
  </LayoutBare>
)

export default IndexPage
