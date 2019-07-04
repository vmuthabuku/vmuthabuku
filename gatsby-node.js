// import { graphql } from 'gatsby'

const path = require('path')
exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions

    const postTemplate = path.resolve('src/templates/post.js')


return graphql(`
    {
        allMarkdownRemark {
            edges{
                node{
                    html
                    id
                    frontmatter{
                        path
                        title
                        date
                        author
                    }
                }
            }
        }
    }

`).then(res => {
    if (res.errors) {
        return Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: postTemplate


        })
    })
})

}

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
    const config = getConfig()
    if (stage.startsWith('develop') && config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-dom': '@hot-loader/react-dom'
      }
    }
  }
