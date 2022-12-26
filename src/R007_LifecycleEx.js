import React, { Component } from 'react';

class R007_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call :'+props.prop_value); //  #2
        return {tmp_state:props.prop_value};
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');//  #1
    }

    componentDidMount() {  //이부분잉  componentDidMount 사용법 
        console.log('4. componentDidMount Call');//  #4
        console.log('5. tmp_state : '+this.state.tmp_state); //  #5
    }

    render() {
        console.log('3. render Call'); //  #3
        return (
        <h2>[ THIS IS componentDidMount FUCNTION ]</h2>
        )
    }
}

export default R007_LifecycleEx;