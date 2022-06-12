import React, { Component } from 'react';
import WeatherSingle from './WeatherSingle';
import './weather.css'

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: []
        }
    }

    componentDidMount() {
        const apiKey = 'fd8a2a48765006c606db0c624872cd65'
        const key2 = '28f94249bfc8e51eac28423560c1baed'
        const lat = '47.9970247'
        const lon = '-122.16871'
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

        fetch(url) //cors issue, or api key
            .then((res) => {
                // console.log(res)
                return res.json()
            })
            .then((data) => {
                // console.log(data);
                this.setState({
                    weather: [data]
                })
            }).catch(err => console.log(err))

    }

    renderItems() {
        return this.state.weather.map((item, i) => (
            <React.Fragment key={i}>
                <WeatherSingle item={item} />
            </React.Fragment>
        ))
    }

    render() {
        return (
                <>
                <div className='weather' style={{minHeight: '195px', verticalAlign: 'middle'}}>
                    {this.renderItems()}
                </div>
                </>
            )
    }
}

export default Weather;