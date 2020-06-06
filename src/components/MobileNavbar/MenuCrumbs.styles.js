import styled from "styled-components"

export const StyledMenuCrumbs = styled.div`
  display: flex;
  background: rgb(229, 236, 241);
  overflow-y: scroll;
  flex: 1 1 90px;
`

export const StyledMenuCrumbsItem = styled.div`
  padding: 14px 5px;
  font-size: 12.5px;
  font-weight: 800;
  font-family: sans-serif;
  display: flex;
  color: #195bb6;

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
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 20px 30px;
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
