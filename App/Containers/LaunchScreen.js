import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../../App/Components/RoundedButton'
import AlertMessage from '../../App/Components/AlertMessage'
import BusTimeAPI from '../../App/Services/BusTimeApi'
import { Actions } from 'react-native-router-flux';

// Styles
import styles from './Styles/LaunchScreenStyles'
import DevscreensButton from "./DevscreensButton";

export default class LaunchScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.logo} style={[styles.logo, styles.circleBorder]} />
          </View>

          <View style={styles.section} >
            <RoundedButton
              styles={styles.btnPrimary}
              text='Add Stop Tracker'
              // onPress={() => BusTimeAPI.create().getRoutes('MTABC').then(console.log)}
              onPress={Actions.launchScreenTest}
            />
            <DevscreensButton/>
          </View>

          <View style={styles.section} >
            <AlertMessage title={'No stops configured'} show={true}/>
          </View>

        </ScrollView>
      </View>
    )
  }
}
