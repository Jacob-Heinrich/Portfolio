import React from 'react';
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

function SideBar({ isOpen, toggle}) {
  return(
    <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
    <Icon onClick = {toggle}>
    <CloseIcon />
    </Icon>
    <SidebarWrapper>
    <SidebarMenu>
    <SidebarLink to="about">About</SidebarLink>
    <SidebarLink to="technology">Technologies</SidebarLink>
    <SidebarLink to="projects">Projects</SidebarLink>
    </SidebarMenu>
    <SideBtnWrap>
    <SidebarRoute to="/models" id = "sidebarModels">3D Models</SidebarRoute>
    <SidebarRoute to="/resume" id = "sidebarResume">Resume</SidebarRoute>
    </ SideBtnWrap>
    </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SideBar;
