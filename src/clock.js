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

    //Fix a better way to get the right time
    getTimeUntil(){
        const convert = 3600000;
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate()+1);
        const time = (Date.parse(tomorrow.toDateString()) + convert) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        this.setState({ hours, minutes, seconds})
    }
    render() {
        return (
            <div>
                <p>REFRESHES IN {this.state.hours} HOURS {this.state.minutes}M {this.state.seconds}S</p>
            </div>
        )
    }
}

export default Clock
