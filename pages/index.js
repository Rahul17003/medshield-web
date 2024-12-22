import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from '../routes';
import { Router } from '../routes';
import web3 from '../ethereum/web3';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Dropdown
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const HomepageHeading = ({ mobile }) => (
  <div style={ {   marginBottom: '4rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'center', borderRadius: '1rem' }} >
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"></link>


    <div style={{ marginTop: '5rem', marginBottom: '4rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', textAlign: 'center', borderRadius: '1rem' }}>
    <div style={{ padding: '1.5rem' }}>
        <h1 style={{ color: '#4F46E5', fontWeight: 'bold', fontSize: '3rem', marginBottom: '2rem', display: 'block' }}>Securing Medical Records with<br/>Blockchain Precision</h1>
        <p style={{ padding: '0.75rem', margin: '0', color: '#a9a9a9', marginBottom: '2rem',  fontWeight: '300', fontSize: '1rem', }}>
        MedShield is an innovative Electronic Health Record (EHR) system powered by blockchain technology. <br/>It ensures secure, transparent, and tamper-proof storage of medical records, empowering patients to share their health dataseamlessly with hospitals.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ margin: '0 2.5rem', maxWidth: 'fit-content', border: '1px solid', backgroundColor:'#212121', color:'#212121', padding: '1.5rem', borderRadius: '1.5rem', display: 'flex', gap: '2rem' }}>
                <img style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', border: '1px solid', width: '8rem', height: '8rem', objectFit: 'cover', borderRadius: '1rem' }} src='https://img.freepik.com/premium-photo/young-cool-man-smiling-cheerfully-pointing-with-forefinger_1187-93874.jpg' />
                <img style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', border: '1px solid', width: '8rem', height: '8rem', objectFit: 'cover', borderRadius: '1rem' }} src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg' />
                <img style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', border: '1px solid', width: '8rem', height: '8rem', objectFit: 'cover', borderRadius: '1rem' }} src='https://img.freepik.com/premium-photo/young-arab-man-isolated-blue-background-laughing_1368-242387.jpg' />
                <img style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', border: '1px solid', width: '8rem', height: '8rem', objectFit: 'cover', borderRadius: '1rem' }} src='https://img.freepik.com/premium-photo/caucasian-handsome-man-beige-wall-laughing_1368-97190.jpg' />
                <img style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', border: '1px solid', width: '8rem', height: '8rem', objectFit: 'cover', borderRadius: '1rem' }} src='https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg' />
                <img style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', border: '1px solid', width: '8rem', height: '8rem', objectFit: 'cover', borderRadius: '1rem' }} src='https://img.freepik.com/free-photo/young-joyful-man-black-shirt-with-optical-glasses-points-side-looks-isolated-pink-wall_141793-35301.jpg' />

            </div>
        </div>

        <Link route='/dashboard'>
        <Button style={{ marginTop: '2.5rem', backgroundColor: '#4F46E5', borderRadius: '9999px', color: '#FFF', padding: '1.1rem 1.5rem', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4338CA'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4F46E5'}>
            Explore Now
        </Button>
        </Link>
    </div>
</div>

  </div>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  onClickedPatient = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/record/${accounts[0]}`);
  }

  onClickedDoctor = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/doctor/${accounts[0]}`);
  }

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
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
            <Menu size='large' inverted >
              <Link route='/'>
                  <a className='item' style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  <img style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '3rem', height: '3rem', objectFit: 'cover',  }} 
                  src= 'https://cdn-icons-png.flaticon.com/128/10774/10774083.png' />
                  MedShield
                  </a>
              </Link>

              <Menu.Menu position='right'>
                <Link route='/dashboard'>
                    <a className='item'>Dashboard</a>
                </Link>

                <Link route='/list'>
                    <a className='item'>Records List</a>
                </Link>

                <Dropdown item text='Doctor'>
                  <Dropdown.Menu style={{backgroundColor:'#212121' , marginTop: '1rem', borderRadius: '1rem'}}>
                    <Dropdown.Item>
                      <Link route='/'>
                        <a style={{color:'white'}} onClick={this.onClickedDoctor}>View Profile</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/edit-doctor'>
                        <a style={{color:'white'}}>Edit Profile</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/make-appointment'>
                        <a style={{color:'white'}}>Make Appointment</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/edit-appointment'>
                        <a style={{color:'white'}}>Update Appointment</a>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
                <Dropdown item text='Patient'>
                  <Dropdown.Menu style={{backgroundColor:'#212121' , marginTop: '1rem', borderRadius: '1rem'}}> 
                    <Dropdown.Item>
                      <Link route='/'>
                        <a style={{color:'white'}} onClick={this.onClickedPatient}>View Profile</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/edit-patient'>
                        <a style={{color:'white'}}>Edit Profile</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/approve-doctor'>
                        <a style={{color:'white'}}>Allow Access</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/revoke-doctor'>
                        <a style={{color:'white'}}>Revoke Access</a>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown item text='Register'>
                  <Dropdown.Menu style={{backgroundColor:'#212121' , marginTop: '1rem', borderRadius: '1rem'}}>
                    <Dropdown.Item>
                      <Link route='/register-patient'>
                        <a style={{color:'white'}}>Patient</a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route='/register-doctor'>
                        <a style={{color:'white'}}>Doctor</a>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </Menu.Menu>
            </Menu>    
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })
  handleToggle = () => this.setState({ sidebarOpened: true })

  onClickedPatient = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/record/${accounts[0]}`);
  }

  onClickedDoctor = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/doctor/${accounts[0]}`);
  }

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Link route='/'>
                <a className='item'>Home</a>
            </Link>

            <Link route='/dashboard'>
                <a className='item'>Dashboard</a>
            </Link>
  
            <Link route='/list'>
                <a className='item'>Records List</a>
            </Link>
  
            <Dropdown item text='Doctor'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route='/'>
                    <a style={{color:'black'}} onClick={this.onClickedDoctor}>View Profile</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/edit-doctor'>
                    <a style={{color:'black'}}>Edit Profile</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/make-appointment'>
                    <a style={{color:'black'}}>Make Appointment</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/edit-appointment'>
                    <a style={{color:'black'}}>Update Appointment</a>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              
            <Dropdown item text='Patient'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route='/'>
                    <a style={{color:'black'}} onClick={this.onClickedPatient}>View Profile</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/edit-patient'>
                    <a style={{color:'black'}}>Edit Profile</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/approve-doctor'>
                    <a style={{color:'black'}}>Allow Access</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/revoke-doctor'>
                    <a style={{color:'black'}}>Revoke Access</a>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='Register'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route='/register-patient'>
                    <a style={{color:'black'}}>Patient</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/register-doctor'>
                    <a style={{color:'black'}}>Doctor</a>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer >
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#1b1c1d' }}>
    <section style={{ paddingBottom: '6rem' }}>
        <div style={{ margin: '0 5rem', maxWidth: '112rem', padding: '0 1rem', paddingTop: '1rem' }}>
            <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '3.5rem', textAlign: 'center', fontWeight: 'bold', color: '#ffffff', padding: '1.25rem 0' }}>
                Secure. Transparent. Empowering.
                </h2>
                <p style={{ fontSize: '1.125rem', fontWeight: 'normal', color: '#a9a9a9', maxWidth: '40rem', margin: '0 auto' }}>
                Empowering Secure and Seamless Healthcare with Blockchain Innovation.
                </p>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row', // Arrange items in a horizontal row
                    gap: '10.25rem',
                }}
            >
                {/* First Card */}
                <div style={{ position: 'relative', textAlign: 'center', maxWidth: '24rem', margin: '0 auto' }}>
                    <div
                        style={{
                            backgroundColor: '#668afc',
                            borderRadius: '0.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '1.25rem',
                            width: '12rem',
                            height: '8rem',
                            margin: '0 auto',
                            cursor: 'pointer',
                            transition: 'all 0.5s',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#4F46E5')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#668afc')}
                    >
                        <img style={{ width: '3.5rem', height: '3.5rem' }} src='https://cdn-icons-png.flaticon.com/128/2273/2273145.png' />
                    </div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#ffffff', marginBottom: '0.75rem', textTransform: 'capitalize' }}>
                        Secure Records
                    </h4>
                    <p style={{ fontSize: '0.875rem', fontWeight: 'normal', color: '#6B7280' }}>
                        Decentralized record storage.
                    </p>
                </div>

                {/* Second Card */}
                <div style={{ position: 'relative', textAlign: 'center', maxWidth: '24rem', margin: '0 auto' }}>
                    <div
                        style={{
                            backgroundColor: '#ff6161',
                            borderRadius: '0.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '1.25rem',
                            width: '12rem',
                            height: '8rem',
                            margin: '0 auto',
                            cursor: 'pointer',
                            transition: 'all 0.5s',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ff3636')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff6161')}
                    >
                        <img style={{ width: '3.5rem', height: '3.5rem' }} src='https://cdn-icons-png.flaticon.com/128/12698/12698568.png' />
                    </div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#ffffff', marginBottom: '0.75rem', textTransform: 'capitalize' }}>
                        Track Health
                    </h4>
                    <p style={{ fontSize: '0.875rem', fontWeight: 'normal', color: '#6B7280' }}>
                        Keep track of your health.
                    </p>
                </div>

                {/* Third Card */}
                <div style={{ position: 'relative', textAlign: 'center', maxWidth: '24rem', margin: '0 auto' }}>
                    <div
                        style={{
                            backgroundColor: '#46db86',
                            borderRadius: '0.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '1.25rem',
                            width: '12rem',
                            height: '8rem',
                            margin: '0 auto',
                            cursor: 'pointer',
                            transition: 'all 0.5s',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1fec77')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#46db86')}
                    >
                        <img style={{ width: '3.5rem', height: '3.5rem' }} src='https://cdn-icons-png.flaticon.com/128/5555/5555993.png' />
                    </div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#ffffff', marginBottom: '0.75rem', textTransform: 'capitalize' }}>
                        Secure Sharing
                    </h4>
                    <p style={{ fontSize: '0.875rem', fontWeight: 'normal', color: '#6B7280' }}>
                        Share your records securely.
                    </p>
                </div>
            </div>
        </div>
    </section>
</div>



    <Segment style={{ padding: '0em', backgroundColor: '#1b1c1d' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em', color: '#ffffff' }}>
              "Easy to use, Reliable, Secure"
            </Header>
            <p style={{ fontSize: '1.33em', color: '#ffffff' }}>MedShield</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em', color: '#ffffff' }}>
              "Your Health, Your Control, Secured by Blockchain."
            </Header>
            <p style={{ fontSize: '1.33em', color: '#ffffff' }}>
              Hospitals can access your records with your permission.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>


    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Social' />
              <List link inverted>
                <List.Item as='a'>Instagram</List.Item>
                <List.Item as='a'>Facebook</List.Item>
                <List.Item as='a'>Twitter</List.Item>
                <List.Item as='a'>YouTube</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Secure Storage System</List.Item>
                <List.Item as='a'>Appointment</List.Item>
                <List.Item as='a'>Secure Sharing</List.Item>
                <List.Item as='a'>Blockchain</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Team MedShield
              </Header>
              <p style={{ color: '#a9a9a9' }}>
                Mithun R - 713521CS088 | Ragul Gandhi R - 713521CS111<br/>| Rahul R - 713521CS114
                <br/>
                Computer Science and Engineering<br/>SNSCT
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout