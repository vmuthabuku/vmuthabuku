import React, {Component} from 'react';
import { Button, Card, List,  Container, Responsive,Visibility,Segment,Menu, Header, Icon, Sidebar, Grid} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Link from 'gatsby-link'
// import '../css/App.css';

const description = [
  'Vincent is a guy who cant stay away from his computer',
  'He enjoys football and has a new love in software development',
  'He enjoys playing football,watching football and a big fan of fifa',
  'Currently you will find him working on javascript projects specifically React js, node js and graphql'
].join(' ')

const HomepageHeading = ({ mobile }) => (
    <Container text>
      <Header
        as='h1'
        content='My name is Vincent Muthabuku'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <Header
        as='h2'
        content='Lover of everything, Boring Fun guy'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
    </Container>
  )

class Homez extends Component {
    state = {}
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
      const { fixed } = this.state
  
      return (
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                <Menu.Item                     
                      name='Home'                
                      content='Home'
                      onClick={this.handleItemClick}
                    ><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item
                      name='Blog'
                      
                      content='Blog'
                      onClick={this.handleItemClick}
                    ><Link to="/blog">Blog</Link></Menu.Item>

                    <Menu.Item
                      name='projects'
                      
                      content='Projects'
                      onClick={this.handleItemClick}
                    ><Link to="/projects">Projects</Link></Menu.Item>
                </Container>
              </Menu>
              <HomepageHeading />
            </Segment>
          </Visibility>  
          {children}
        </Responsive>
      )
    }
  }

  class MobileContainer extends Component {
    state = {}
  
    handleSidebarHide = () => this.setState({ sidebarOpened: false })
  
    handleToggle = () => this.setState({ sidebarOpened: true })
  
    render() {
      const { children } = this.props
      const { sidebarOpened } = this.state
  
      return (
        <Responsive
          as={Sidebar.Pushable}
          maxWidth={Responsive.onlyMobile.maxWidth}
        >
          <Sidebar
            as={Menu}
            animation='push'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item                  
                name='Home'          
                content='Home'
                onClick={this.handleItemClick}
              ><Link to="/">Home</Link></Menu.Item>
              <Menu.Item
                name='Blog'                
                content='Blog'
                onClick={this.handleItemClick}
              ><Link to="/blog">Blog</Link></Menu.Item>

              <Menu.Item
                name='projects'                
                content='Projects'
                onClick={this.handleItemClick}
              ><Link to="/projects">Projects</Link></Menu.Item>
          </Sidebar>
  
          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>
  
            {children}
          </Sidebar.Pusher>
        </Responsive>
      )
    }
  }

const ResponsiveContainer = ({ children }) => (
  <div>
    <Homez>{children}</Homez>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

const IndexPage = () => {
    return (
    <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
          
          <Card style={{width:"600px"}}>
             <Card.Content header='About Vincent' />
             <Card.Content description={description} />
             <Card.Content extra>
               <Icon name='user' />
              developer alert
            </Card.Content>
          </Card>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
          <img alt="none " src={require ("../images/me.jpg")} style={{width:"300px"}}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
          <Segment vertical>
          <Container textAlign='center'>
         <List style={{color:"grey"}} horizontal link size='huge'>
              <List.Item as='a' href='https://twitter.com/VMuthabuku'>
                <Icon name="twitter" />
              </List.Item>
              <List.Item as='a' href='https://github.com/vmuthabuku'>
              <Icon name="github" />
              </List.Item>
              <List.Item as='a' href='mailto:vmuthabuku@gmail.com'>
              <Icon name="mail" />
              </List.Item>
              <List.Item as='a' href='https://www.linkedin.com/in/vincent-muthabuku-aa574915a/'>
              <Icon name="linkedin" />
              </List.Item>
              <List.Item as='a' href='https://www.facebook.com/profile.php?id=100006375212788'>
              <Icon name="facebook" />
              </List.Item>
            </List>
         </Container>
         </Segment>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    </ResponsiveContainer>
    )

}

  


export default IndexPage;