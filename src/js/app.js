import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

import keenImage from '../assets/keen.png';

export default class Salut extends Component {
  render() {
    return (
      <div>
        Salut ! Je m'appelles l'appli React !
        <img src={ keenImage } alt='Commander Keen' />
      </div>
    );
  }
}

render(<Salut />, document.getElementById('app'));
