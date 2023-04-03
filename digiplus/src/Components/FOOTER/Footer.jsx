import {Box,Grid,ListItem,UnorderedList,Flex ,Image,Text, Divider} from "@chakra-ui/react";
import { FaFacebookF ,FaTwitter,FaYoutube} from "react-icons/fa";



function Footer(){
    return(
        <>
        <Box w="100%" bg="rgb(0,51,128)" h="550px" color="white" textAlign="initial" pl={10} pr={10} pb={7} >
            <Grid templateColumns="repeat(4,1fr)" gap="100px">
            <UnorderedList listStyleType="none">
                <ListItem fontSize={18} fontWeight="700" margin={3}>PRODUCT CATEGORIES</ListItem>
                <ListItem margin={4}>Smartphones</ListItem>
                <ListItem margin={4}>Laptops</ListItem>
                <ListItem margin={4}>DSLR Cameras</ListItem>
                <ListItem margin={4}>Televisions</ListItem>
                <ListItem margin={4}>Air Conditioners</ListItem>
                <ListItem margin={4}>Refridgerator</ListItem>
                <ListItem margin={4}>Kitchen Appliances</ListItem>
                <ListItem margin={4}>Accessories</ListItem>
                <ListItem margin={4}>Personal Care & Grooming</ListItem>
            
            </UnorderedList>

            <UnorderedList listStyleType="none">
                <ListItem fontSize={18} fontWeight="700" margin={3}>SITE INFO</ListItem>
                <ListItem margin={3}>About Reliance Digital</ListItem>
                <ListItem margin={3}>resQ Services</ListItem>
                <ListItem margin={3}>Site Maps</ListItem>
                <ListItem margin={3}>Gift Cards</ListItem>
                <ListItem margin={3}>Corporate Enquires</ListItem>
                <ListItem margin={3}>Contact US</ListItem>
                
            </UnorderedList>

            <UnorderedList listStyleType="none">
                <ListItem fontSize={18} fontWeight="700" margin={3}>RESOURCE CENTRE</ListItem>
                <ListItem margin={3}>Product Reviews</ListItem>
                <ListItem margin={3}>Buying Guides</ListItem>
                <ListItem margin={3}>How Tos</ListItem>
                <ListItem margin={3}>Featured Stories</ListItem>
                <ListItem margin={3}>Events & Happenings</ListItem>
            </UnorderedList>

            <UnorderedList listStyleType="none">
                <ListItem fontSize={18} fontWeight="700" margin={3}>POLICIES</ListItem>
                <ListItem margin={3}>Terms of Use</ListItem>
                <ListItem margin={3}>FAQs</ListItem>
                <ListItem margin={3}>Cancellations and Return policy</ListItem>
                <ListItem margin={3}>Pricing and Payments Policy</ListItem>
                <ListItem margin={3}>Shipping and Delivery Policy</ListItem>
                <ListItem margin={3}>Privacy Policy</ListItem>
                <ListItem margin={3}>E-waste Recycling Policy</ListItem>
                <ListItem margin={3}>EMI and Additional Cashback T&C</ListItem>
                <ListItem margin={3}>EMI and Additional Cashback T&C</ListItem>
                <ListItem margin={3}>Caution Notice</ListItem>
            </UnorderedList>
                
            </Grid>
            <Grid templateColumns="repeat(3,1fr)" gap="90px">
                <UnorderedList listStyleType="none">
                <ListItem fontSize={17} fontWeight="700" mb={2}>FOLLOW US</ListItem>
                <Flex>
                <ListItem fontSize={17} fontWeight="700"ml={6} mr={3} ><FaTwitter/></ListItem>
                <ListItem fontSize={17} fontWeight="700" ml={4} mr={3}><FaFacebookF/></ListItem>
                <ListItem fontSize={17} fontWeight="700" ml={4} mr={3} ><FaYoutube/></ListItem>
                </Flex>

                </UnorderedList>
                <UnorderedList listStyleType="none">
                <ListItem fontSize={16} fontWeight="700" margin={3}>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</ListItem>
                <Flex>

                <Image w="35%" src="https://www.reliancedigital.in/build/client/images/google_play_store.png" alt=""/>
                <Image w="35%" ml={4} src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" alt=""/>
                </Flex>
                </UnorderedList>
            </Grid>
        </Box>
        <Box w="100%" bg="#0a244a" h="auto" color="white" p={4} >
            <Text mb={4}><u>Disclaimer</u></Text>
            <Text mb={5} fontSize={14} w="85%" margin="auto">Product prices, offers and availability are subject to change from time to time. Alll prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.
           </Text>
           <Divider mt={6} mb={4}/>
           <Text >© 2022 Reliance Digital. All Rights Reserved.</Text>

        </Box>
        </>
    )

}

export default Footer;