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
                      id
                      link
                      name
                  }
              }
          }
      }
  `)

  return (
    <>
      <ListGroup variant={"flush"}>
        {data.allSnsYaml.edges.map(({ node }, index) => (
          <ListGroup.Item action href={node.link} target="_blank" key={index}>
            {node.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}

export default SNSLinkList
