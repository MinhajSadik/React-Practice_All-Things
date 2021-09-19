import React from 'react';

class Clock extends React.Component {
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
            date: new Date()
        });
        }
    

    render() {
    
        return (
            <div>
                <h1 className='heading'>
                    <span className='text'>{this.state.date.toLocaleTimeString(this.props.local)}</span>
                </h1>
            </div>
        );
    }
}

export default Clock;