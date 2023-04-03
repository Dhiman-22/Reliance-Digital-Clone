import { Box,Flex ,Image,Text,Input,InputGroup,InputRightElement} from "@chakra-ui/react";
import MegaMenu from "./MegaMenu";
import {Link} from "react-router-dom"
import React from "react";
import { LoginContext } from "../../Context/LoginContext";
import {SearchIcon} from "@chakra-ui/icons";
import Styles from "./navbar.module.css";
import logo from "./logo.png"





function Navbar(){
    const {loginstate}=React.useContext(LoginContext);
    const info = JSON.parse(localStorage.getItem("name"));
    //const itemCount=localStorage.getItem("itemCount");
   // console.log(itemCount);
// console.log(info.firstName);
//  console.log(loginstate,"l");

    return(
        <div className={Styles.nav}>
        <Box as="header"  bg='rgb(224,19,19)' w='100%' h='30px'   color='white'>
            <Flex direction="row-reverse">
            <Box >
            <Text marginRight='30px' fontSize="16px" fontWeight="600">Find a store | Buying Guides | Contact Us</Text>   
            </Box>
            </Flex>
        </Box>
        <Box bg='rgb(224,19,19)' w='100%' h='80px' pl={6} pr={6} pt={1}  color='white'>
        <Flex justifyContent="space-between">
         <Box >
         <Link to="/" ><Image w="100px" src={logo} alt=""></Image></Link>
         </Box>
         <Box mt={6}>
            <Flex>
                <InputGroup>
            <Input w="500px" bg="white" borderRadius="50px" placeholder="Find Your Favourite Products" ></Input>
            <InputRightElement children={<SearchIcon color='grey' />} />
                </InputGroup>
            </Flex>
         </Box>
         <Box mt={8}>
            <Flex>
            <Text fontSize="16px" fontWeight="600" mr={3}>Pin Code</Text> |
            <Link to="/cart"><Text fontSize="16px" fontWeight="600" mr={3} ml={3}> Cart</Text></Link> |
            
            <Link to="/register">
            
            {loginstate.isLogin ? (<Text fontSize="16px" fontWeight="600" mr={3} ml={3}>Hi, {info.firstName}</Text>):(<Text fontSize="16px" fontWeight="600" mr={3} ml={3}>Login</Text>)}
            </Link>
            </Flex>
         </Box>
        
        
        </Flex>
        </Box>

        {/* megamenu */}
        <MegaMenu />
        </div>
    )


}

export default Navbar;