import {AppRegistry, Text, LogBox} from 'react-native';
import {App} from './App';
import {name as appName} from './app.json';

LogBox.ignoreAllLogs();
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);
