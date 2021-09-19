import React from 'react';

class Clock extends React.Component {
    // when use this props inside this class then use constructor() and super() method otherwise use shortcut just state={date: new Date()}
    // constructor(props) { 
    //     super(props);
    //     this.state = {date: new Date()}
    // }

    state = {date: new Date()};

    componentDidMount() {
        this.clockTimer = setInterval(() =>this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.clockTimer)
    }

    tick() {
        this.setState({
            date: new Date(), // this.state.date = new Date() never do that 
        });
        }
    

    render() {
        const {date} = this.state;
        return (
            <div>
                <h1 className='heading'>
                    <span className='text'>{date.toLocaleTimeString("bn-BD")}</span>
                </h1>
            </div>
        );
    }
}

export default Clock;