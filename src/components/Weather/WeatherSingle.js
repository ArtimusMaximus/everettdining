import React from 'react';
import './weather.css';

const WeatherSingle = ({item}) => {
    // console.log(item)
    return (
        <>
        <div className='left-align fade-in-image'>
            <h6>{item.name} weather:</h6>
            <ul style={{listStyleType: 'none', fontSize: '16px'}}>
                <li>Temp : {item.main.temp}</li>
                <li>Humidity : {item.main.humidity}</li>
                <li>Wind Speed : {item.wind.speed}</li>
                <li>Description : {item.weather[0].description}</li>
                 
            </ul>
        </div>
        </>
    )
}

export default WeatherSingle;