import React from 'react'
import { Container, Segment,List, Icon} from 'semantic-ui-react'
   

const Footer = () => {
    return(
        <div>
         <Segment inverted style={{ margin: '5em 0em 0em ', padding: '5em 0em' }} vertical>
         <Container textAlign='center'>
         <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Site Map
              </List.Item>
              <List.Item as='a' href='mailto:vmuthabuku@gmail.com'>
                Contact me
              </List.Item>
              <List.Item as='a' href='https://github.com/vmuthabuku'>
                <Icon name="github"/>
              </List.Item>
            </List>
         </Container>
         </Segment>
        </div>
    )
}

export default Footer;