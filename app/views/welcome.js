import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  InteractionManager,
  Platform,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import HistoryPage from './history'

export default class welcome extends Component {

    componentDidMount() {
        const {navigator} = this.props;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                SplashScreen.hide();
                navigator.resetTo({
                    component: HistoryPage,
                    name: 'History',
                    params:{
                        
                    }
                });
            });
        }, 500);
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.container}>
            
            </View>
        );
    }

  }

  const styles = StyleSheet.create({
    container:{
        flex:1,
    }
  })