import styled, {css} from "styled-components";
import {myTheme} from "../styles/Theme.styled";
type StyledBtnPropsType = {
    firstBtn?:boolean
    secondBtn?:boolean
}
export const StyledBtn = styled.button <StyledBtnPropsType>`
border-radius: 5px;
  margin-bottom: 22px;
  Width:86px;
  Height:30px;
  font-size: ${myTheme.fontSize.buttons};
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  
  ${props => props.firstBtn && css`
    background-color: ${myTheme.colors.primary};
    color: ${myTheme.colors.secondary};
    border: none;
    margin-right: 12px;
    margin-left: 20px;
  `}
  
  ${props => props.secondBtn && css `
  background-color: transparent;
    border: 2px solid #4E71FE;
  color:${myTheme.colors.primary};
   `}
`