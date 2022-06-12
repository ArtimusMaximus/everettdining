import React from 'react';
import Icon from 'react-icons-kit';
import {ic_thumb_down_twotone} from 'react-icons-kit/md/ic_thumb_down_twotone'
import {ic_thumb_up_twotone} from 'react-icons-kit/md/ic_thumb_up_twotone'
import './diningsingle.css'

const DiningSingle = ({diner}) => {
    
    const phone = diner.dinerPhone
    ?.split('')
    .filter(item => item !== '-' && item !== ' ')
    .join('')

    return (
        <div className="col l3 m4 s12 fade-in-image">
            <div className="card blue-grey darken-2 small hoverable">
                <div className="card-content white-text">
                    <span className="card-title">{diner.dinerName}</span>
                    <p>{diner.dinerAddress}</p>
                    <h6>{diner.dinerWebsite && <b><a href={diner.dinerWebsite}>Website</a></b>}</h6>
                    <ul style={{listStyleType: 'none'}}>
                        {diner.dinerDelivery ? <li>Delivery:<Icon icon={ic_thumb_up_twotone} size={'35'} style={{marginLeft: '15px'}} /></li> : <li>Delivery:<Icon style={{marginLeft: '15px'}} icon={ic_thumb_down_twotone} size={'35'} /></li> }
                        <li>{diner.dinerTakeout}</li>
                        <li>{diner.dinerCashless}</li>
                    </ul>
                </div>
                <div className="card-action">
                <a href="#">{diner.dinerPhone === undefined ? '...' 
                : 
                (phone.slice(0, 3) + '-' + 
                phone.slice(3, 6) + '-' + 
                phone.slice(6))
                }</a>
                </div>
            </div>
        </div>
    )
}

export default DiningSingle;