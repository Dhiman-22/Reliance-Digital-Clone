import { useParams } from "react-router-dom";
import React from "react";
import LaptopCrumbs from "./LaptopCrumbs";
import Styles from "./laptopProduct.module.css";
import { Divider,Flex,Box, Skeleton ,Image,Text, UnorderedList, ListItem,Center, Button,useToast} from "@chakra-ui/react";
import Footer from "../../FOOTER/Footer";
import Navbar from "../../NAVBAR/Navbar";
import { Link } from "react-router-dom";


function LaptopProduct(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const {id} = useParams();
    const toast = useToast()
    
    const[isLoading,setIsLoading]=React.useState(true);
    const[data,setData]=React.useState([]);
    const[cart,setCart]=React.useState({});

    let arr=JSON.parse(localStorage.getItem("CartData")) || [];

    function AddToCart(){
        arr.push(cart);
        localStorage.setItem("CartData",JSON.stringify(arr));
        toast({
            title: 'Added to Cart',
            description: "Item has been successfully added to cart!",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        
    }

    function BuyNow(){
        localStorage.setItem("buyNow",JSON.stringify(data));
    }


    async function fetchSingleProductData(){
        try {
            setIsLoading(false);
            let response = await fetch(`https://digiplus-pu8v.vercel.app/laptop/${id}`)
            let data = await response.json();
            console.log(data);
            setData([data]);
            setCart(data);
            setIsLoading(true);
            
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }


    React.useEffect(()=>{
        fetchSingleProductData();
    },[])

    console.log(data,"data");

    return(
        <div className={Styles.laptopSingle}>
        <Navbar/>
        <LaptopCrumbs isLoading={isLoading}/>
        <Divider color="blackAlpha.700"/>

        <Skeleton isLoaded={isLoading}>
        <Box w="100%" h="auto" margin="auto" >
        <Flex justifyContent="space-around">
            <Box w="38%" bg="white" h="500px" >
                {data.map((el)=>(
                    <Box w="50%" margin="auto" mt={50} key={el.id}>
                        <Image w="100%" src={el.images} alt=""/>
                    </Box>
                ))}
                
            </Box>
        
            <Box w="60%" h="auto" mb="60px"  bg="white" >
                <Box w="100%" h="auto" p={4} >
                    {data.map((el)=>(
                        <Box key={el.id}>
                            <Text textStyle="SideBarHead">Article No. - {el.id}</Text>
                            <Text textAlign="left" textStyle="MainBarHead">{el.title}</Text>
                            </Box>
                    ))}

                </Box>
                <Divider color="black"/>
                <Box w="100%" h="auto" p={4}>
                    <Flex>
                        <Box w="50%" h="auto" >
                            <Text textStyle="SinglePageHead">Gain More With Offers(7)</Text>
                            <UnorderedList>
                                <ListItem mt={2} textStyle="SideBarText">
                                    7.5% Instant Discount(Max 5000) with Citibank Credit/Debit Cards & EMI transactions. Read T&C
                                </ListItem>
                                <ListItem mt={2} textStyle="SideBarText">
                                Use coupon code "RDNEW750" and get Rs.750 off on Rs.15000 and Over. Read T&C
                                </ListItem>
                                <ListItem mt={2} textStyle="SideBarText">
                                Use coupon code "RDNEW300" and get Rs.300 off on Rs.7500 and Over. Read T&C
                                </ListItem>
                                <ListItem mt={2} textStyle="SideBarText">
                                    Wall Mount bracket is on chargeable basis.Read T&C.
                                </ListItem>
                            </UnorderedList>

                            <Text mt={3} textStyle="SinglePageHead">Save More with EMI/Cashback(1)</Text>
                            <UnorderedList>
                                <ListItem mt={2} textStyle="SideBarText">
                                 EMls (Credit Cards) from %792.16/month | View all Standard Credit Cards EMI options.
                                </ListItem>
                            </UnorderedList>

                            <Text mt={3} textStyle="SinglePageHead">Warranty</Text>
                            <UnorderedList>
                                <ListItem mt={2} textStyle="SideBarText">
                                 1 year manufacturer Warranty.
                                </ListItem>
                            </UnorderedList>

                            <Text mt={3} textStyle="SinglePageHead">Return Policy</Text>
                            <UnorderedList>
                                <ListItem mt={2} textStyle="SideBarText">
                                Items are eligible for return in 7 days of delivery.
                                </ListItem>
                                <ListItem mt={2} textStyle="SideBarText">
                                All Accessories, products and packaging needs to be returned in original condition.
                                </ListItem>
                            </UnorderedList>
                            <Text mt={3} textStyle="SinglePageHead">Got feedback to share on this page?</Text>
                        </Box>
                        <Center height='auto'>
                        <Divider orientation='vertical' size={3} />
                        </Center>

                        <Box w="50%" h="auto"  p={4}>
                            {data.map((el)=>(
                                <Box key={el.id}>
                                    <Text  textStyle="SinglePagePrice">₹{el.price}</Text>
                                    <Flex >
                                    <Text textStyle="SinglePageHead">MRP :</Text>
                                    <Text textStyle="SinglePageHead" textDecoration="line-through">₹{el.original}</Text>
                                    <Text textStyle="SideBarText" lineHeight="15px">(Inclusive of all taxes)</Text>
                                    </Flex>

                                    <Flex >
                                    <Text textStyle="SideBarHead" color="green.700">You Save :</Text>
                                    <Text textStyle="SideBarHead" color="green.700" >{el.discount}</Text>
                                    </Flex>
                                    
                                    <Text textStyle="SideBarHead">EMI (Credit cards) from ₹792/month</Text>
                                    <Text textStyle="SinglePageHead">FREE SHIPPING!</Text>

                                    <Flex>
                                        <Button w="150px" _hover={{bg:"white",color:"black",border:"1px solid red"}} textStyle="AddToCart" onClick={AddToCart}>ADD TO CART</Button>
                                    <Link to="/checkout">
                                        <Button w="150px" _hover={{bg:"white",color:"black",border:"1px solid #fc6027"}}  textStyle="BuyNow" onClick={BuyNow}>BUY NOW</Button>
                                        </Link>
                                    </Flex>
                                    </Box>
                            ))}

                        </Box>
                    </Flex>

                </Box>

            </Box>
            

        </Flex>
        </Box>
       
        </Skeleton>
        <Footer/>
        </div>
    )

}

export default LaptopProduct;