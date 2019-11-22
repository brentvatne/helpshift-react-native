import React from 'react';

export default class Helpshift extends React.Component {
  static eventEmitter = {
    addListener: () => {},
    removeListener: () => {},
    removeAllListeners: () => {},
  };

  static init = () => {};
  static login = () => {};
  static logout = () => {};
  static showConversation = () => {};
  static showFAQs = () => {};
  static showConversationWithCIFs = () => {};
  static showFAQsWithCIFs = () => {};
  static requestUnreadMessagesCount = async () => 0;

  componentDidMount() {
    console.warn('Helpshift not available in this context');
  }
  render() {
    return null;
  }
}
