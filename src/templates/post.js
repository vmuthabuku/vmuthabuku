import React,{Component} from 'react'
import Link from 'gatsby-link'
// import _ from 'lodash'
import { graphql } from 'gatsby'
// import Logo from '../images/logo.png'
import "../styles/post.css";
import Footer from '../components/footer'

import {
  Container,
  //Header,
  Icon,
  Menu,
  Visibility,
} from 'semantic-ui-react'


const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '4em',
  }
  
  const fixedMenuStyle = {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  }
  
  const overlayStyle = {
    float: 'left',
    margin: '0em 3em 1em 0.1em',
  }
  
  const fixedOverlayStyle = {
    ...overlayStyle,
    position: 'fixed',
    top: '80px',
    zIndex: 10,
  }
  
  const overlayMenuStyle = {
    position: 'relative',
    left: 0,
    transition: 'left 0.5s ease',
  }
  
  const fixedOverlayMenuStyle = {
    ...overlayMenuStyle,
    left: '800px',
  }

  
  class Blog extends Component {
    state = {
      menuFixed: false,
      overlayFixed: false,
    }
  
    stickOverlay = () => this.setState({ overlayFixed: true })
  
    stickTopMenu = () => this.setState({ menuFixed: true })
  
    unStickOverlay = () => this.setState({ overlayFixed: false })
  
    unStickTopMenu = () => this.setState({ menuFixed: false })
  
    render() {
      const { menuFixed, overlayFixed} = this.state
  
      return (
          
        <div>
          {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
              background color.
            */}
          <style>{`
            html, body {
              background: white;
            }
          `}</style>
  
          {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
              gone beyond the scope of visibility
            */}
          <Visibility
            onBottomPassed={this.stickTopMenu}
            onBottomVisible={this.unStickTopMenu}
            once={false}
          >
            <Menu
              borderless
              fixed={menuFixed ? 'top' : undefined}
              style={menuFixed ? fixedMenuStyle : menuStyle}
            >
           
                <Menu.Item>
                 <img alt="none " src={require ("../images/logo.png")}/>
                </Menu.Item>
                <Menu.Item className="header"><Link to="/">Vmuthabuku</Link></Menu.Item>
                <Menu.Item as='a'><Link to="/blog">Articles</Link></Menu.Item>                         

            </Menu>
          </Visibility>

          <Visibility
            offset={80}
            once={false}
            onTopPassed={this.stickOverlay}
            onTopVisible={this.unStickOverlay}
            style={overlayFixed ? { ...overlayStyle}  : {}}
          />
          
          <div ref={this.handleOverlayRef} style={overlayFixed ? fixedOverlayStyle : overlayStyle}>
            <Menu
              icon='labeled'
              style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
              vertical
            >
              <Menu.Item as='a' href='https://twitter.com'>
                <Icon name='twitter' />
                Twitter
              </Menu.Item>

              <Menu.Item as='a' href='https://medium.com'>
                <Icon name='medium'  />
                Medium
              </Menu.Item>

              <Menu.Item as='a' href='https://facebook.com'>
                <Icon name='facebook' />
               Facebook
              </Menu.Item>
            </Menu>
          </div>       
 </div>

     )
    }
  }
          

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <div>    
    <Container text>   
          <h1 className='title'  style={{ marginTop: '2em' }}>{post.frontmatter.title}</h1>  
    <Blog/>
    
    
      <h4 className="header">
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }}/>
      </Container>
      <Footer/>
    </div>  
    
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`