import React,{useState} from "react";
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link  ,NavLink} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import '../Style/Header.css'
import Logo from '../Images/images/logo.svg'


const Header=()=>{
const [mobleOpen,setMoboleOpen]=useState(false)
// handle menu click
const hanleDrawerToggle=()=>{
setMoboleOpen(!mobleOpen)

}

// menu drawer
const drawer=(
<Box onClick={hanleDrawerToggle} sx={{textAlign:'center'}}>
       <Typography color={"goldenrod"}
        variant="h6" 
        component={"div"} 
        sx={{flexGrow:1 ,my:2}}
        
        > 
        <img src={Logo} alt="logo" height={'70'} width="200"/>
      </Typography>
      <Divider/>
         <ul className="mobile-navigation">
            <li>
               <Link to={"/"}>Home</Link>
            </li>
            <li>
               <Link to={"/menu"}>Menu</Link>
            </li>
            <li>
               <Link to={"/about"}>About</Link>
            </li>
            <li>
               <Link to={"/contact"}>Contact</Link>
            </li>
            
         </ul>
      
</Box>
)


   return(
   <>
   <Box>
    <AppBar component={"nav"} sx={{bgcolor:"black" }}>
      <Toolbar>
         <IconButton
          color="inherit" 
          aria-label="open deawer" 
          edge="start"
           sx={{mr:2, display:{sm:"none"}}}
           onClick={hanleDrawerToggle}
           >
               <MenuIcon/>
         </IconButton>
         <Typography
          color={"goldenrod"} 
          variant="h6"
           component={"div"} 
           sx={{flexGrow:1}}
           > 
            <img src={Logo} alt="logo" height={'70'} width="250"/>
      </Typography>
         
      <Box sx={{display:{xs:'none' ,sm:'block'}}}>
         <ul className="navigation-menu">
            <li>
               <NavLink activeClassesName ="active" to={"/"}>Home</NavLink>
            </li>
            <li>
               <NavLink to={"/menu"}>Menu</NavLink>
            </li>
            <li>
               <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
               <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            
         </ul>
      </Box>
      </Toolbar>
      
    </AppBar>
    <Box component="nav">
      <Drawer varient=" temporary" open={mobleOpen} onClose={hanleDrawerToggle} 
      sx={{display:{xs:"block",sm:"none"}, "& .MuiDrawer-paper":{
         boxSizing:"border-box",
         width:"240px"
      }}}>

         {drawer}
      </Drawer>

    </Box>
    <Box >

    <Toolbar/> 
    
    </Box>
   </Box>
   
   </>
   )
}

export default Header;