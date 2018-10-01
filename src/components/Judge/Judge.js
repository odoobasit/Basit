import React, { Component } from "react";

export default class Judge extends React.Component {
  constructor() {
    super()

    this.state = { stars: 0, available: false }
  }

  applaud() {
    // debugger
    this.props.updateKid()
  }

  provideStars() {
    const { stars } = this.state;

    this.state.stars <= 4 ? this.setState({ stars: stars + 1 }) : this.props.stopKid()


  }

  // shouldComponentUpdate(nextProps, nextState){
  //   // debugger
  //   if (this.state.stars < 5){
  //     return true
  //   }
  //   else{
  //     return false
  //   }
  // }


  render() {
    const { stars, available } = this.state;

    return (
      <div>
        <button type="button" onClick={this.applaud.bind(this)}>
          Appreciate performance
       </button>
        <button type="button" onClick={this.provideStars.bind(this)}>
          Provide stars
       </button>

        Kid is available: {available}

        Stars gained: {stars}
      </div>
    );
  }
}
