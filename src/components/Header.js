import React, {Component} from 'react';

import HeaderSvg from './HeaderSvg';
import logo from '../assets/avatar.png';

class Header extends Component {
    render() {
        return (
            <div class='header'>
            <HeaderSvg />
                <div class='back-profile'>
                    <span>Meu perfil</span>
                    <img src={logo} alt="avatar"/>
                </div>
            </div>
        );
    }
}

export default Header;