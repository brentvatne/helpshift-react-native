import React from 'react';
import { NativeModules } from 'react-native';

let Helpshift;

if (NativeModules.RNHelpshift) {
  Helpshift = require('./Helpshift').default;
} else {
  Helpshift = require('./NotAvailable').default;
}

export default Helpshift;