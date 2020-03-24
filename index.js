/**
 * @format
 */

 import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

export default class MobxDemo extends React.Component {
    render() {
        return <App/>
    }
}

AppRegistry.registerComponent(appName, () => MobxDemo);
