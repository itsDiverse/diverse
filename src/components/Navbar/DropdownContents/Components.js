import styled from "styled-components"

export const DropdownEl = styled.div`
  display: flex;
  flex-direction: column;
`

export const DropdownSection = styled.div`
  display: flex;
  z-index: 1;
`

export const Heading = styled.h3`
  font-weight: bold;
  font-style: normal;
  font-size: 14px;
  line-height: 15px;
  color: #707070;
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

export const DropdownSubtitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #707070;
`;

export const DropdownButton = styled.div`
  padding: 0.75rem;
  white-space: nowrap;
  margin: 1.5rem 0;
  font-style: normal;
  font-weight: bold;
  font-size: 13.5px;
  line-height: 16px;
  text-align: center;
  color: #195BB6;
  background: #ffffff;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`

export const ListPrimary = styled.div`
  background: #f5f5f5;
  padding: 30px;
  list-style-type: none;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #707070;
`

export const ListSection = styled.ul`
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid-column;
  display: table;   
  list-style-type: none;
  padding: 10px;
  
  li {
    white-space: nowrap;
    color: #707070c2;
    cursor: pointer;
    font-size: 14px;
    padding: 3px 0px;
    font-weight: 100;
    &:hover {
      text-decoration: underline;
    }
  }

  h3 {
    color:#545353;
    padding: 0;
    margin: 0;
    margin-bottom: 4px;
    font-weight: bolder;
    font-size: 15px;
    line-height: 18px;
    &:hover {
      text-decoration: none;
    }
  }
`
export const  ListItemsRow = styled.div`
  column-count: ${({columns}) => columns ? columns : 2};
  padding: 30px 50px;
`;