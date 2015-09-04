var React = require('react'),
    Radium = require('radium');

var styles = {
  nav: {

  },

  li: {
    listStyle: 'none'
  },

  a: {
    color: 'blue',
    textDecoration: 'none',
    ':hover': {
      color: 'red',
      textDecoration: 'underline',
      transition: '0.2s'
    }
  },
};

module.exports = Radium(React.createClass({
  render: function() {
    return (
      <ul className="nav">
        <li ref="li1" style={styles.li}><a ref="a1" style={styles.a} href="">A link</a></li>
        <li ref="li2" style={styles.li}><a ref="a2" style={styles.a} href="">Another link</a></li>
      </ul>
    )
  }
}));

