import React, {Component} from 'react';

import HeaderSvg from './HeaderSvg';
import logo from '../assets/avatar.png';

class Header extends Component {
    render() {
        return (
            <div className='header'>
            <HeaderSvg />
                <div className='back-profile'>
                    <span>Meu perfil</span>
                    <img src={logo} alt="avatar"/>
                </div>
            </div>
        );
    }
}

export default Header;