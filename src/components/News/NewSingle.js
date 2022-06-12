import React from 'react';
import { UserConsumer } from '../App';
import './news.css'

const NewSingle = ({item}) => (
    
    <UserConsumer>
        {({ name, toggleName }) => ( // these are
        <div className="col s3 fade-in-image" onClick={toggleName}>
            <div className="card small">
                <div className="card-image">
                    <img src={!item.urlToImage ? (<p>image not loading</p>) : item.urlToImage  } alt={item.title} className="weather-in" />    
                    <span className="card-title">{item.source.name}  {name} </span>
                </div>
                <div className="card-content">
                    <p style={{fontSize: '12px'}}>{item.title}</p>
                </div>
                <div className="card-action">
                    <a className="grey-text text-darken-1" href={item.url} target="_blank">Full Article</a>    
                </div>
            </div>    
        </div>
        )}
        
    </UserConsumer>
    
    
    
);

export default NewSingle;