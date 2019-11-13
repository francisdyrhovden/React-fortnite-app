import React, { Component } from 'react'

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        this.getTimeUntil();
    }

    componentDidMount(){
        setInterval(() => this.getTimeUntil(), 1000);
    }

    //Fix a better way to get the right time. Adding 1 hour because norway = GMT+1
    getTimeUntil(){
        const add1Hour = 3600000;
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate()+1);
        const time = (Date.parse(tomorrow.toDateString()) + add1Hour) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        this.setState({ hours, minutes, seconds})
    }
    render() {
        return (
            <div>
                <p>REFRESHES IN {this.state.hours}H {this.state.minutes}M {this.state.seconds}S</p>
            </div>
        )
    }
}

export default Clock;
