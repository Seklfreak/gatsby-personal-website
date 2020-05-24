import React from "react"

import LayoutBare from "../components/layout-bare"
import SEO from "../components/seo"
import "./index.css"
import { Col, Row } from "react-bootstrap"
import SNSLinkList from "../components/sns-links"

const IndexPage = () => (
  <LayoutBare>
    <SEO/>
    <main className="flex-grow-1">
      <Row>
        <Col xs={12} lg={6}>
          <h1 style={{
            fontSize: `13vmin`
          }}>Sebastian<br/>Winkler</h1>
          <h2>Software developer living in Berlin.</h2>
        </Col>
        <Col xs={12} lg={{ span: 3, offset: 3 }} style={{
          paddingTop: `3vmin`
        }}>
          <SNSLinkList/>
        </Col>
      </Row>
    </main>
    <footer>
      <Row>
        <Col xs={12} className="text-right" style={{
          paddingTop: `3vmin`
        }}>
          <h2><a href="mailto:sebastian@winkler.dev" target="_blank" rel="noreferrer" style={{
            color: `black`,
            fontSize: `6vmin`
          }}>sebastian@winkler.dev</a></h2>
        </Col>
      </Row>
    </footer>
  </LayoutBare>
)

export default IndexPage
