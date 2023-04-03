import Navbar from "../NAVBAR/Navbar";
import Footer from "../FOOTER/Footer";
import { Card, CardHeader, CardBody,Text, FormControl,Input,Stack ,useToast, Button, Box} from '@chakra-ui/react'
import React from "react";
import { LoginContext } from "../../Context/LoginContext";
import { Navigate,Link } from "react-router-dom";


 

function Login(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const[email,setEmail]=React.useState("");
    const[password,setPassword]=React.useState("");
    const{loginstate,openLogin}=React.useContext(LoginContext);
    const[navigate,setNavigate]=React.useState(false);
    const toast = useToast()


    async function handleSubmit(e){
        e.preventDefault();
    
        try {
            let response = await fetch(`https://reqres.in/api/login`,{
                method:"POST",
                body:JSON.stringify({
                    email:email,
                    password:password
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            let data = await response.json();
            console.log(data);
            openLogin(data.token);
            toast({
                title: 'LOGGED IN',
                description: "User has been successfully logged in!",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })

              setTimeout(()=>{
                   
                setNavigate(true);
            
              },2000)
    
            
        } catch (error) {
            console.log(error);
            toast({
                title: 'Invalid credentials',
                description: "Please check the data you have entered!",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
    
        }
    
        }

        //console.log(loginstate);

    return(
        <>
        <Navbar/>
        {loginstate.isLogin && navigate && (
            <Navigate to="/"/>
        )}
        <Box w="100%" mt="180px" >

        <Link to="/adm"><Button mb={7}  _hover={{bg:"white",color:"black",border:"1px solid red"}}  mt="20px"textStyle="Checkout">Login As Admin</Button>
                </Link>
               
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
                        
                        <Input bg="red" color="white" type="submit" value="Proceed"/>
                        
                        
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

export default Login;