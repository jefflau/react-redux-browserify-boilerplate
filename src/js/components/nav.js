import React from 'react';
import Radium from 'radium';

import styles from './nav.styles';

@Radium
export class Nav extends React.Component {
  render() {
    return (
      <ul className="nav">
        <li key="li1" style={styles.li}><a ref="a1" style={[styles.a, this.props.green && styles.green]} href="">A link</a></li>
        <li key="li2" style={styles.li}><a ref="a2" style={styles.a} href="">Another link</a></li>
      </ul>
    )
  }
}
