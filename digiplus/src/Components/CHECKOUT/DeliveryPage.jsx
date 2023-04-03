import {Box,Accordion, AccordionItem,AccordionButton,AccordionPanel,AccordionIcon, Stack,Text, FormControl,Input, Button, Card,CardHeader,Heading, CardBody,Checkbox, OrderedList, ListItem,} from "@chakra-ui/react";
import { useState } from "react";
//import {Navigate} from "react-router-dom";


function DeliveryPage(){
    const[pincode,setPincode]=useState("");
    const[fname,setFName]=useState("");
    const[lname,setLName]=useState("");
    const[address,setAddress]=useState("");
    const[addtwo,setAddtwo]=useState("");
    const[state,setState]=useState("");
    const[mobile,setMobile]=useState("");
    
    let addressArr= JSON.parse(localStorage.getItem("userAdd")) || [];
    

    function btnclicked(e){
       
        e.preventDefault();
        const userAddress={
            pincode:pincode,
            first:fname,
            last:lname,
            address:address,
            addressTwo:addtwo,
            state:state,
            mobile:mobile
        }
       
        addressArr.push(userAddress);
        localStorage.setItem("userAdd",JSON.stringify(addressArr));
       
        
        
    }

    return(
        <>
                            <Box w="100%" textAlign="initial">
                                <Text>DELIVERY METHOD</Text>
                                <Text textStyle="NavButton" p={6}>SHIPPING ADDRESS</Text>
                                <Box p={4}>
                                <form>
                                    <Stack spacing={4}>
                                    <FormControl isRequired>
                                     <Input w="40%" value={pincode} onChange={(e)=>setPincode(e.target.value)} placeholder="PinCode*"/>
                                    </FormControl>

                                    <FormControl isRequired>
                                     <Input w="40%" value={fname} onChange={(e)=>setFName(e.target.value)}  mr={6}  placeholder="First Name*"/>
                                     <Input w="40%" value={lname} onChange={(e)=>setLName(e.target.value)} placeholder="Last Name*"/>
                                    </FormControl>

                                    <FormControl isRequired>
                                     <Input w="82%" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter Flat/House No/ Floor/Building Name*"/>
                                    </FormControl>

                                    <FormControl isRequired>
                                     <Input w="82%" value={addtwo} onChange={(e)=>setAddtwo(e.target.value)}  placeholder="Enter Colony/ Street*"/>
                                    </FormControl>

                                    <FormControl isRequired>
                                     <Input w="82%" placeholder="Enter Landmark"/>
                                    </FormControl>

                                    <FormControl isRequired>
                                     <Input w="40%" mr={6}  placeholder="Enter City*"/>
                                     <Input w="40%" value={state} onChange={(e)=>setState(e.target.value)} placeholder="Enter State*"/>
                                    </FormControl>

                                    <FormControl isRequired>
                                     <Input w="40%" mr={6} value={mobile} onChange={(e)=>setMobile(e.target.value)}  placeholder="Enter Mobile Number*"/>
                                     <Input w="40%" placeholder="Enter Landline Number"/>
                                    </FormControl>
                                    
                                    
                                    </Stack>
                                    </form>

                                <Card w="80%" mt="6">
                                <CardHeader bg="#e7e9e9" h="auto" pb={3}>
                                <Heading  fontSize="17px" fontWeight="500">Select Deliver Method</Heading>
                                </CardHeader>
                                <CardBody>
                                <Checkbox mr={6} >INSTA DELIVERY</Checkbox>
                                <Checkbox defaultChecked>STANDARD DELIVERY</Checkbox>
                                <Text textStyle="SideBarText" >*Either your PIN code or some items in your Order are not eligible for INSTA Delivery.</Text>
                                 <Text textStyle="SideBarText">*Delivery assurance is subject to our delivery locations staying open as per govt regulations</Text>
                                 <Text textStyle="SideBarHead">Please Note</Text>
                                 <OrderedList>
                                    <ListItem textStyle="SideBarText">OTP is required for delivery completion.</ListItem>
                                    <ListItem textStyle="SideBarText">For Additional information,please refer T&C.</ListItem>
                                 </OrderedList>
                                </CardBody>
                                </Card>
                                <Button w="20%" textStyle="AddToCart" onClick={btnclicked}  _hover={{bg:"white",color:"black",border:"1px solid red"}} >DELIVER HERE</Button>
                                <Button w="20%" textStyle="AddToCart" _hover={{bg:"white",color:"black",border:"1px solid red"}} >NEW SHIPPING ADDRESS</Button>
                                
                                </Box>
                               </Box>
                               
        </>
    )

}

export default DeliveryPage;