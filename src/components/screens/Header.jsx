import React from 'react';
import styles from 'styled-components';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
                <Ul>
                    <Link to='/'>
                        <Li>
                            <Logo src={require('../../assets/images/logo.svg').default} alt="logo" />
                        </Li>
                    </Link>
                    <Li>
                        <H4>Login</H4>
                    </Li>
                </Ul>
                ........
        </div>
    )
};

export default Header;

const Ul = styles.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
`;
const Li = styles.li``;
const Logo = styles.img``;
const H4 = styles.h4`
    background: #005def;
    color: #fff;
    padding: 5px 30px;
    display: inline-block;
    border-radius: 2px;
`;