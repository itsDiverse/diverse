import styled from "styled-components"

export const StyledContentWrapper = styled.div`
margin:0;
padding: 0; 
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #e5e5e5;
  background-image: linear-gradient(
    180deg,
    #e5e5e5 37%,
    #e5e5e5 50%,
    #ffffff 100%
  );
`

export const StyledProposalContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 770px;
  height: 645px;
  margin-top: 40px;

  background: linear-gradient(116.43deg, #195bb6 6.27%, #08172d 125.19%);
  box-shadow: 0px 4px 55px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`
export const StyledProposalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding-top: 3rem;
`

export const StyledProposalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 77px;
`

export const StyledProposalBody = styled.div`
  display: flex;
  flex-direction: column;
  left: 584px;
  top: 281px;
  margin-top: 2rem;
`

export const StyledProposalForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const StyledProposalLabel = styled.label`
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 10px;
  font-family: Helvetica;
  font-style: normal;
`

export const StyledProposalSelect = styled.select`
  display: block;
  height: 53px;
  width: 273px;
  margin-top: 10px;
  margin-bottom: 15px;
  padding-left: 5px;

  font-size: 12.5px;
  line-height: 15px;
  color: #858585;
  background: #ffffff;
  border: 1px solid #195bb6;
  box-sizing: border-box;
  border-radius: 2px;
`
export const StyledProposalInput = styled.input`
  display: block;
  height: 53px;
  width: 273px;
  margin-top: 5px;
  margin-bottom: 15px;
  padding-left: 5px;
  font-weight: 600;
  font-size: 12.5px;
  line-height: 15px;
  color: #858585;
  background: #ffffff;
  border: 1px solid #195bb6;
  box-sizing: border-box;
  border-radius: 2px;
`

export const StyledProposalButton = styled.button`
  width: 239px;
  height: 46.4px;
  background: #0c67e4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  border-style: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
`

export const StyledProposalTextContainer = styled.div`
  width: 364px;
  height: 88px;
`

export const StyledProposalText = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
`
