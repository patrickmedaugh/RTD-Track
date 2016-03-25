var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var linesData = null;
linesData = [{ name: 'a' }, { name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' }, { name: 'h' }, { name: 'w' }];

var LineList = React.createClass({
  displayName: 'LineList',


  getInitialState: function () {
    return { activeLine: null,
      activeDirection: '',
      activeDay: null };
  },

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'line-select' },
        this.props.linesData.map(function (line, i) {
          return React.createElement(Line, { line: line.name, key: i, onClick: this.handleClick.bind(this, line) });
        }.bind(this))
      ),
      React.createElement(
        'div',
        { className: "active-line line-" + this.state.activeLine + " " + this.state.activeLine + "-line" },
        this.state.activeLine,
        React.createElement(
          'h1',
          { className: 'direction' },
          this.state.activeDirection
        ),
        (() => {
          switch (this.state.activeDirection) {
            case null:
              return React.createElement(
                'div',
                { className: 'direction-buttons' },
                ' ',
                React.createElement(
                  'button',
                  { className: 'north-button', onClick: this.setNorth },
                  'Northbound'
                ),
                ' ',
                React.createElement(
                  'button',
                  { className: 'south-button', onClick: this.setSouth },
                  'Southbound'
                ),
                ' '
              );
            case "north":
              return React.createElement(
                'div',
                { className: 'day-buttons' },
                ' ',
                React.createElement(
                  'button',
                  { className: 'weekday-button' },
                  'Weekday'
                ),
                ' ',
                React.createElement(
                  'button',
                  { className: 'weekend-button' },
                  'Weekend'
                ),
                ' '
              );
            case "south":
              return React.createElement(
                'div',
                { className: 'day-buttons' },
                ' ',
                React.createElement(
                  'button',
                  { className: 'weekday-button' },
                  'Weekday'
                ),
                ' ',
                React.createElement(
                  'button',
                  { className: 'weekend-button' },
                  'Weekend'
                ),
                ' '
              );
            case "east":
              return React.createElement(
                'div',
                { className: 'day-buttons' },
                ' ',
                React.createElement(
                  'button',
                  { className: 'weekday-button' },
                  'Weekday'
                ),
                ' ',
                React.createElement(
                  'button',
                  { className: 'weekend-button' },
                  'Weekend'
                ),
                ' '
              );
            case "west":
              return React.createElement(
                'div',
                { className: 'day-buttons' },
                ' ',
                React.createElement(
                  'button',
                  { className: 'weekday-button' },
                  'Weekday'
                ),
                ' ',
                React.createElement(
                  'button',
                  { className: 'weekend-button' },
                  'Weekend'
                ),
                ' '
              );
            default:
              return;
          }
        })()
      )
    );
  },

  handleClick: function (line) {
    this.setState({ activeLine: line.name });
    this.setState({ activeDirection: null });
  },

  setNorth: function () {
    this.setState({ activeDirection: 'north' });
  },

  setSouth: function () {
    this.setState({ activeDirection: 'south' });
  },

  setEast: function () {
    this.setState({ activeDirection: 'east' });
  },

  setWest: function () {
    this.setState({ activeDirection: 'west' });
  }

});

var Line = React.createClass({
  displayName: 'Line',

  getInitialState: function () {
    return { activeLine: null };
  },

  render: function () {
    return React.createElement(
      'div',
      { 'data-line': this.props.line, onClick: this.props.onClick, className: "line " + this.props.line + "-line" },
      React.createElement(
        'p',
        null,
        this.props.line
      )
    );
  },

  handleClick: function () {
    console.log(this);
  }

});

ReactDOM.render(React.createElement(LineList, { linesData: linesData }), document.getElementById('line-list'));
