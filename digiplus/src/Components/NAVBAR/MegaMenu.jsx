import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,Flex,Box,Grid
  } from '@chakra-ui/react'
  import {ChevronDownIcon} from "@chakra-ui/icons";
  import { Link } from 'react-router-dom';
  
  
  
  
  
  function MegaMenu(){
      return(
          <>
          <Box w="100%" bg="#14276e " h="52px" color="white"  pb={2} >
              <Flex justifyContent="space-around">
                  {/* mobiles and tablets */}
                  <Menu >
                      <MenuButton p={4} mb="4px" fontSize="14px" fontWeight="600" _hover={{bg:"rgb(224,19,19)"}}>MOBILES & TABLETS <ChevronDownIcon/></MenuButton>
                          <MenuList p={7} bg="#14276e " >
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <Link to="/mobiles">
                                      <MenuItem  mb={5} textStyle="NavHead">SmartPhones</MenuItem>
                                      </Link>
                                      <MenuItem textStyle="NavHead">HeadPhones & Headsets</MenuItem>
                                      <MenuItem  mb={5}   textStyle="NavHead">All Learning Robots</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <MenuItem textStyle="NavHead">Wearable Technology</MenuItem>
                                      <MenuItem textStyle="NavHead">Tablets & e-Readers</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <MenuItem textStyle="NavText">Top Selling SmartWatches</MenuItem>
                                      <MenuItem textStyle="NavText">Everyday use Tablets below 15000</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <MenuItem  mb={5}   textStyle="NavText">Apple Price Drop</MenuItem>
                                      <MenuItem  mb={5}   textStyle="NavText">Premium Tablets,Above 15001</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <MenuItem  textStyle="NavHead" >Accessories</MenuItem>
                                      <MenuItem  textStyle="NavHead" >Power Banks</MenuItem>
                                  </Grid>
                                  <MenuItem textStyle="NavText">Tablet Accessories</MenuItem>
                                  <MenuItem textStyle="NavText">Mobile Accessories </MenuItem>
                                  <MenuItem textStyle="NavText">Mobile grips & Stands</MenuItem>
                                  <MenuItem textStyle="NavText"> Car Mobile Holders</MenuItem>
                                  <MenuItem textStyle="NavText">Memory Cards </MenuItem>
                                  <MenuItem textStyle="NavText"> cables & Cords</MenuItem>
                                  <MenuItem textStyle="NavText">Charges & Adapters </MenuItem>        
                          </MenuList>
                  </Menu>
                  {/* televisions */}
                  <Menu >
                      <MenuButton p={4} mb="4px" fontSize="14px" fontWeight="600" _hover={{bg:"rgb(224,19,19)"}}>TELEVISIONS<ChevronDownIcon/></MenuButton>
                          <MenuList p={7} bg="#14276e "  >
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem textStyle="NavHead">Televisions</MenuItem>
                                      <MenuItem textStyle="NavHead">Gaming</MenuItem>
                                      <MenuItem textStyle="NavHead">Reconnect Disney | Marvel Audio Collection</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem   textStyle="NavText">Smart TVs</MenuItem>
                                      <MenuItem   textStyle="NavText">Gaming Consoles</MenuItem>
                                      <MenuItem  textStyle="NavHead">TV & Audio Accessories</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  mb={5}  textStyle="NavText">32 Inch TVs</MenuItem>
                                      <MenuItem  mb={5} textStyle="NavText">Gaming Accessories </MenuItem>
                                      <MenuItem  mb={5} textStyle="NavText">virtual Reality Headsets </MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem    textStyle="NavText">43 Inch TVs</MenuItem>
                                      <MenuItem   textStyle="NavText">Gaming Titles</MenuItem>
                                      <MenuItem   textStyle="NavText"></MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem    textStyle="NavText">55 Inch TVs</MenuItem>
                                      <MenuItem   textStyle="NavHead">Projectors</MenuItem>
                                      <MenuItem   textStyle="NavText">Stabilizers & Surge Protectors</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem    textStyle="NavText">Android Tvs</MenuItem>
                                      <MenuItem   textStyle="NavHead">Streaming Devices</MenuItem>
                                      
                                  </Grid>
                                 
                                
                          </MenuList>
                  </Menu>
                  {/* audio */}
                  <Menu >
                      <MenuButton p={4} mb="4px" fontSize="14px" fontWeight="600" _hover={{bg:"rgb(224,19,19)"}}>AUDIO <ChevronDownIcon/></MenuButton>
                          <MenuList p={7} bg="#14276e " >
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <Link to="/headphone"><MenuItem  mb={5}  textStyle="NavHead">HeadPhones & Headsets</MenuItem></Link>
                                      <MenuItem  mb={5}  textStyle="NavHead">BlueTooth & WiFi Speakers</MenuItem>
                                      <MenuItem  mb={5}  textStyle="NavHead">TV Speakers & Sounbars</MenuItem>
                                      <MenuItem  mb={5}  textStyle="NavHead">Musical Instruments</MenuItem>
                                  </Grid>
                  
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <MenuItem   textStyle="NavText">True Wireless</MenuItem>
                                      <MenuItem  textStyle="NavText">Bluetooth Speakers</MenuItem>
                                      <MenuItem   textStyle="NavText">Soundbars</MenuItem>
                                      <MenuItem  textStyle="NavText">Guitars and Ukeleles</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <MenuItem   textStyle="NavText">Bluetooth Neckbands</MenuItem>
                                      <MenuItem  textStyle="NavText">Smart Speakers</MenuItem>
                                      <MenuItem   textStyle="NavText">Home Theatre Systems</MenuItem>
                                      <MenuItem  textStyle="NavText">Microphones</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <MenuItem   textStyle="NavText">Wired earphones</MenuItem>
                                      <MenuItem  textStyle="NavText"></MenuItem>
                                      <MenuItem   textStyle="NavText">Party Speakers</MenuItem>
                                      <MenuItem  textStyle="NavText">Musical Keyboards</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <MenuItem   textStyle="NavText">On Ear Headphones</MenuItem>
                                      <MenuItem  textStyle="NavText"></MenuItem>
                                      <MenuItem   textStyle="NavText">Multimedias</MenuItem>
                                      <MenuItem  textStyle="NavText"></MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <MenuItem   textStyle="NavText">Noise Cancelling Headphones</MenuItem>
                                      <MenuItem  textStyle="NavText"></MenuItem>
                                      <MenuItem   textStyle="NavText"></MenuItem>
                                      <MenuItem  textStyle="NavText"></MenuItem>
                                  </Grid>
                                     
                          </MenuList>
                  </Menu>
                  {/* home appliances */}
                  <Menu >
                      <MenuButton p={4} mb="4px" fontSize="14px" fontWeight="600" _hover={{bg:"rgb(224,19,19)"}}>HOME APPLIANCES<ChevronDownIcon/></MenuButton>
                      <MenuList p={7} bg="#14276e ">
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <MenuItem  mb={5}  textStyle="NavHead">HeadPhones & Headsets</MenuItem>
                                      <MenuItem  mb={5}  textStyle="NavHead">BlueTooth & WiFi Speakers</MenuItem>
                                      <MenuItem  mb={5}  textStyle="NavHead">TV Speakers & Sounbars</MenuItem>
                                      <MenuItem  mb={5}  textStyle="NavHead">Musical Instruments</MenuItem>
                                  </Grid>
                  
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <MenuItem   textStyle="NavText">True Wireless</MenuItem>
                                      <MenuItem  textStyle="NavText">Bluetooth Speakers</MenuItem>
                                      <MenuItem   textStyle="NavText">Soundbars</MenuItem>
                                      <MenuItem  textStyle="NavText">Guitars and Ukeleles</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <MenuItem   textStyle="NavText">Bluetooth Neckbands</MenuItem>
                                      <MenuItem  textStyle="NavText">Smart Speakers</MenuItem>
                                      <MenuItem   textStyle="NavText">Home Theatre Systems</MenuItem>
                                      <MenuItem  textStyle="NavText">Microphones</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <MenuItem   textStyle="NavText">Wired earphones</MenuItem>
                                      <MenuItem  textStyle="NavText"></MenuItem>
                                      <MenuItem   textStyle="NavText">Party Speakers</MenuItem>
                                      <MenuItem  textStyle="NavText">Musical Keyboards</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <MenuItem   textStyle="NavText">On Ear Headphones</MenuItem>
                                      <MenuItem  textStyle="NavText"></MenuItem>
                                      <MenuItem   textStyle="NavText">Multimedias</MenuItem>
                                      <MenuItem  textStyle="NavText"></MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                      <MenuItem   textStyle="NavText">Noise Cancelling Headphones</MenuItem>
                                      <MenuItem  textStyle="NavText"></MenuItem>
                                      <MenuItem   textStyle="NavText"></MenuItem>
                                      <MenuItem  textStyle="NavText"></MenuItem>
                                  </Grid>
                                     
                          </MenuList>
                  </Menu>
                  {/* computers */}
                  <Menu >
                      <MenuButton p={4} mb="4px" fontSize="14px" fontWeight="600" _hover={{bg:"rgb(224,19,19)"}}>COMPUTERS<ChevronDownIcon/></MenuButton>
                          <MenuList p={7} bg="#14276e " >
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <Link to="/laptop"><MenuItem  mb={3}  textStyle="NavHead">Laptops</MenuItem></Link>
                                      <MenuItem  mb={3} textStyle="NavHead">Bluetooth & WiFi Speakers</MenuItem>
                                      <MenuItem  mb={3} textStyle="NavHead">Computer Accessories</MenuItem>
                                  </Grid>
          
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <Link to="/laptop"><MenuItem  textStyle="NavText">Basic Laptops</MenuItem></Link>
                                      <MenuItem textStyle="NavHead">Internet Connectivity Devices</MenuItem>
                                      <MenuItem  textStyle="NavText">Computer networking Cables</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                  <Link to="/laptop"><MenuItem  mb={5}  textStyle="NavText">Student Laptops</MenuItem></Link>
                                      <MenuItem  mb={5} textStyle="NavText">Wifi range extenders</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  textStyle="NavHead">Accessories</MenuItem>
                                      <MenuItem textStyle="NavHead">Power Banks</MenuItem>
                                  </Grid>
                                  <Link to="/laptop"><MenuItem  textStyle="NavText">Thin and Light Laptops</MenuItem></Link>
                                  <MenuItem  textStyle="NavText">Multi-tasking laptops </MenuItem>
                                  <MenuItem  textStyle="NavText">Mobile grips & Stands</MenuItem>
                                  <MenuItem  textStyle="NavText"> Car Mobile Holders</MenuItem>
                                  <MenuItem  textStyle="NavText">Memory Cards </MenuItem>
                                  <MenuItem  textStyle="NavText"> cables & Cords</MenuItem>
                                  <MenuItem  textStyle="NavText">Charges & Adapters </MenuItem>        
                          </MenuList>
                  </Menu>
                  {/* cameras */}
                  <Menu >
                      <MenuButton p={4} mb="4px" fontSize="14px" fontWeight="600" _hover={{bg:"rgb(224,19,19)"}}>CAMERAS<ChevronDownIcon/></MenuButton>
                          <MenuList p={7} bg="#14276e " >
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  mb={5}  textStyle="NavHead">SmartPhones</MenuItem>
                                      <MenuItem  mb={5} textStyle="NavHead">HeadPhones & Headsets</MenuItem>
                                      <MenuItem  mb={5} textStyle="NavHead">All Learning Robots</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  textStyle="NavHead">Wearable Technology</MenuItem>
                                      <MenuItem textStyle="NavHead">Tablets & e-Readers</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  textStyle="NavText">Top Selling SmartWatches</MenuItem>
                                      <MenuItem textStyle="NavText">Everyday use Tablets below 15000</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  mb={5}  textStyle="NavText">Apple Price Drop</MenuItem>
                                      <MenuItem  mb={5} textStyle="NavText">Premium Tablets,Above 15001</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  textStyle="NavHead">Accessories</MenuItem>
                                      <MenuItem textStyle="NavHead">Power Banks</MenuItem>
                                  </Grid>
                                  <MenuItem  textStyle="NavText">Tablet Accessories</MenuItem>
                                  <MenuItem  textStyle="NavText">Mobile Accessories </MenuItem>
                                  <MenuItem  textStyle="NavText">Mobile grips & Stands</MenuItem>
                                  <MenuItem  textStyle="NavText"> Car Mobile Holders</MenuItem>
                                  <MenuItem  textStyle="NavText">Memory Cards </MenuItem>
                                  <MenuItem  textStyle="NavText"> cables & Cords</MenuItem>
                                  <MenuItem  textStyle="NavText">Charges & Adapters </MenuItem>        
                          </MenuList>
                  </Menu>
                  {/* kitchen Appliances */}
                  <Menu >
                      <MenuButton p={4} mb="4px" fontSize="14px" fontWeight="600" _hover={{bg:"rgb(224,19,19)"}}>KITCHEN APPLIANCES<ChevronDownIcon/></MenuButton>
                          <MenuList p={7} bg="#14276e " >
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  mb={5}  textStyle="NavHead">SmartPhones</MenuItem>
                                      <MenuItem  mb={5} textStyle="NavHead">HeadPhones & Headsets</MenuItem>
                                      <MenuItem  mb={5} textStyle="NavHead">All Learning Robots</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  textStyle="NavHead">Wearable Technology</MenuItem>
                                      <MenuItem textStyle="NavHead">Tablets & e-Readers</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  textStyle="NavText">Top Selling SmartWatches</MenuItem>
                                      <MenuItem textStyle="NavText">Everyday use Tablets below 15000</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  mb={5}  textStyle="NavText">Apple Price Drop</MenuItem>
                                      <MenuItem  mb={5} textStyle="NavText">Premium Tablets,Above 15001</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  textStyle="NavHead">Accessories</MenuItem>
                                      <MenuItem textStyle="NavHead">Power Banks</MenuItem>
                                  </Grid>
                                  <MenuItem  textStyle="NavText">Tablet Accessories</MenuItem>
                                  <MenuItem  textStyle="NavText">Mobile Accessories </MenuItem>
                                  <MenuItem  textStyle="NavText">Mobile grips & Stands</MenuItem>
                                  <MenuItem  textStyle="NavText"> Car Mobile Holders</MenuItem>
                                  <MenuItem  textStyle="NavText">Memory Cards </MenuItem>
                                  <MenuItem  textStyle="NavText"> cables & Cords</MenuItem>
                                  <MenuItem  textStyle="NavText">Charges & Adapters </MenuItem>        
                          </MenuList>
                  </Menu>
                  {/* personal care */}
                  <Menu >
                      <MenuButton p={4} mb="4px" fontSize="14px" fontWeight="600" _hover={{bg:"rgb(224,19,19)"}}>PERSONAL CARE<ChevronDownIcon/></MenuButton>
                          <MenuList p={7} bg="#14276e " >
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  mb={5} textStyle="NavHead">SmartPhones</MenuItem>
                                      <MenuItem  mb={5} textStyle="NavHead">HeadPhones & Headsets</MenuItem>
                                      <MenuItem  mb={5} textStyle="NavHead">All Learning Robots</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  textStyle="NavHead">Wearable Technology</MenuItem>
                                      <MenuItem textStyle="NavHead">Tablets & e-Readers</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  textStyle="NavText">Top Selling SmartWatches</MenuItem>
                                      <MenuItem textStyle="NavText">Everyday use Tablets below 15000</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  mb={5}  textStyle="NavText">Apple Price Drop</MenuItem>
                                      <MenuItem  mb={5} textStyle="NavText">Premium Tablets,Above 15001</MenuItem>
                                  </Grid>
                                  <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                      <MenuItem  textStyle="NavHead">Accessories</MenuItem>
                                      <MenuItem textStyle="NavHead">Power Banks</MenuItem>
                                  </Grid>
                                  <MenuItem  textStyle="NavText">Tablet Accessories</MenuItem>
                                  <MenuItem  textStyle="NavText">Mobile Accessories </MenuItem>
                                  <MenuItem  textStyle="NavText">Mobile grips & Stands</MenuItem>
                                  <MenuItem  textStyle="NavText"> Car Mobile Holders</MenuItem>
                                  <MenuItem  textStyle="NavText">Memory Cards </MenuItem>
                                  <MenuItem  textStyle="NavText"> cables & Cords</MenuItem>
                                  <MenuItem  textStyle="NavText">Charges & Adapters </MenuItem>        
                          </MenuList>
                  </Menu>
                  {/* accessories */}
                  
  
              </Flex>
          </Box>
          
          </>
      )
  
  }
  
  export default MegaMenu;