import { Box, Card, CardBody, CardHeader, FormControl, Heading, Input, Stack } from "@chakra-ui/react";
import AdmNav from "./AdmNav";
import { useState } from "react";



function AddData(){
    const[id,setid]=useState("")
    const[title,setTitle]=useState("")
    const[price,setPrice]=useState("")
    const[rating,setRating]=useState("")
    const[brand,setBrand]=useState("")
    const[images,setImages]=useState("")


    async function handleSubmit(e){
       e.preventDefault();
       const obj={
        id:id,
        title:title,
        price:price,
        rating:rating,
        brand:brand,
        images:images
       }
       try {
        let res = await fetch(`https://digiplus-2dd4.vercel.app/admin`,{
        method:"POST",
        body: JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    });
    console.log('res:', res);

    let data = await res.json();
    console.log('dataCreate:', data)
        
       } catch (error) {
        console.log(error);
        
       }

    }


    return(
        <>
        <AdmNav/>
        <Box w="30%" margin="auto" h="400px"  mt={10}>
            <Heading>ADD DATA</Heading>

            <Card w="100%" margin="auto" h="400px" border="1px solid black" >
                
              <CardBody>

            <form onSubmit={handleSubmit} >

                <Stack>

                <FormControl>
                    <Input type="number" value={id} onChange={(e)=>setid(e.target.value)} placeholder="Add product ID"/>
                </FormControl>

                <FormControl>
                    <Input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Add product Title"/>
                </FormControl>

                <FormControl>
                    <Input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Add product price"/>
                </FormControl>

                <FormControl>
                    <Input type="number" value={rating} onChange={(e)=>setRating(e.target.value)} placeholder="Add product Rating"/>
                </FormControl>

                <FormControl>
                    <Input type="text" value={brand} onChange={(e)=>setBrand(e.target.value)} placeholder="Add product Brand"/>
                </FormControl>

                <FormControl>
                    <Input type="text" value={images} onChange={(e)=>setImages(e.target.value)} placeholder="Add product Image src"/>
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

export default AddData;
