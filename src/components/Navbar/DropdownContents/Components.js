import styled from "styled-components"

export const DropdownEl = styled.div`
  display: flex;
`

export const DropdownSection = styled.div`
  display: flex;
  z-index: 1;
`

export const Heading = styled.h3`
  font-weight: bold;
  margin: 1rem 0 0.5rem 0;
  color: rgba(126, 126, 126, 1);
`

export const HeadingLink = Heading.withComponent(`li`)

export const Logo = styled.img`
  width: 170px;
`

export const DropdownTitle = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  line-height: 27px;
  color: #195bb6;
`

export const DropdownButton = styled.div`
  padding: 0.75rem;
  white-space: nowrap;
  margin: 1.5rem 0;
  font-size: 13.5px;
  line-height: 16px;
  text-align: center;
  color: #195bb6;
  background: #ffffff;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`

export const ListPrimary = styled.ul`
  background: #f5f5f5;
  padding: 2rem;
  margin-right: 3rem;
  list-style-type: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  color: #707070;
`

export const ListSection = styled.ul`
  padding: 3rem;
  padding-left: 0;
  list-style-type: none;
  li {
    display: flex;
    white-space: nowrap;
  }
`
