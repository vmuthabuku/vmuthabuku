import React from "react"
//import { Link } from "gatsby"
import 'semantic-ui-css/semantic.min.css'

import Layout from "../components/layout"
import { Divider, Grid, Segment, Icon, Card, Container, List} from 'semantic-ui-react'

const description = [
  'Vincent is a guy who cant stay away from his computer',
  'He enjoys football and has a new love in software development',
  'He enjoys playing football,watching football and a big fan of fifa',
  'Currently you will find him working on javascript projects specifically React js, node js and graphql'
].join(' ')


const IndexPage = () => (
  <Layout>
    <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase', marginTop: '7em' }}
        >
          About-Me
        </Divider>
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
  
     
  </Layout>
 
)

export default IndexPage
