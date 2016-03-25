var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var linesData = null;
linesData = [
  {name: 'a'},
  {name:'c'},
  {name:'d'},
  {name:'e'},
  {name:'f'},
  {name:'h'},
  {name:'w'}
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
            <Line line={line.name} key={i} onClick={this.handleClick.bind(this, line)} />
          )
        }.bind(this))
      }
      </div>
        <div className={"active-line line-" + this.state.activeLine + " " + this.state.activeLine + "-line"}>
          {this.state.activeLine}
          <h1 className="direction">{this.state.activeDirection}</h1>
          {(() => {
          switch (this.state.activeDirection) {
          case null:   return <div className="direction-buttons"> <button className="north-button" onClick={this.setNorth}>Northbound</button> <button className="south-button" onClick={this.setSouth}>Southbound</button> </div>;
          case "north": return <div className="day-buttons"> <button className="weekday-button">Weekday</button> <button className="weekend-button">Weekend</button> </div>;
          case "south": return <div className="day-buttons"> <button className="weekday-button">Weekday</button> <button className="weekend-button">Weekend</button> </div>;
          case "east": return <div className="day-buttons"> <button className="weekday-button">Weekday</button> <button className="weekend-button">Weekend</button> </div>;
          case "west": return <div className="day-buttons"> <button className="weekday-button">Weekday</button> <button className="weekend-button">Weekend</button> </div>;
          default:     return ;
          }
          })()}
        </div>
     </div>
    );
  },

  handleClick: function (line) {
    this.setState({activeLine: line.name});
    this.setState({activeDirection: null});
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

