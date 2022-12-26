import React, { Component } from  'react';

class R005_LifecycleEx extends Component {
    constructor(props) {
        super(props);
        this.stat = {};
        console.log('1. constructor Called');
        console.log("this.stat===>",this.stat);
        console.log('what is this====>', this);
    }

    render() {
        console.log('3. render Call');
        return (
            <h2>[ThIs IS CONSTRUCTOR FUNCTION ]</h2>
        )
    }
}

export default R005_LifecycleEx;