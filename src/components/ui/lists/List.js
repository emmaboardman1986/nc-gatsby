import React from "react"
import styled, { css } from "styled-components"
import BodyText from "../../components/ui/BodyText"
import StarredListItem from "../StarredListItem"

const List = ({ children, subList, color, isStarred }) => {
  console.log(children.length)
  return (
    <ListWrapper subList={subList}>
      {isStarred ? (
        children.length <= 1 ? (
          <StarredListItem>
            <BodyText color={color}>{children}</BodyText>
          </StarredListItem>
        ) : (
          children.map((listItem, index) => (
            <StarredListItem key={index}>
              <BodyText color={color}>{listItem.props.children}</BodyText>
            </StarredListItem>
          ))
        )
      ) : !children.length ? (
        <li>
          <BodyText color={color}>{children}</BodyText>
        </li>
      ) : (
        children.map((listItem, index) => (
          <li key={index}>
            <BodyText color={color}>{listItem.props.children}</BodyText>
          </li>
        ))
      )}
    </ListWrapper>
  )
}

const ListWrapper = styled.ul`
  font-family: "Poppins-Regular";
  font-size: 1rem;
  line-height: 1.4;
  padding-left: 2rem;
  position: relative;
  ${props => props.subList && subListStyles};
`

const subListStyles = css`
  font-size: 0.75rem;
  margin-top: 0.15rem;
  line-height: 1rem;
`

export default List
