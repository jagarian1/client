import React, { Component } from 'react'; //C:\react200\client\src\R012_ClassPrototype.js

class ClassPrototype extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call::::', props);
    }
    componentDidMount() {
        //ESS prototype
        var ExamCountFunc = (function () {
            function ExamCount(num) {
                this.number = num;
            }
            ExamCount.prototype.showNum = function () {
                console.log(`1. react_` + this.number);
            };
            return ExamCount;
        }());
        
        var cnt = new ExamCountFunc('200');
        cnt.showNum();

        //ES6 class
        class ExamCountClass {
            constructor(num2) {
                this.number2 = num2;
            }
            showNum() {
                console.log('--------------------------------------');
                console.log(`2. react_${this.number2}`);
                console.log(`2. react2_${this.number2}`);
                console.log(`2. react_${this.number2}`); // '와 ` 의 차이점은.......
                /*eslint no-template-curly-in-string: "error"*/
                // eslint-disable-next-line no-template-curly-in-string
                console.log(`Time:   ${12 * 60 * 60 * 1000}`);
                console.log('--------------------------------------');
                const props = {id: "someId"}
                console.log(`https://robohash.org/${props.id}?size=200x200`);
            }
        } 

        var cnt2 = new ExamCountClass('2hundred');
        cnt2.showNum();
    }

    
    render() {
        return (
        <h2>[ THIS IS CLASS _______] </h2>
        )
    }
}

export default ClassPrototype;