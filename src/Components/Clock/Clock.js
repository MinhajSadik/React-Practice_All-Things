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

    handleClick(e) {
        e.preventDefault();
        this.setState({
            local:'en-us'
        });
    }

    render() {
        const {date, local} = this.state;
        return (
            <div>
                <h1 className='heading'>
                    <span className='text'>{date.toLocaleTimeString(local)}</span>
                </h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

export default Clock;