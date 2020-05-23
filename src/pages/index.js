import React from "react"

import LayoutBare from "../components/layout-bare"
import SEO from "../components/seo"
import "./index.css"
import { Col, Row } from "react-bootstrap"
import SNSLinkList from "../components/sns-links"

const IndexPage = () => (
  <LayoutBare>
    <SEO title="Sebastian Winkler"/>
    <Row>
      <Col xs={12} lg={6}>
        <h1 style={{
          fontSize: `15vmin`
        }}>Sebastian<br/>Winkler</h1>
        <h2>Software developer living in Berlin.</h2>
      </Col>
      <Col xs={12} lg={{ span: 3, offset: 3 }} style={{
        paddingTop: `50px`
      }}>
        <SNSLinkList/>
      </Col>
    </Row>
    <Row className="fixed-bottom">
      <Col xs={12} className="text-right" style={{
        paddingRight: `25px`
      }}>
        <h2><a href="mailto:sebastian@winkler.dev" target="_blank" style={{
          color: `black`,
        }}>sebastian@winkler.dev</a></h2>
      </Col>
    </Row>
  </LayoutBare>
)

export default IndexPage
