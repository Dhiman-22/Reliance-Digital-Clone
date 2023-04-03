import {Box,Accordion, AccordionItem,AccordionButton,AccordionPanel,AccordionIcon, Stack,Text, FormControl,Input, Button, Card,CardHeader,Heading, CardBody,Checkbox, OrderedList, ListItem,Flex,Image,CardFooter,Divider,InputGroup,InputRightAddon} from "@chakra-ui/react";
import { useState,useEffect } from "react";


function OrderDetails(){
    
    let addressArr= JSON.parse(localStorage.getItem("userAdd")) || [];
    console.log(addressArr);
    let firstelement=[];
    firstelement.push(addressArr[addressArr.length-1])
    let cartDetails=JSON.parse(localStorage.getItem("CartData")) || [];
    const[cartItems,setCartItems]=useState(cartDetails);


    
    const[coupon,setCoupon]=useState("");
    const[coupStatus,setCoupStatus]=useState(false);
    const[total,setTotal]=useState(0);
    const[isCount,setIsCount]=useState(0);
    
    
    //console.log(cartDetails);

    useEffect(()=>{

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
        
              setCoupStatus(true);
        }
        else{
        
              setCoupStatus(false);
           
        }
    }


    function handleRemove(id){
        let newData = cartDetails.filter((el)=>{
            return el.id!==id
        })
        console.log(newData);
        localStorage.setItem("CartData",JSON.stringify(newData));
        setCartItems(newData)
        
    }

    return(
        <>
         <Box w="100%" textAlign="initial">
                        {/* <Card w="40%" mt="6">
                                <CardHeader bg="#e7e9e9" h="auto" pb={3}>
                                <Heading  fontSize="17px" fontWeight="500">SHIPPING ADDRESS</Heading>
                                </CardHeader>
                                <CardBody>
                               {firstelement && firstelement.map((el)=>(
                                <Box key={el.pincode}>
                                    <Text textStyle="SinglePageHead" mb={3} textTransform="capitalize" >{el.first}  {el.last}</Text>
                                    <Text textStyle="SideBarText" textTransform="capitalize" >{el.address}</Text>
                                    <Text textStyle="SideBarText" textTransform="capitalize" >{el.addressTwo}-{el.pincode},{el.state}</Text>
                                    <Text textStyle="SideBarText" textTransform="capitalize" >Mobile Number: {el.mobile}</Text>
                                </Box>
                               ))}
                           </CardBody>
                                </Card> */}

                           <Box mt="30px">
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
                           </Box>

                           <Card w="50%" h="auto" ml="50%" bg="white" mt={4} p={4}>
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
                                    <Text textStyle="SinglePageHead" color="green">₹{coupStatus ? (Math.floor(total-(30/100)*total)):(total)}</Text>
                                </Flex>
                                </Box>
                                <br/>
                                <Button textStyle="AddToCart" _hover={{bg:"white",color:"black",border:"1px solid red"}}>PROCEED TO PAYMENT</Button>
                                <Divider/>

                            

                        </Card>

                                
                                
                                
         </Box>
        </>
    )

}

export default OrderDetails;