import { Box,Flex ,Image,Text,Input,InputGroup,InputRightElement, Heading} from "@chakra-ui/react";
import {Link} from "react-router-dom"
import React from "react";
import { LoginContext } from "../../Context/LoginContext";
import {SearchIcon} from "@chakra-ui/icons";

import logo from "./logo.png"



function AdmNav(){
    return(
        <div >
        
        <Box bg='rgb(224,19,19)' w='100%' h='80px' pl={6} pr={6} pt={1}  color='white'>
        <Flex justifyContent="space-between">
         <Box >
         <Link to="/" ><Image w="100px" src={logo} alt=""></Image></Link>
         </Box>
         <Box mt={6}>
            <Heading color="#14276e">ADMIN SIDE</Heading>
            
         </Box>
        
        
        
        </Flex>
        </Box>

        
        </div>
    )

}

export default AdmNav;