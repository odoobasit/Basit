import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css';
import Kid from './components/Kid/Kid';
import Teacher from "./components/Teacher/Teacher";
import Judge from "./components/Judge/Judge";
// import QuizInfo from './screens/QuizInfo/QuizInfo';


class App extends Component {
  
  constructor(){
    super();

    this.state = {
      a: false,
      moreSteps: []
    }

  }

  componentWillMount(){
    this.setState({volume: 5})
  }

  updateSteps(furtherSteps){
    // debugger
    this.setState({moreSteps:furtherSteps})
  }

  updateKid(){
    this.setState({emotion:'Happy',})
  }

  stopKid(){
    this.setState({stop: true});
  }

  renderHeader(){

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header> 
    );
  }


  renderBody(){

    return <div>
        <Kid dressColor="Green" moreSteps={this.state.moreSteps} emotion={this.state.emotion} stop={this.state.stop} />
        <Teacher updateSteps={this.updateSteps.bind(this)} />
        <Judge updateKid={this.updateKid.bind(this)} stopKid={this.stopKid.bind(this)} />
      </div>;
  }


  render() {
    
    return (
      <div>
        <div className="App">
          {this.renderHeader()}
        </div>
        {this.renderBody()}
      </div>
    );
  }
}

export default App;
