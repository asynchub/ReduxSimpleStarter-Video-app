import React, { Component } from 'react'; // import React and pull out component

// class based component, refactor to this, when extra functionality is needed?
class SearchBar extends Component {
  // called automatically whenever instance is created, first and the only, all js object have this
  constructor(props) {
    super(props); // call parent constructor method on the parent Component class here

    this.state = { term: '' }; // initialize state by creating a new object with properties on the state,
    // and assigning this object to this.state
    // term is the searchterm, initialized that is being updated further.
    // each instance of a class based component has it's own copy of state
  }


  render () {
    return (
      <div className="searchbar">
        <input
          value={this.state.term}
          onChange={ (event) => this.onInputChange(event.target.value)}
        />
      </div>
    );
  };

  onInputChange(term) {
    this.setState({term: term});
    this.props.onSearchTermChange(term);
  }
  // on<Change>
  // change state only with method this.setState( {obj with properties updated} );
  // Value: { this.state.term } whenever js variable is used in JSX, it is wrapped with {}
  // turn the component into controlled component by value={this.state.term}

  /*
  // refactored to fat arrow one liner in render method above
  onInputChange(event) { // 1st declare event handler (function)
    console.log(event.target.value);
  };
  */

};

export default SearchBar;
/*
// start off with functional component
const SearcBar = () => {
  return <input />;
}; // functional component
*/



// event handlers:
// handling event 2 steps: 1st declare event handler (function), 2nd pass the event handler to element

// state: plain js object to record and react to user events.
// each class based component has it's own state object
// whenever state is changed, the render is reran and children's component's render is reran
// initialize state object before use it

/*
import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state.term = { term: '' };
  };

  render() {
    return (
      <div>
        <input
          value={ state.target.value }
          onChange={ (event) => this.setState( {term: event.target.value} ) }
        />
      </div>
    );
  };

}

export default SearchBar;
*/
