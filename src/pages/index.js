import React from "react"

import LayoutBare from "../components/layout-bare"
import Seo from "../components/seo"
import "./index.css"
import {Col, Row} from "react-bootstrap"
import SNSLinkList from "../components/sns-links"

const IndexPage = () => (
    <LayoutBare>
        <Seo/>
        <main>
            <Row className="align-items-center pt-5">
                <Col>
                    <h1 style={{
                        fontSize: `13vmin`
                    }}>Sebastian<br/>Winkler</h1>
                    <h2>Software developer living in New York.</h2>
                </Col>
            </Row>
            <Row className="pt-5">
                <Col>
                    <SNSLinkList/>
                </Col>
            </Row>
        </main>
        <footer className="pt-5">
          <Row>
            <Col>
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
