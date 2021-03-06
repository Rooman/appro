import React from 'react';
import Container from 'containers/hoc/Container';

import {ReactComponent as Logo} from '../../assets/img/logo.svg';
import {contactInfo, MenuLinkInfo, menuLinks} from '../../constants';

import classes from './Footer.module.scss';
import Button, {ButtonType} from '../UI/Button';

const slogan = 'польза, прочность, красота';

const Footer = () => {
    return <footer className={ classes.footer }>
        <Container>
            <div className={ classes.footer__container }>
                <div className={ classes.footer__logo }>
                    <Logo className={ classes['footer__logo-img'] }/>
                    <div className={ classes['footer__logo-slogan'] }>
                        { slogan }
                    </div>
                </div>

                <nav className={ classes.footer__nav }>
                    <ul className={ classes['footer__menu-list'] }>
                        { menuLinks.map((link, index) =>
                            <MenuItem key={ index }
                                      name={ link.name }
                                      url={ link.url }/>) }
                    </ul>
                </nav>
                <div className={ classes.footer__address }>
                    <div className={ classes['footer__address-item'] }>{ contactInfo.address }</div>
                    <div className={ classes['footer__address-item'] }>
                        <a href={ `tel:${contactInfo.phone}` }>{ contactInfo.phone }</a>
                    </div>
                    <div className={ classes['footer__address-item'] }>
                        { contactInfo.copyright }
                    </div>
                </div>
            </div>
        </Container>
    </footer>;
};

// TODO: How can we pass object here?
const MenuItem = (props: MenuLinkInfo) => {
    return <li><a href={ props.url } className={ classes['footer__menu-link'] }>
        { props.name }
    </a></li>;
};

export default Footer;
