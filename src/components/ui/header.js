import styled from "styled-components"
import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { setColor } from "../../utils/styleHelpers"
import Nav from "../ui/nav"


const Header = ({children}) => {
    return(
        <HeaderWrapper>
            <HeaderLogo>
                {/* <Link to="/index">NS</Link> */}
             </HeaderLogo>
             <Nav />
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


const HeaderLogo = styled.div`
flex: 1;
`

export default Header



