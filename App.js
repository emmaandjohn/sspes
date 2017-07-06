import React from 'react'
import * as firebase from 'firebase'
import { AppRegistry, StatusBar } from 'react-native'
import { Container, Content, Button, Text } from 'native-base'
import { StackNavigator } from 'react-navigation'
import { Col, Row, Grid } from 'react-native-easy-grid'
import * as Animatable from 'react-native-animatable';

import { Register } from './components/Register'

class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    const config = {
      apiKey: "AIzaSyCnGkI8kO1eRPPx7xnovrtpr-NMPP7CAQc",
      authDomain: "superapp-f8a4e.firebaseapp.com",
      databaseURL: "https://superapp-f8a4e.firebaseio.com",
      storageBucket: "gs://superapp-f8a4e.appspot.com",
    }
    firebase.initializeApp(config)

    const database = firebase.database()

    // function writeUserData(userId, name, email, imageUrl) {
      firebase.database().ref('users/' + new Date().getTime()).set({
        username: 'Pascal',
        email: 'aaa@bbb.ch'
      })
    // }
  }

  render() {
    const { navigate } = this.props.navigation
        return (
          <Container>
            <StatusBar hidden={true} />
            <Content>
              <Grid>
                <Col>
                  <Button block light onPress={() => navigate('Register')} title="Lets Register">
                    <Animatable.Text animation="fadeIn" iterationCount='infinite'>Register</Animatable.Text>
                  </Button>
                </Col>
                <Col>
                  <Button block onPress={() => navigate('Register')} title="Lets Register">
                    <Text>Register2</Text>
                  </Button>
                </Col>
              </Grid>
            </Content>
          </Container>
        )
  }
}

const ReactNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Register: { screen: Register }
}, { headerMode: 'none' }
)

AppRegistry.registerComponent('RichAndFame', () => ReactNavigator)