import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import './Trabalhos.scss'
import PostSection from "../components/PostSection"

const Trabalhos = ({
  data: {
    allMarkdownRemark: { edges }
  },
}) => {
  const posts = edges.map(edge => ({ ...edge.node }))

  const [data, setData] = useState([...posts]);

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <Layout>
      <div className="trabalhos-home container">
        <div className="trabalhos-wrapper">
          <h1>Trabalhos</h1>
          <p>
            Aqui as ideias que se transformam em vídeos capazes de conectar pessoas.
            Do roteiro, à produção e à finalização completa de cada projeto.
          </p>
        </div>
        <PostSection posts={data} />
      </div>
    </Layout>
  )
}

export default Trabalhos
export const pageQuery = graphql`
  query TrabalhosQuery {
    allMarkdownRemark(
      filter: {frontmatter: {template: {eq: "BlogPost"}}}
      sort: { order: DESC, fields: [frontmatter___date] }
      ) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
            img
          }
        }
      }
    }
  }
`
