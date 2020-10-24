import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import InputGroup from 'react-bootstrap/InputGroup'

export const Nav = styled.nav`
   background : #fff;
   display: flex;
    height: 80px;
    justify-content: center;
    
 
    @media screen and (max-width : 960px) {
        transition : 0.8s all ease;
        
    }
    @media screen and (max-width : 700px) {
        margin-top : -10px;
       
        
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right:5px;
    height: 80px ;
    z-index : 1;
    width: 100%;
    padding : 10px;
    max-width: 1250px;
    
    @media screen and (max-width : 700px){
        
        
    }
`

export const NavLogo = styled(LinkR)`
    color: #000;
    justify-self : flex-baseline;
    cursor : pointer;
    font-size: 3rem;
    align-items: center;
    margin-left : 30px;
    font-weight : bold;
    text-decoration: none;
    margin-top: 10px;
    @media screen and (max-width : 960px) {
        font-size:2.7rem;
        
    }
    @media screen and (max-width : 768px) {
        font-size:2.4rem;
        
    }
    @media screen and (max-width : 700px) {
        font-size:2.2rem;
        
    }
    
`

export const MobileIcon = styled.div`
    display : none;

    @media screen and (max-width : 700px ){
        display : block;
        position : absolute;
        top: 1;
        left : 0;
        margin-right:50px;
        transform : translate(50% ,60% );
        font-size : 1.8rem;
        cursor: pointer;
        
    }
    @media screen and (max-width : 700px) {
        font-size:1.7rem;
        margin-top:4px;
        
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items:center;
    list-style : none;
    text-align :center;
    
    @media screen and (min-width : 700px) {
        margin-left:-30px;
    }
    @media screen and (max-width : 700px) {
        margin-left:50px;
    }
   
`

export const NavItem = styled.li`
    height: 80px;
    margin-left:15px;
    margin-right:15px;
   @media screen and (max-width : 700px) {
    margin:-8px;
    }
  
`

export const NavLinks = styled(LinkS)`
    color : #000;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding:0 1rem;
    height: 100%;
    cursor : pointer;
    font-size: 1.5rem;
    &.active{
        border-bottom: 3px solid #000;
    }
    @media screen and (max-width : 700px) {
        font-size:1.4rem;
       
    }
   
`
export const ItemLable = styled.h5 `
    margin-top: -20px;
    font-style:oblique;
    
    cursor: pointer;
    @media screen and (max-width : 700px) {
        display:none;
       
    }
`

export const SearchBox = styled.form`
    display: flex;
    align-items:center;
    text-align :center;
    height: 100%;
    
    @media screen and (max-width : 960px) {
        margin-left: 20px;
        margin-top:110px;
        
    }
  
  
    @media screen and (max-width : 800px){
        display: none;
    }
  `

export const SearchInput = styled.input`
    width:450px;
    height:30px;
    display:flex;
    align-items: center;
    border-width:1.5px 1.5px;
    border-style:solid;
    border-color :black ;
    border-right:unset;
    padding-left:10px;
    font-size:1rem;
    &:focus{
        
    }
    @media screen and (max-width : 1170px) {
        width:300px;
        
    }
    @media screen and (max-width : 960px) {
       
        
    }
   
  

    
`
export const SearchIcon = styled.div`
    
        border-color :black ;
        border-style:solid;
        border-left:unset;
        border-width:1.5px 1.5px;
        border-top-right-radius:3px;
        border-bottom-right-radius:3px;
        width:60px;
        height:30px;
        padding-top:5px;
        top: 0;
        font-size : 1rem;
        cursor: pointer;
        background-color:rgb(230, 232, 235); 

  
        
`

export const SearchIconMenu = styled.div `
 
    color : #000;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding:0 1rem;
    height: 100%;
    cursor : pointer;
    font-size: 1.5rem;
 @media screen and (min-width : 800px){
        display:none;
       
    }
    @media screen and (max-width : 700px) {
        font-size:1.4rem;
        
    }
`

