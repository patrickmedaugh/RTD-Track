var React = require('react');
var ReactDOM = require('react-dom');

var getLine = function (line) {
  linesData.filter(function(value) {
    return value['name'] == line;
  })
};


linesData = [
  {'name': 'a'},
  {'name':'c',  'north': {'weekday': {'LittletonMineral': [null, null, null, "5:13 AM", null, null, "5:43 AM", null, "6:13 AM", "6:43 AM", "7:13 AM", "7:43 AM", "8:13 AM", "8:43 AM", "9:12 AM", "9:42 AM",  "9:12 AM", "9:42 AM", "10:12 AM", "10:42 AM", "11:12 AM", "11:42 AM", "12:12 PM", "12:42 PM", "1:12 PM", "1:42 PM", "2:12 PM", null, null, "2:42 PM", null, null, "3:12 PM", null, "3:42 PM", "4:12 PM", "4:42 PM", "5:12 PM", "5:42 PM", "6:12 PM", ],
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
                                    'Union': [],
                                   },
                          'weekend': {'LittletonMineral': [null, null, null, "5:13 AM", null, null, "5:43 AM", null, "6:13 AM", "6:43 AM", "7:13 AM", "7:43 AM", "8:13 AM", "8:43 AM", "9:12 AM", "9:42 AM" ],
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
                                    'Union': [],
                                    }
                            },
              'southbound': {'Union': [],
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
                          'LittletonMineral': [],
                         },
  },
  {'name':'d'},
  {'name':'e'},
  {'name':'f'},
  {'name':'h'},
  {'name':'w'}
  ];

var LineList = React.createClass({

  getInitialState: function () {
    return {activeLine: null,
            activeDirection: '',
            activeDay: null}
  },

  render: function () {
    return (
      <div>
        <div className='line-select'>
      {this.props.linesData.map(function(line, i) {
          return (
            <Line line={line['name']} key={i} onClick={this.handleClick.bind(this, line)} />
          )
        }.bind(this))
      }
      </div>
        <div className={"active-line line-" + this.state.activeLine + " " + this.state.activeLine + "-line"}>
          <h1 className="active-line-header">{this.state.activeLine}</h1>
          <h1 className="active-direction-header">{this.state.activeDirection}</h1>
          <h1 className="active-day-header">{this.state.activeDay}</h1>
          {(() => {
          if (this.state.activeDirection == null) {
          switch (this.state.activeLine) {
            case null:   return ;
            case "a":   return <div className="direction-buttons"> <button className="east-button" onClick={this.setEast}>Eastbound</button> <button className="west-button" onClick={this.setWest}>Westbound</button> </div>;
            case "c":   return <div className="direction-buttons"> <button className="north-button" onClick={this.setNorth}>Northbound</button> <button className="south-button" onClick={this.setSouth}>Southbound</button> </div>;
            case "d":   return <div className="direction-buttons"> <button className="north-button" onClick={this.setNorth}>Northbound</button> <button className="south-button" onClick={this.setSouth}>Southbound</button> </div>;
            case "e":   return <div className="direction-buttons"> <button className="north-button" onClick={this.setNorth}>Northbound</button> <button className="south-button" onClick={this.setSouth}>Southbound</button> </div>;
            case "f":   return <div className="direction-buttons"> <button className="north-button" onClick={this.setNorth}>Northbound</button> <button className="south-button" onClick={this.setSouth}>Southbound</button> </div>;
            case "h":   return <div className="direction-buttons"> <button className="north-button" onClick={this.setNorth}>Northbound</button> <button className="south-button" onClick={this.setSouth}>Southbound</button> </div>;
            case "w":   return <div className="direction-buttons"> <button className="east-button" onClick={this.setEast}>Eastbound</button> <button className="west-button" onClick={this.setWest}>Westbound</button> </div>;
            default:     return ;
            }
          }
          if (this.state.activeDay == null) {
          switch (this.state.activeDirection) {
            case "north": return <div className="day-buttons"> <button className="weekday-button" onClick={this.setWeekday}>Weekday</button> <button onClick={this.setWeekend} className="weekend-button">Weekend</button> </div>;
            case "south": return <div className="day-buttons"> <button className="weekday-button" onClick={this.setWeekday}>Weekday</button> <button onClick={this.setWeekend} className="weekend-button">Weekend</button> </div>;
            case "east": return <div className="day-buttons"> <button className="weekday-button" onClick={this.setWeekday}>Weekday</button> <button onClick={this.setWeekend} className="weekend-button">Weekend</button> </div>;
            case "west": return <div className="day-buttons"> <button className="weekday-button" onClick={this.setWeekday}>Weekday</button> <button onClick={this.setWeekend} className="weekend-button">Weekend</button> </div>;
            default:     return ;
            }
          }
          return <div className='test'>HI!!!! </div>
          if (this.state.activeLine !== null && this.state.activeDirection !== null && this.state.activeDay !== null ) {
              return <div className="line-info">HI!!!! {getLine('c')['north']['weekday']}</div>
            };
          })()}
        </div>
     </div>
    );
  },

  handleClick: function (line) {
    this.setState({activeLine: line.name});
    this.setState({activeDirection: null});
    this.setState({activeDay: null});
  },

  setNorth: function () {
    this.setState({activeDirection: 'north'});
  },

  setSouth: function () {
    this.setState({activeDirection: 'south'});
  },

  setEast: function () {
    this.setState({activeDirection: 'east'});
  },

  setWest: function () {
    this.setState({activeDirection: 'west'});
  },

  setWeekday: function () {
    this.setState({activeDay: 'weekday'});
  },

  setWeekend: function () {
    this.setState({activeDay: 'weekend'});
  },

});

var Line = React.createClass({
  getInitialState: function () {
    return {activeLine: null}
  },

  render: function () {
    return (
      <div data-line={this.props.line} onClick={this.props.onClick} className={"line " + this.props.line + "-line"}>
        <p>{this.props.line}</p>
      </div>
    )
  },

  handleClick: function () {
    console.log(this);
  },

});



ReactDOM.render(
  <LineList linesData={linesData}/>,
  document.getElementById('line-list')
);


