import { Box, Card, CardBody, CardHeader, FormControl, Heading, Input, Stack } from "@chakra-ui/react";
import AdmNav from "./AdmNav";
import { useState } from "react";


function Update(){
   
    const[title,setTitle]=useState("")
    const[price,setPrice]=useState("")
    const[id,setId]=useState("");
    


    async function handleSubmit(e){
       e.preventDefault();
       const obj={
        
        title:title,
        price:price,
        
       }
       try {
        let res = await fetch(`https://digiplus-2dd4.vercel.app/admin/${id}`,{
            method:"PATCH",
            body:JSON.stringify(obj),
            headers:{
                'Content-Type':'application/json'
            }
    });
    console.log('res:', res);

    let data = await res.json();
    console.log( data)
        
       } catch (error) {
        console.log(error);
        
       }

    }


    return(
        <>
        <AdmNav/>
        <Box w="30%" margin="auto" h="auto"  mt={10}>
            <Heading>UPDATE DATA</Heading>

            <Card w="100%" margin="auto" h="auto" border="1px solid black" >
                
              <CardBody>

            <form onSubmit={handleSubmit} >

                <Stack>
                <FormControl>
                    <Input type="text" value={id} onChange={(e)=>setId(e.target.value)} placeholder="Add product Title"/>
                </FormControl>
    
            
                <FormControl>
                    <Input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Add product Title"/>
                </FormControl>

                <FormControl>
                    <Input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Add product price"/>
                </FormControl>

            
                <Input type="submit" _hover={{bg:"white",color:"black",border:"1px solid red"}}  mt="20px"textStyle="Checkout" />
                </Stack>


            </form>
              </CardBody>
            </Card>

        </Box>
        </>
    )

}

export default Update;