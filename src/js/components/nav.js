var React = require('react'),
    Radium = require('radium');

var styles = require('./nav.styles');

module.exports = Radium(React.createClass({
  render: function() {
    return (
      <ul className="nav">
        <li ref="li1" style={styles.li}><a ref="a1" style={[styles.a, this.props.green && styles.green]} href="">A link</a></li>
        <li ref="li2" style={styles.li}><a ref="a2" style={styles.a} href="">Another link</a></li>
      </ul>
    )
  }
}));

