import React from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import Head from 'next/head';
import MenuBar from './MenuBar';


export default props => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"></link>
            </Head>

            <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 340}}
            >
            <MenuBar/>
                <Header as='h2' style={{ fontSize:'3em', fontWeight:'Bold'}} content='MedShield'/>
                <Header as='h3' style={{ fontSize:'1.5em', fontWeight:'normal'}} content='Ensure that your records are safe and sound'/>
            </Segment>
            
            <Container>
                {props.children}
            </Container>
        </>
    );
};