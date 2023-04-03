import React from "react";
import { Box,Skeleton,Flex, Divider,Text,Stack,Button, Card,Grid, CardBody,Image, Select} from "@chakra-ui/react";
import {ChevronLeftIcon,ChevronRightIcon} from "@chakra-ui/icons";
import Styles from "./Headphone.module.css";
import HeadphoneSidebar from "./HeadphoneSidebar";
import Crumbs from "./Crumbs";
import Navbar from "../../NAVBAR/Navbar";
import Footer from "../../FOOTER/Footer"
import { Link } from "react-router-dom";



function Headphones(){
    const[isLoading,setIsLoading]=React.useState(true);
    const [data,setData]=React.useState([]);
    const[page,setPage]=React.useState(1);
    const[limit,setLimit]=React.useState(20);
    const[order,setOrder]=React.useState("asc");
    // const[info,setInfo]=React.useState([]);

    function handlePageChange(num){
        setPage(page+num);
    
    }
    
    function handleasc(){
        setOrder("asc");
    }

    function handledesc(){
        setOrder("desc");
    }
    
    

   async function getHeadPhonesData(page,limit){
    try {
        setIsLoading(false);
        let response = await fetch(`https://digiplus-pu8v.vercel.app/earphones?_page=${page}&_limit=${limit}`);
        let data = await response.json();
        // console.log(data);
        setData(data);
        // setInfo(data);
        setIsLoading(true);
        
    } catch (error) {
        console.log(error);
        setIsLoading(false);
    }
   }

    React.useEffect(()=>{
        getHeadPhonesData(page,limit);

    },[page,limit])
   
    // console.log(new_price);

    // info.forEach((el)=>{
    //     let price = el.price;
    //     let arr = price.split(",");
    //     let arr2 = arr.join("");
    //     let new_price = Number(arr2);
    //     console.log(new_price);
    // })

    
    
    return(
        <div className={Styles.headback} >
            <Navbar/>
        <Crumbs isLoading={isLoading}/>
        
        <Divider color="blackAlpha.700"/>
       
       {/* mainbox */}
        <Flex justifyContent="space-evenly">
            <Box w="18%" h="auto"  >
           <HeadphoneSidebar isLoading={isLoading}/>
            </Box>

            <Box w="80%" h="auto" >
                <Skeleton isLoaded={isLoading}>
                    {/* 1st Box */}
                    <Box w="100%" bg="#fff" h="90px" p={2}>
                        <Flex justifyContent="space-between">
                            <Box w="30%" >
                                <Text textStyle="MainBarHead">HEADPHONES</Text>
                                <Text textAlign="initial">(Showing {limit} products of 88 products)</Text>
                            </Box>

                            <Box w="45%" >
                                <Flex>
                                    <Text m={4} >Sort By:</Text>
                                    <Button size="xs"  _hover={{color:"black",bg:"white",border:"1px solid rgb(0,51,128)"}} m={4} >Relevance</Button>
                                    <Button onClick={handleasc} size="xs"  _hover={{color:"black",bg:"white",
                                    border:"1px solid rgb(0,51,128)"}} m={4}>Price(Low-High)</Button>
                                    <Button onClick={handledesc} size="xs"  _hover={{color:"black",bg:"white",
                                    border:"1px solid rgb(0,51,128)"}} m={4}>Price(High-Low)</Button>

                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Skeleton>


               {/* 2nd Box */}
                
                    <Grid templateColumns="Repeat(4,1fr)" gap={4}>

                    {data.map((el)=>(
                        <Skeleton  key={el.id} isLoaded={isLoading}>
                            <Link to={`/headphone/${el.id}`}>
                        <Card  bg="#fff" mt={5}  h="500px">
                            <CardBody>
                                <Stack>

                                <Image _hover={{width:"75%"}}  w="70%" margin="auto" src={el.images} alt="" />
                                <Text _hover={{color:"red"}}textAlign="initial">{el.title}</Text>
                                <Text textAlign="initial">({el.rating})</Text>
                                <Flex>
                                    <Text textStyle="price">₹{el.price}</Text>
                                    <Text ml={2} textStyle="striked" textDecoration="line-through">{el.original}</Text>
                                    <Text textStyle="striked" color="green.600">{el.discount}</Text>
                                </Flex>
                                </Stack>

                            </CardBody>
                        </Card>
                            </Link>
                        </Skeleton>
                    ))}
                    </Grid>

               

                {/* 3rd Box */}
                <Skeleton isLoaded={isLoading}>
                <Box w="100%" bg="#fff" h="80px" mb={30} p={2} mt={5}>
                    <Flex justifyContent="space-between">
                        <Box w="30%" h="auto" >
                            <Button disabled={page===1} onClick={()=>handlePageChange(-1)} m={3}><ChevronLeftIcon/>Previous</Button>
                            <Button m={3}>{page}</Button>
                            <Button disabled={page===78} onClick={()=>handlePageChange(1)} m={3}>Next<ChevronRightIcon/></Button>

                        </Box>
                        <Box w="25%" h="auto" >
                            <Flex>
                            <Text mt={4}>Showing</Text>
                            <Select icon="none" w="70px" value={limit} onChange={(e)=>setLimit(e.target.value)} mt={3} mr={2} ml={2}>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </Select>
                            <Text mt={4}>out of 88 items.</Text>
                            </Flex>

                        </Box>
                    </Flex>
                </Box>
                </Skeleton>

            </Box>
            

        </Flex>
        <Footer/>
        </div>

    )

}

export default Headphones;