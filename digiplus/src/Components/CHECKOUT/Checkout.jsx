import Styles from "./Checkout.module.css";
import {Box,Accordion, AccordionItem,AccordionButton,AccordionPanel,AccordionIcon, Stack,Text, FormControl,Input, Button, Card,CardHeader,Heading, CardBody,Checkbox, OrderedList, ListItem,} from "@chakra-ui/react";
import DeliveryPage from "./DeliveryPage";
import OrderDetails from "./OrderDetails";
import Payment from "./Payment";
import Navbar from "../NAVBAR/Navbar"
import Footer from "../FOOTER/Footer"


function Checkout(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    return(
        <div className={Styles.checkout}>
            <Navbar />
            <Box w="100%" mt="200px" mb="40px" h="auto">
                <Box w="80%" margin="auto">
                    
                    <Accordion allowToggle >
                  <Stack spacing={4}>

  <AccordionItem >
    <h2>
      <AccordionButton bg="#e7e9e9">
        <Box  textStyle="SinglePageHead" color="#5A5A59" as="span" flex='1' textAlign='left'>
          DELIVERY METHOD
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} bg="white">
     <DeliveryPage/>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton bg="#e7e9e9">
        <Box as="span" flex='1' textAlign='left'>
          ORDER DETAILS
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} bg="white">
     <OrderDetails />
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton bg="#e7e9e9">
        <Box as="span" flex='1' textAlign='left'>
          PAY SECURELY
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} bg="white">
      <Payment/>
    </AccordionPanel>
  </AccordionItem>
    </Stack>
</Accordion>

                    
                </Box>
            </Box>
            <Footer/>
        </div>
    )

}

export default Checkout;