import React, { Component} from 'react';

class R010_Varliable extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDisMount() {
        var varName = 'react';
        console.log('varNmae1='+varName);
        //var varName = '200' //'varname' is already define no-redeclare 
        console.log('varNmae2='+varName);

        let letName = 'react';
        console.log('letName1='+letName);
        
        //let letName = '200' // Parsing error: Identifier 'letName' has already been declared
        //letName = 'react200';
        
        const constName = 'react';
        console.log('constName='+constName);
        //const constName = '200'; //error: uncaught TypeError :

    }

    render() {
        return (
            <h2>[THis is Valiable ]</h2>
        )
    }
}

export default R010_Varliable;