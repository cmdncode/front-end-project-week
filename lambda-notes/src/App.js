import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { CreateView, NoteView, ListView } from './views';
import './App.css';
import { Authentication } from './components';
// import { DeleteModal } from './components';
// import { connect } from 'react-redux';
// import { deleteNote } from './actions';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sortedByTitleAsc: false,
      sortedByTitleDes: false,
      sortedByLengthAsc: false,
      sortedByLengthDes: false,
    }
  }

  sortHelper = (type, dir) => {
    if ((type === 'title') && (dir === 'asc')) {
      this.setState({
        sortedByTitleAsc: true,
        sortedByTitleDes: false,
        sortedByLengthAsc: false,
        sortedByLengthDes: false,
      })
    }
    if ((type === 'title') && (dir === 'des')) {
      this.setState({
      sortedByTitleAsc: false,
      sortedByTitleDes: true,
      sortedByLengthAsc: false,
      sortedByLengthDes: false,
      })
    }
    if ((type === 'length') && (dir === 'asc')) {
      this.setState({
        sortedByTitleAsc: false,
        sortedByTitleDes: false,
        sortedByLengthAsc: true,
        sortedByLengthDes: false,
      })
    }
    if ((type === 'length') && (dir === 'des')){
      this.setState({
        sortedByTitleAsc: false,
        sortedByTitleDes: false,
        sortedByLengthAsc: false,
        sortedByLengthDes: true,
      })
    }
  }
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' render={(props) => (<ListView {...props} sortHelper={this.sortHelper} titleAsc={this.state.sortedByTitleAsc} titleDes={this.state.sortedByTitleDes} lengthAsc={this.state.sortedByLengthAsc} lengthDes={this.state.sortedByLengthDes}/>)} />
        <Route path='/add' render={(props) => (<CreateView {...props} />)} />
        <Route path='/:id' render={(props) => (<NoteView {...props} />)} />
      </Switch>
      </div>
    );
  }
}

export default withRouter(Authentication(App));
