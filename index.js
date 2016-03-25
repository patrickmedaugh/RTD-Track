var React = require('react');
var ReactDOM = require('react-dom');

var getLine = function (line) {
  linesData.filter(function (value) {
    return value['name'] == line;
  });
};

linesData = [{ 'name': 'a' }, { 'name': 'c', 'north': { 'weekday': { 'LittletonMineral': [null, null, null, "5:13 AM", null, null, "5:43 AM", null, "6:13 AM", "6:43 AM", "7:13 AM", "7:43 AM", "8:13 AM", "8:43 AM", "9:12 AM", "9:42 AM", "9:12 AM", "9:42 AM", "10:12 AM", "10:42 AM", "11:12 AM", "11:42 AM", "12:12 PM", "12:42 PM", "1:12 PM", "1:42 PM", "2:12 PM", null, null, "2:42 PM", null, null, "3:12 PM", null, "3:42 PM", "4:12 PM", "4:42 PM", "5:12 PM", "5:42 PM", "6:12 PM"],
      'LittletonDowntown': [],
      'Oxford': [],
      'Englewood': [],
      'Evans': [],
      'Broadway': [],
      'Alameda': [],
      'TenthAndOsage': [],
      'AurariaWest': [],
      'SportsAuthorityMileHigh': [],
      'PepsiCenterElitchGardens': [],
      'Union': []
    },
    'weekend': { 'LittletonMineral': [null, null, null, "5:13 AM", null, null, "5:43 AM", null, "6:13 AM", "6:43 AM", "7:13 AM", "7:43 AM", "8:13 AM", "8:43 AM", "9:12 AM", "9:42 AM"],
      'LittletonDowntown': [],
      'Oxford': [],
      'Englewood': [],
      'Evans': [],
      'Broadway': [],
      'Alameda': [],
      'TenthAndOsage': [],
      'AurariaWest': [],
      'SportsAuthorityMileHigh': [],
      'PepsiCenterElitchGardens': [],
      'Union': []
    }
  },
  'southbound': { 'Union': [],
    'PepsiCenterElitchGardens': [],
    'SportsAuthorityMileHigh': [],
    'AurariaWest': [],
    'TenthAndOsage': [],
    'Alameda': [],
    'Broadway': [],
    'Evans': [],
    'Englewood': [],
    'Oxford': [],
    'LittletonDowntown': [],
    'LittletonMineral': []
  }
}, { 'name': 'd' }, { 'name': 'e' }, { 'name': 'f' }, { 'name': 'h' }, { 'name': 'w' }];

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
          return React.createElement(Line, { line: line['name'], key: i, onClick: this.handleClick.bind(this, line) });
        }.bind(this))
      ),
      React.createElement(
        'div',
        { className: "active-line line-" + this.state.activeLine + " " + this.state.activeLine + "-line" },
        React.createElement(
          'h1',
          { className: 'active-line-header' },
          this.state.activeLine
        ),
        React.createElement(
          'h1',
          { className: 'active-direction-header' },
          this.state.activeDirection
        ),
        React.createElement(
          'h1',
          { className: 'active-day-header' },
          this.state.activeDay
        ),
        (() => {
          if (this.state.activeDirection == null) {
            switch (this.state.activeLine) {
              case null:
                return;
              case "a":
                return React.createElement(
                  'div',
                  { className: 'direction-buttons' },
                  ' ',
                  React.createElement(
                    'button',
                    { className: 'east-button', onClick: this.setEast },
                    'Eastbound'
                  ),
                  ' ',
                  React.createElement(
                    'button',
                    { className: 'west-button', onClick: this.setWest },
                    'Westbound'
                  ),
                  ' '
                );
              case "c":
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
              case "d":
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
              case "e":
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
              case "f":
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
              case "h":
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
              case "w":
                return React.createElement(
                  'div',
                  { className: 'direction-buttons' },
                  ' ',
                  React.createElement(
                    'button',
                    { className: 'east-button', onClick: this.setEast },
                    'Eastbound'
                  ),
                  ' ',
                  React.createElement(
                    'button',
                    { className: 'west-button', onClick: this.setWest },
                    'Westbound'
                  ),
                  ' '
                );
              default:
                return;
            }
          }
          if (this.state.activeDay == null) {
            switch (this.state.activeDirection) {
              case "north":
                return React.createElement(
                  'div',
                  { className: 'day-buttons' },
                  ' ',
                  React.createElement(
                    'button',
                    { className: 'weekday-button', onClick: this.setWeekday },
                    'Weekday'
                  ),
                  ' ',
                  React.createElement(
                    'button',
                    { onClick: this.setWeekend, className: 'weekend-button' },
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
                    { className: 'weekday-button', onClick: this.setWeekday },
                    'Weekday'
                  ),
                  ' ',
                  React.createElement(
                    'button',
                    { onClick: this.setWeekend, className: 'weekend-button' },
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
                    { className: 'weekday-button', onClick: this.setWeekday },
                    'Weekday'
                  ),
                  ' ',
                  React.createElement(
                    'button',
                    { onClick: this.setWeekend, className: 'weekend-button' },
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
                    { className: 'weekday-button', onClick: this.setWeekday },
                    'Weekday'
                  ),
                  ' ',
                  React.createElement(
                    'button',
                    { onClick: this.setWeekend, className: 'weekend-button' },
                    'Weekend'
                  ),
                  ' '
                );
              default:
                return;
            }
          }
          return React.createElement(
            'div',
            { className: 'test' },
            'HI!!!! '
          );
          if (this.state.activeLine !== null && this.state.activeDirection !== null && this.state.activeDay !== null) {
            return React.createElement(
              'div',
              { className: 'line-info' },
              'HI!!!! ',
              getLine('c')['north']['weekday']
            );
          };
        })()
      )
    );
  },

  handleClick: function (line) {
    this.setState({ activeLine: line.name });
    this.setState({ activeDirection: null });
    this.setState({ activeDay: null });
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
  },

  setWeekday: function () {
    this.setState({ activeDay: 'weekday' });
  },

  setWeekend: function () {
    this.setState({ activeDay: 'weekend' });
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
