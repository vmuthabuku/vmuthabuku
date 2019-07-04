import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Link from 'gatsby-link'
import '../styles/post.css'

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu borderless  fixed='top'>
        <Menu.Item>
          <img alt="none " src={require ("../images/logo.png")}/>
        </Menu.Item>
        <Menu.Item
          
          name='Home'
          active={activeItem === 'Vmuthabuku'}
          content='Home'
          onClick={this.handleItemClick}
        ><Link to="/">Home</Link></Menu.Item>
        <Menu.Item
          name='Blog'
          active={activeItem === 'Blog'}
          content='Blog'
          onClick={this.handleItemClick}
        ><Link to="/blog">Blog</Link></Menu.Item>

        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          content='Projects'
          onClick={this.handleItemClick}
        ><Link to="/projects">Projects</Link></Menu.Item>
      </Menu>
    )
  }
}
