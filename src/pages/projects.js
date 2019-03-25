import React from 'react';
import { Container } from 'semantic-ui-react'
import Layout from "../components/layout"
import Cards from '../components/card'
import { portfolio } from '../projects'

const Projects = () =>{
    return (
        <Layout>
            <Container text style={{margin:"7em"}}>
            <div >
                {portfolio.map((project, i) => (
                <Cards project={project} key={i} />
        ))}
      </div>

            </Container>
        </Layout>
    )

}

export default Projects;
