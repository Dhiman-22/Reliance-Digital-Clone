import Navbar from "../NAVBAR/Navbar";
import Footer from "../FOOTER/Footer";
import { Card, CardHeader, CardBody,Text, FormControl,Input,Stack ,useToast, Button,Box, Heading} from '@chakra-ui/react'
import React from "react";
import { LoginContext } from "../../Context/LoginContext";
import { Link } from "react-router-dom";

function AdminLogin(){
    const[email,setEmail]=React.useState("");
    const[password,setPassword]=React.useState("");

    function handleSubmit(e){
       e.preventDefault();
    }

    return(
        <>
        <Navbar/>
        <Box mt="200px">
           <Heading color="red" mb={6}>WELCOME TO ADMIN SIDE</Heading>
        <Card  margin="auto" w="35%" h="auto"  mb="50px">
            <CardHeader  bg="rgb(247,247,247)">
                <Text textAlign="initial" color="black" fontSize="18px" fontWeight="700">SIGN IN</Text>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <Stack>

                        <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email here*"/>
                        <Text fontSize={12} textAlign="initial" color="grey" fontWeight="500">Your email address will be used to send invoice,order updates,etc.</Text>
                        <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password here*"/> 
                        <Text fontSize={12} textAlign="initial" color="grey" fontWeight="500">Your Password will be secured and used for further login purposes.</Text>
                        
                        <Link to="/admpage">
                        <Input bg="red" color="white" type="submit" value="Proceed"/>
                        </Link>
                        
                        
                        </Stack>

                    </FormControl>
                </form>
            </CardBody>
            
        </Card>
        </Box>
        <Footer/>
        </>
    )

}

export default AdminLogin;