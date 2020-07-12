import styled from "styled-components"

export const StyledMenuCrumbs = styled.div`
  background: rgb(229, 236, 241);
  overflow-y: scroll;
  overflow-x: hidden;
  height: 50px;
  white-space: nowrap;
`

export const StyledMenuCrumbsItem = styled.div`
  padding: 14px 5px;
  font-size: 12.5px;
  font-weight: 800;
  font-family: sans-serif;
  color: #195bb6;
  display: inline-block;

  &:last-child {
    font-weight: 400;
  }

  &:not(:last-child):after {
    margin-left: 5px;
    content: " > ";
  }
`
export const StyledMenuCrumbsHome = styled.div`
  display: flex;
  flex: 1 0 50px;
  flex-direction: row;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 2px 30px;
`
export const StyledMenuHeaderText = styled.div`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 12px;
  color: #195bb6;
`
export const StyledMenuCrumbsHeaderRow = styled.div`
  display: flex;
  flex: 1;
  font-size: 12px;
  font-weight: 800;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #195bb6;

  &:first-of-type  {
    flex-grow: 2;
    flex-wrap: nowrap;
  }
`
