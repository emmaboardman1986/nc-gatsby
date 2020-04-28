import React from "react"
import styled, { css } from "styled-components"

const List = ({ children, subList }) => {
  return <ListWrapper subList={subList}>{children}</ListWrapper>
}

const ListWrapper = styled.ul`
  font-family: "Poppins-Regular";
  font-size: 1rem;
  padding-left: 9%;
  position: relative;
  ${props => props.subList && subListStyles};
`

const subListStyles = css`
  font-size: 0.75rem;
  margin-top: 0.15rem;
  line-height: 1rem;
`

export default List
