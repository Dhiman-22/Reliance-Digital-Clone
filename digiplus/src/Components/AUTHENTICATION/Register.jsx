import Navbar from "../NAVBAR/Navbar";
import Footer from "../FOOTER/Footer";
import { Card, CardHeader, CardBody,Text, FormControl,Input,Stack ,Flex,FormHelperText,useToast} from '@chakra-ui/react'
import { Link,Navigate } from "react-router-dom";
import React from "react";
import { RegisterContext } from "../../Context/RegisterContext";





function Register(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const {registerstate,openRegister}=React.useContext(RegisterContext);
    const[email,setEmail]=React.useState("");
    const[password,setPassword]=React.useState("");
    const[Fname,setFName]=React.useState("");
    const[mobile,setMobile]=React.useState("");
    const[lastname,setLastName]=React.useState("");
    const toast = useToast();

    const userDetails={
        firstName:Fname,
        lastName:lastname,
        mobile:mobile,
        email:email,
        password:password
    }
    let arr=JSON.parse(localStorage.getItem("userDetails")) || [];
    async function handleSubmit(e){
        e.preventDefault();
        try {
            let response = await fetch(`https://reqres.in/api/register`,{
                method:"POST",
                body:JSON.stringify({
                    email:email,
                    password:password
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            let data = await response.json();
            console.log(data);
            openRegister(data.token)
            
            arr.push(userDetails);
            localStorage.setItem("userDetails",JSON.stringify(arr));
            localStorage.setItem("name",JSON.stringify(userDetails));
            toast({
                title: 'REGISTER SUCCESSFUL',
                description: "User has been successfully registered!",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
           
            
        } catch (error) {
            console.log(error);
            toast({
                title: 'Invalid credentials',
                description: "Please fill in all the data!",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }

     }
     console.log(registerstate);
    


    return(
        <>
        <Navbar/>
          
        
        <Card  margin="auto" w="35%" h="auto" mt="200px" mb="50px" >
            <CardHeader  bg="rgb(247,247,247)">
                <Text textAlign="initial" color="black" fontSize="18px" fontWeight="700">Register New Account</Text>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit}>
                        <Stack direction="column" gap="10px">
                    
                        <FormControl isRequired>
                        <Input type="text" value={Fname} onChange={(e)=>setFName(e.target.value)} placeholder="First Name*"/>
                        </FormControl>

                        <FormControl isRequired>
                        <Input type="text" value={lastname} onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name*"/>
                        </FormControl>

                        <FormControl isRequired>
                        <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address*"/>
                        <FormHelperText fontSize={12} textAlign="initial" color="grey" fontWeight="500">Your email address will be used to send invoice,order updates,etc.</FormHelperText>
                        </FormControl>

                        <FormControl isRequired>
                        <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password*"/>
                        <Text fontSize={12} textAlign="initial" color="grey" fontWeight="500">Your Password will be secured and used for further login purposes.</Text>
                        </FormControl>

                        <FormControl isRequired>
                        <Input type="number" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Mobile Number*" />
                        <Text fontSize={12} textAlign="initial" color="grey" fontWeight="500">Your Mobile Number will be used to avail benefits such as Jio mart cashback and ROne loyalty points and to get quick notifications.</Text>
                        </FormControl>

                        <Input bg="red" color="white" type="submit" value="Proceed"/>
                        <Flex>
                            <Text fontSize={14} textAlign="initial" color="grey" fontWeight="500"> Already Registered?</Text>
                            <Link to="/login"><Text fontSize={14} textAlign="initial" color="red" fontWeight="500"> LOGIN</Text></Link>
                        </Flex>
                        
                        </Stack>

                    
                </form>
            </CardBody>
            
        </Card>
       
        <Footer/>
        </>
    )

}

export default Register;