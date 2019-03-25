import React from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'

const Cards = ({project}) => (

  <Card.Group>
    <Card  style={{width:"100%"}}>
      <Card.Content>
        <Icon style={{float:"right"}} size='large' name='github' />
        <Card.Header>{project.title}</Card.Header>
        <Card.Meta>{project.type}</Card.Meta>
        <Card.Description>
           <strong>{project.description}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
          <a href={project.sourcecodeurl}>Code</a>
          </Button>
          <Button basic color='red'>
          <a href={project.site}>Site</a>
          </Button>
        </div>
      </Card.Content>
    </Card>
    </Card.Group>
)

export default Cards