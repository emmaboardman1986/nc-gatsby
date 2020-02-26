import styled from "styled-components"
import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { setColor } from "../../styleHelpers"


const Header = ({children}) => {
    return(
        <HeaderWrapper>
            <HeaderLogo>
                {/* <Link to="/index">NS</Link> */}
             </HeaderLogo>
             <HeaderLinks>
                <Link to="/about">About Us</Link>
                <Link to="/jlpt-bootcamp">JLPT Bootcamp</Link>
                <Link to="/friday-study-club">Friday Study Club</Link>
                <Link to="/friday-study-club">日本語</Link>
             </HeaderLinks>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
padding-top: 60px;
background-color: ${setColor.brandPrimary};
@media (min-width: 500px){
  display: flex;
  justify-content: space-between;
  padding: 2%;
  align-items: center;
  background-color: ${setColor.brandPrimary};
}
`

const HeaderLinks = styled.div`
display: none;
@media (min-width: 780px){
display: flex;
justify-content: flex-end;
width: 60%;
padding-right: 5%;
margin-right: 8%;
a {
    color: white;
    margin-left: 4%;
    text-decoration: none;
    font-family: "Poppins-Regular";
    border-bottom: 2px solid ${setColor.brandPrimary};
    padding-bottom: 0.1%;
    &:hover {
        border-bottom: 2px solid white;
    }
}
}
`

const HeaderLogo = styled.div`
`

export default Header



