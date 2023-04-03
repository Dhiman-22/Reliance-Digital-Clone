import {Box,Select, Stack,Text, FormControl,Input, Button, Card,CardHeader,Heading, CardBody,Checkbox,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter, Image, Flex,RadioGroup,Radio, Divider, FormLabel,useDisclosure,useToast,PinInput,PinInputField,HStack} from "@chakra-ui/react";
import { useState } from "react";
import Confetti from 'react-confetti';
import {Navigate} from "react-router-dom";
//import useWindowSize from 'react-use/lib/useWindowSize'


function Payment(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast()
    
    const [isLoading,setIsLoading]=useState(false);
    const [submit,setSubmit]=useState(false);
    const [iscancel,setIsCancel]=useState(false);

    function handleSubmit(){
        setSubmit(true)
        setTimeout(()=>{setSubmit(false)},5000)
        toast({
            title: 'Congratulations!',
            description: "Your order has been placed successfully",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })

          
    }

    function handleCancel(){
        onClose();
        setIsCancel(true);

    }

    const proceedPayment=()=>{
        toast({
            title: 'OTP Sent Successfully!',
            description: "OTP has been sent to your registered phone number.",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
        
        setIsLoading(true)
        setTimeout(()=>{setIsLoading(false)},3000)

        setTimeout(()=>{onOpen()},3000)
        
        
    }
    return(
        <>
            <Box w="100%" textAlign="initial" h="auto">
                <Text>PAY SECURELY</Text>
                <Box w="90%" margin="auto" border="0.5px solid grey" mt="10px" h="auto" >
                   <Text textStyle="Filter" textAlign="center">Available Offers</Text>
                   <Box w="70%" margin="auto" h="70px" >
                    <Flex>
                    <Image src="https://www.reliancedigital.in/medias/Citi-Credit-Cards-Payment-Card-Logo.jpg?context=bWFzdGVyfHJvb3R8NDQzM3xpbWFnZS9qcGVnfGhlZC9oNjkvOTkyNjk4NDY2MzA3MC5qcGd8YTM2M2I0Yzg0NGUzYWI3ZmVhZWUwNGRiODgzYTU5MTQ4NDcxMjBhY2RmMDk1NTJkZWJiMTIyM2U2ZmUyMTdkYw" alt="" />
                    <Text mt={3} textStyle="SideBarText">7.5% Instant Discount (Max 5000) with Citibank Credit/Debit Cards & EMI transactions T&C</Text>
                    </Flex>
                   </Box>
                   
                </Box>
                <Box w="100%" mt="30px">
                        <Flex>
                            <Box w="20%"h="auto"  p={5}>
                            <RadioGroup defaultValue='1'>
                                <Stack>
                               <Radio p={3} value='1'>Credit Card</Radio>
                               <Divider/>
                               <Radio p={3} value='2'>Debit Card</Radio>
                               <Divider/>
                               <Radio p={3} value='3'>Credit Card EMI</Radio>
                               <Divider/>
                               <Radio p={3} value='4'>Debit Card EMI</Radio>
                               <Divider/>
                               <Radio p={3} value='5'>NetBanking</Radio>
                               <Divider/>
                               <Radio p={3} value='6'>UPI</Radio>
                               <Divider/>
                               <Radio p={3} value='7'>Wallet</Radio>
                               <Divider/>
                               <Divider orientation="vertical"/>
                               </Stack>
                            </RadioGroup>

                            </Box>
                            <Box w="80%" h="auto"  p={7}>
                            <Card w="60%" mt="6">
                                <CardHeader bg="#e7e9e9" h="auto" pb={3}>
                                <Heading  fontSize="17px" fontWeight="500">PAYMENT OPTION</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Stack spacing={5}>

                                    <FormControl>
                                        <Input type="number"  placeholder="Enter Card Number"/>
                                    </FormControl>

                                    <FormControl>
                                        <Input type="text"  placeholder="Enter Name On Card"/>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Expiry Date</FormLabel>
                                        <Flex justifyContent="space-between">
                                            <Stack direction="row">

                                        <Select placeholder='MM'>
                                        <option value='Jan'>Jan</option>
                                                <option value='Feb'>Feb</option>
                                                <option value='Mar'>Mar</option>
                                                <option value='Apr'>Apr</option>
                                                <option value='May'>May</option>
                                                <option value='Jun'>Jun</option>
                                                <option value='Jul'>Jul</option>
                                                <option value='Aug'>Aug</option>
                                                <option value='Sept'>Sept</option>
                                                <option value='Oct'>Oct</option>
                                                <option value='Nov'>Nov</option>
                                                <option value='Dec'>Dec</option>
                                        </Select>
                                        <Select placeholder='YYYY'>
                                        
                                                 <option value='20'>2020</option>
                                                <option value='21'>2021</option>
                                                <option value='22'>2022</option>
                                                <option value='23'>2023</option>
                                                <option value='24'>2024</option>
                                        </Select>
                                        <Input type="number" placeholder="CVV"/>

                                            </Stack>

                                        </Flex>
                                    </FormControl>
                                    </Stack>
                                
                                </CardBody>
                                </Card>
                                <Text textStyle="BrandPromiseSmall" mt="6px">*Clicking on “Pay” will take you to a secure payment gateway where you can make your payment.Your order will not be completed without this action</Text>
                                <Checkbox defaultChecked mt={4}>I Agree to the Terms and Conditions.</Checkbox>
                                <br/>
                                <Button textStyle="AddToCart" isLoading={isLoading} onClick={proceedPayment} _hover={{bg:"white",color:"black",border:"1px solid red"}}>PROCEED TO PAYMENT</Button>
                                
                                <Modal isOpen={isOpen} onClose={onClose} >
                                 <ModalOverlay />
                                    <ModalContent>
                                    <ModalHeader>Enter the Provided One Time Password</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody pb={6}>
                                    <HStack>
                                    <PinInput mask>
                                        <PinInputField />
                                        <PinInputField />
                                        <PinInputField />
                                        <PinInputField />
                                    </PinInput>
                                    </HStack>
        
                                    </ModalBody>
                                    <ModalFooter>
                                    <Button textStyle="AddToCart" onClick={handleSubmit} _hover={{bg:"white",color:"black",border:"1px solid red"}}>Submit</Button>
                                  <Button onClick={handleCancel}>Cancel</Button>
                                </ModalFooter>
                                </ModalContent>
                               </Modal>

                               {submit ? (<Confetti width="3000" height="1000px"/>):(<></>)}
                               {iscancel ? <Navigate to="/" />:<></>}

                            </Box>

                        </Flex>
                    </Box>
            </Box>
        </>
    )

}

export default Payment;