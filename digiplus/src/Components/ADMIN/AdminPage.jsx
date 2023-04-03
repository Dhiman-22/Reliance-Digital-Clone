import { Box, Button, Card, CardBody, Divider, Flex, Image, Stack, Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer, Heading, } from "@chakra-ui/react";
import AdmNav from "./AdmNav";
import React from "react";
import AddData from "./AddData";
import { Link } from "react-router-dom";
import Update from "./Update";


function AdminPage(){
    let userDetails=JSON.parse(localStorage.getItem("userDetails"))||[];
    //console.log(userDetails);
    const[info,setData]=React.useState([]);
    

    async function fetchAdmData(){
        try {
            let response = await fetch(`https://digiplus-2dd4.vercel.app/admin`);
            let data = await response.json();
            console.log(data);
            setData(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async function handleRemove(id){
        try {
            let response = await fetch(`https://digiplus-2dd4.vercel.app/admin/${id}`,{
                method:"DELETE",
                 headers:{
                'Content-Type':'application/json'
            }
            });
            let data = await response.json();
            console.log(data);
            fetchAdmData()
            
        } catch (error) {
            console.log(error);
            
        }

    }

    React.useEffect(()=>{

        fetchAdmData();

    },[])

    console.log(info);

    return(
        <>
        <AdmNav/>
        <Box  w="70%" margin="auto" h="auto" mt={10}>
            
            <Card w="70%" h="auto" margin="auto" mb="30px" >

            <Image w="100%" borderRadius="10px"  src="https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWRtaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <Stack >

            <CardBody>
        
            <Link to="/add"><Button _hover={{bg:"white",color:"black",border:"1px solid red"}} textStyle="AddToCart">ADD DATA</Button></Link>
            <Link to="/update"><Button _hover={{bg:"white",color:"black",border:"1px solid red"}} textStyle="AddToCart">UPDATE DATA</Button></Link>
            
            </CardBody>
            </Stack>
            
            </Card>
        </Box>

        <Box w="70%" margin="auto" h="auto" mt={10}>
            <Heading textDecoration="underline" mb={10}>USERS DASHBOARD</Heading>
        <TableContainer>
           <Table variant='striped' colorScheme='teal' mb="40px">
         
           <Thead>
             <Tr>
             <Th>FIRST NAME</Th>
             <Th>LAST NAME</Th>
             <Th isNumeric>MOBILE NUMBER</Th>
             <Th> E-MAIL ID</Th>
             <Th>PASSWORD</Th>
             
            </Tr>
            </Thead>
            <Tbody>
                {userDetails.map((el)=>(
                    <Tr key={el.firstName}>
                        <Td textTransform="uppercase">{el.firstName}</Td>
                        <Td textTransform="uppercase">{el.lastName}</Td>
                        <Td>{el.mobile}</Td>
                        <Td>{el.email}</Td>
                        <Td>{el.password}</Td>
                        
                    </Tr>
                ))}
      
           </Tbody>
    
  </Table>
</TableContainer>


        </Box>

        <Box w="70%" margin="auto" h="auto" mt={10}>
        <Heading textDecoration="underline" mb={10}>DATA DASHBOARD</Heading>
        <TableContainer>
           <Table variant='striped' colorScheme='teal' mb="40px">
         
           <Thead>
             <Tr>
             <Th>ID</Th>
             <Th>TITLE</Th>
             <Th isNumeric>PRICE</Th>
             <Th>RATING</Th>
             <Th>BRAND</Th>
             <Th>IMAGE</Th>
             <Th>TRASH</Th>
             
             
            </Tr>
            </Thead>
            <Tbody>
                {info.map((el)=>(
                    <Tr key={el.id}>
                        <Td isNumeric>{el.id}</Td>
                        <Td>{el.title}</Td>
                        <Td>₹ {el.price}</Td>
                        <Td>{el.rating}</Td>
                        <Td>{el.brand}</Td>
                        <Td><Image w="60px" src={el.images} alt=""/></Td>
                        <Td onClick={()=>handleRemove(el.id)}>Remove Data</Td>
                      

                    </Tr>
                ))}
                
      
           </Tbody>
    
          </Table>
         </TableContainer>
            </Box>
        </>
    )

}

export default AdminPage;