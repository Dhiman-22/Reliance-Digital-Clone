import Styles from "./Cart.module.css";
import {Box,Card,Flex,Text,VStack,Image, Button, CardFooter, InputGroup, Input, InputRightAddon, Divider,useToast} from "@chakra-ui/react";
import React from "react";
import Navbar from "../NAVBAR/Navbar";
import Footer from "../FOOTER/Footer";
import { Link } from "react-router-dom";



function Cart(){
    
    let cartDetails=JSON.parse(localStorage.getItem("CartData")) || [];
    const toast = useToast()
    const[coupon,setCoupon]=React.useState("");
    const[coupStatus,setCoupStatus]=React.useState(false);
    const[total,setTotal]=React.useState(0);
    const[isCount,setIsCount]=React.useState(0);
    const[cartItems,setCartItems]=React.useState(cartDetails);
    
    //console.log(cartDetails);

    React.useEffect(()=>{

        let count=0;
        let total_price=0;

            cartDetails.forEach((el)=>{
                count++
                let price = el.price;
                let arr = price.split(",");
                total_price=total_price+(Number(arr.join("")));
                
            })

            setIsCount(count);
            localStorage.setItem("itemCount",count);
            setTotal(total_price);
    })

   
    console.log(isCount,total);
    
    function handleRemove(id){
        let newData = cartDetails.filter((el)=>{
            return el.id!==id
        })
        console.log(newData);
        localStorage.setItem("CartData",JSON.stringify(newData));
        setCartItems(newData)
        
    }

    
    

    function handleCoupon(){
        if(coupon==="DIGI123"){
            toast({
                title: 'Coupon Successfully Applied',
                description: "Flat 30% discount applied!",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
              setCoupStatus(true);
        }
        else{
            toast({
                title: 'Coupon Code Does Not Exist',
                description: "Oops! Please try again.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
              setCoupStatus(false);
           
        }
    }

   
    return(
        <div className={Styles.cart}>
            <Navbar />
            <Box display={isCount===0 ? "none":"block"} w="100%" h="auto" mt="160px" mb="100px">
                <Box w="80%" margin="auto" >
                <Flex justifyContent="space-around">
                    <Box w="65%" h="auto" mt={6}>
                        <VStack spacing={4}>

                        <Card w="100%" h="50px" bg="white" p={4} >
                            <Flex>
                            <Text fontSize="20px" textStyle="SinglePageHead">My Cart</Text>
                            <Text ml={3} lineHeight="15px" textStyle="SideBarText">({isCount})</Text>
                            </Flex>
                        </Card>

                        {/* <Card w="100%" h="200px" bg="white" p={4}>
                        </Card> */}
                        {cartDetails.map((el)=>(
                            <Card w="100%" h="auto" bg="white" p={4} key={el.id}>
                                <Flex justifyContent="space-between">
                                    <Box w="20%">
                                        <Image w="60%" src={el.images}/>
                                    </Box>
                                    <Box w="45%">
                                        <Text textStyle="price">{el.title}</Text>
                                        
                                    </Box>
                                    <Box w="30%">
                                        
                                        <Text textAlign="end" textStyle="SinglePageHead">₹{el.price}</Text>
                                        <Text textAlign="end" color="green.700" textStyle="SideBarText">Free Shipping</Text>
                                        <Text textAlign="end"textStyle="SideBarText">Standard Delivery : 25 Dec-28 Dec</Text>
                                        <Text textAlign="end" textStyle="BrandPromiseSmall">*Delivery assurance is subject to our delivery locations staying open as per govt. regulations</Text>
                                    </Box>
                                </Flex>
                                <CardFooter h="50px" >
                                <Button w="50%" margin="auto" color="blue.500" variant='outline' onClick={()=>{
                                   handleRemove(el.id)}}>Remove</Button>
                                <Button w="50%" margin="auto" color="blue.500" variant='outline'>WishList</Button>
                                </CardFooter>

                            </Card>
                        ))}
                        </VStack>

                    </Box>
                    <Box w="30%" mt={6}>
                        
                        <Link to="/checkout">
                        <Button w="100%" _hover={{bg:"white",color:"black",border:"1px solid red"}} textStyle="Checkout" >CHECKOUT</Button>
                        </Link>

                        <Card w="100%" h="auto" bg="white" mt={4} p={4}>
                            {coupStatus===false ? 
                            (<InputGroup>
                            <Input value={coupon} onChange={(e)=>setCoupon(e.target.value)} placeholder="Add Coupon Code"/>
                            <InputRightAddon onClick={handleCoupon} textStyle="SinglePageHead" color="blue">APPLY</InputRightAddon>
                            </InputGroup>):(
                                 <Box w="100%" mt={2}>
                                 <Flex justifyContent="space-between">
                                     <Text textStyle="SinglePageHead">PROMO : </Text>
                                     <Text textStyle="SinglePageHead">₹ -{(((30/100)*total))}</Text>
                                 </Flex>
                                 </Box>

                            )
                            }
                            <br/>
                            <Divider />
                            <br/>
                           
                            <Text textAlign="initial" textStyle="SinglePageHead">PRICE DETAILS</Text>
                                <Box w="100%" mt={2}>
                                <Flex justifyContent="space-between">
                                    <Text>Price ({isCount})</Text>
                                    <Text textStyle="SinglePageHead">₹{total}</Text>
                                </Flex>
                                </Box>

                                <Box w="100%" mt={2}>
                                <Flex justifyContent="space-between">
                                    <Text>Delivery Charges</Text>
                                    <Text textStyle="SinglePageHead" color="green">FREE</Text>
                                </Flex>
                                </Box>
                                <br/>
                                <Divider/>
                                <Box w="100%" mt={2}>
                                <Flex justifyContent="space-between">
                                    <Text textStyle="SinglePageHead">AMOUNT</Text>
                                    <Text textStyle="SinglePageHead" color="green">{coupStatus ? (total-(30/100)*total):(total)}</Text>
                                </Flex>
                                </Box>
                                <br/>
                                <Divider/>

                            

                        </Card>

                    </Box>
                </Flex>
                </Box>
            </Box>

          <Box display={isCount===0 ? "block":"none"} w="20%" margin="auto" mt="160px" mb="100px">
            <Image src="https://www.reliancedigital.in/build/client/images/emptycart.png" alt="" />
            <Text textStyle="MainBarHead">Your Cart is Empty!</Text>
            <Link to="/">
            <Button mr="60px" _hover={{bg:"white",color:"black",border:"1px solid red"}}  mt="20px"textStyle="Checkout">Continue Shopping</Button>
            </Link>
          </Box>
          <Footer/>
        </div>
    )

}

export default Cart;