import React from 'react';
import { useLocation } from 'react-router-dom';
import Headerprops from './Headerprops';
import { UserConsumer } from './App';
import eatLocalImg from './EverettDining/eatlocal.webp'
import Weather from './Weather/Weather';

const Header = () => {
    const location = useLocation();
    
    return (
        <>
        
        <UserConsumer>
            {user => (
            <header className="App-header">
                <div className='row s12' style={{width: '100%', padding: '3%'}}>
                
                    
                    
                    <div className='col s2 left-align'><Weather /></div>
                        
                    <div className='col s10 left-align' style={{zIndex: '-1'}}>    
                        <h1 style={{marginTop: '3%'}} className="fade-image">
                            {
                                location.pathname === '/news1' ? user.props.news1.name 
                                : location.pathname === '/news2' ? user.props.news2.name
                                : location.pathname === '/news3' ? user.props.news3.name
                                : location.pathname === '/news4' ? user.props.news4.name
                                : location.pathname === '/news5' ? user.props.news5.name
                                : location.pathname === '/' ? ''
                                : user.props.localFood.name
                            }
                        </h1>
                    </div>

                </div>
            </header>)}
        </UserConsumer>
        
        </>
    )
}

export default Header;

