import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
} from 'react-native'

import ArrayUtils from '../utils/ArrayUtils'

import TabNavigator from 'react-native-tab-navigator'
import EventPage  from './event'
import PeoplePage from './people'
import OthersPage from './others'

export var FLAG_TAB = {
    flag_historyTab: 'flag_historyTab', 
    flag_eventTab: 'flag_eventTab',
    flag_peopleTab: 'flag_peopleTab', 
    flag_othersTab: 'flag_othersTab'
}

export default class event extends Component {

}