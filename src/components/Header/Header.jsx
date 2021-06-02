import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={process.env.PUBLIC_URL + '/fb_icon-icons.com_65584.ico'} alt='images' />
                <div className="header__form">
                    <form action="" method="GET">
                            <input className="search__inpput" type="search"/>
                    </form>
                </div>
            </div>
            <nav className="header__nav">
                <div className="header__navItem--logo">
                    <a href="#">
                        <img className="header__navImg" src={process.env.PUBLIC_URL + '/zkd.png'} alt='images' />
                    </a>
                </div>
                <div className="header__navItem--np">
                    <a href="#">
                        Nickname
                    </a>
                </div>
                <div className="header__navItem">
                    <a href="#">
                        Home
                    </a>
                </div>
                <div className="header__navItem">
                    <a href="#">
                        Freindly Find
                    </a>
                </div>
                <div className="header__navItem--ico">
                    <div className="header__navItem--img">
                        <a href="#">
                            <img className="header__navImg" src={process.env.PUBLIC_URL + '/team_friends_partners_partner_icon_153861.ico'} alt='images' />
                        </a>
                    </div>
                    <div className="header__navItem--img">
                        <a href="#">
                            <img className="header__navImg" src={process.env.PUBLIC_URL + '/chat_icon-icons.com_67748.ico'} alt='images' />
                        </a>
                    </div>
                    <div className="header__navItem--img">
                        <a href="#">
                            <img className="header__navImg" src={process.env.PUBLIC_URL + '/planetearth_118372.ico'} alt='images' />
                        </a>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header;