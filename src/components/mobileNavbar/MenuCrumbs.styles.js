import styled from "styled-components"

export const StyledMenuCrumbs = styled.div`
  display: flex;
  background: rgb(229, 236, 241);
  padding: 5px 20px;
  overflow-y: scroll;
`

export const StyledMenuCrumbsItem = styled.div`
  padding: 14px 5px;
  font-size: 12.5px;
  font-weight: bold;
  font-family: sans-serif;
  display: flex;
  flex-shrink: 0;

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
`
export const StyledMenuHeaderText = styled.div`
  text-transform: uppercase;
  margin-left: 5px;
  font-weight: 800;
  font-size: 11px;
  color: #195bb6;
`
export const StyledMenuCrumbsHeaderRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 5px;

  &:first-of-type  {
    margin-left: 20px;
  }
`
