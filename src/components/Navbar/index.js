import React from 'react'
import { FaBars, FaUser,FaShoppingCart ,FaSearch} from 'react-icons/fa'
import { IoIosArrowDown  } from 'react-icons/io'
import { BsHeartFill,BsSearch  } from 'react-icons/bs'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    SearchBox,
    SearchInput,
    SearchIcon,
    SearchIconMenu,
ItemLable,
} from './NavbarElements'


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>

                   
                    <NavMenu>
                    <NavItem>
                     <MobileIcon>
                        <FaBars  />
                     </MobileIcon>
                     </NavItem>
                        <NavItem>
                            <NavLinks to='about'><BsHeartFill  /></NavLinks>
                            <ItemLable> المفضله <IoIosArrowDown /></ItemLable>
                        </NavItem> 
                        <NavItem>
                            <NavLinks to='about'><FaShoppingCart  /></NavLinks>
                            <ItemLable>سلة المشتريات <IoIosArrowDown /></ItemLable>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'><FaUser  /></NavLinks>
                            <ItemLable >تسجيل دخول <IoIosArrowDown /></ItemLable>
                        </NavItem>
                        <NavItem>
                            <SearchIconMenu> <FaSearch  /> </SearchIconMenu>
                        </NavItem>
                    </NavMenu>
                    <SearchBox>
                                <SearchInput placeholder="إبحـث" text-align="right"></SearchInput>
                                <SearchIcon>
                                    <FaSearch  />
                                </SearchIcon>
                            </SearchBox>
                    <NavLogo to='/'>  لقــاء لقــاء </NavLogo>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
