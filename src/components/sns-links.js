import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./sns-links.css"
import { ListGroup } from "react-bootstrap"

const SNSLinkList = () => {
  const data = useStaticQuery(graphql`
      query AllSNSLinksQuery {
          allSnsYaml(sort: {fields: name}) {
              edges {
                  node {
                      link
                      name
                  }
              }
          }
      }
  `)

  return (
    <>
      <ListGroup>
        {data.allSnsYaml.edges.map(({ node }, index) => (
          <ListGroup.Item action href={node.link} target="_blank" rel="noreferrer" key={index} style={{
            fontSize: `1.6em`
          }}>
            * {node.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}

export default SNSLinkList
