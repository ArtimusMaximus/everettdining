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
                                location.pathname === '/news1' ? user.state.news1.name 
                                : location.pathname === '/news2' ? user.state.news2.name
                                : location.pathname === '/news3' ? user.state.news3.name
                                : location.pathname === '/news4' ? user.state.news4.name
                                : location.pathname === '/news5' ? user.state.news5.name
                                : location.pathname === '/' ? ''
                                : user.state.localFood.name
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

