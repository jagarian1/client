import React, { Component } from 'react';

class R008_LifecycleEx extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps Call :'+props.prop_value);  //#2
    return {tmp_state:props.prop_value};
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log('1. constructor Call'); //#1
  }

  componentDidMount() {
    console.log('4. componentDidMount Call');  //#4
    console.log('5. tmp_state : '+this.state.tmp_state);  //#5
    this.setState({tmp_state2 : true});
  }

  shouldComponentUpdate(props, state) {
    console.log('6. shouldComponentUpdate Call / tmp_state2 = ' + state.tmp_state2);
    return state.tmp_state2
  }

  render() {
    console.log('3. render Call');  //#3
    return (
      <h2>[ THIS IS shouldComponentUpdate FUCNTION ]</h2>  //변경 부분 shouldComponentUpdate
    )
  }
}

export default R008_LifecycleEx; 