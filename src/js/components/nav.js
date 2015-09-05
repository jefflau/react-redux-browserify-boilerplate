var React = require('react'),
    Radium = require('radium');

var styles = require('./nav.styles');

@Radium
class Nav extends React.Component {
  render() {
    return (
      <ul className="nav">
        <li key="li1" style={styles.li}><a ref="a1" style={[styles.a, this.props.green && styles.green]} href="">A link</a></li>
        <li key="li2" style={styles.li}><a ref="a2" style={styles.a} href="">Another link</a></li>
      </ul>
    )
  }
}

module.exports = Nav

