import React from 'react';


export default class Kid extends React.Component {

  constructor(props) {
    super(props);
    this.state = { emotion: 'Nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: true };
  }

  qualified() {
    this.setState({ startedPerforming: false })
  }

  componentDidMount(){
    this.setState({
      danceSteps:['step1', 'step2']
    })
  }

  static getDerivedStateFromProps(nextProps, state){
    debugger
    console.log(nextProps)
    return {
      emotion: nextProps.emotion ? nextProps.emotion : state.emotion,
      startedPerforming: nextProps.stop ? 'false' : state.startedPerforming,
      danceSteps: state.danceSteps.length < 5 ? [...state.danceSteps, ...nextProps.moreSteps] : state.danceSteps,
    }
  }


  render() {
    const { dressColor } = this.props;
    const { danceSteps, emotion, startedPerforming, currentStepIndex } = this.state;
    console.log(danceSteps);
    debugger;

    return <div>
        <div>dressColor: {dressColor}</div>
        <div style={{ backgroundColor: dressColor, width: 50, height: 50 }} />
        <div>Emotion: {emotion}</div>
        {startedPerforming == true ? <div>
            <div>Current Step: {danceSteps[currentStepIndex]}</div>
            <button
              onClick={() =>
                this.setState({ currentStepIndex: currentStepIndex + 1 })
              }
            >
              Perform Next Step
            </button>
          </div> : <div>
            Selected
            <button>Ask the Kid to Leave the Show</button>
          </div>}
      </div>;
  }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };
