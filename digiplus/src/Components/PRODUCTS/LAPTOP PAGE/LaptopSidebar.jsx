import { Box,Skeleton,Flex, Divider,Text,Stack,RangeSlider,RangeSliderTrack,RangeSliderFilledTrack,RangeSliderThumb, Input,Button,Checkbox} from "@chakra-ui/react";


function LaptopSidebar({isLoading}){
    return(
        <Stack>
        <Skeleton isLoaded={isLoading}>
            {/* 1st Box */}
            <Box w="100%" bg="#fff" h="auto">
                <Text textStyle="Filter" textAlign="initial">FILTERS</Text>
            </Box>
        </Skeleton>
            
            {/* 2nd Box */}
            <Skeleton isLoaded={isLoading}>
                <Box w="100%" bg="#fff" h="auto" mt={1} p={4} >
                <Text textStyle="SideBarHead">Price</Text>
                <RangeSlider defaultValue={[0, 300]} min={0} max={300} step={30}
                onChangeEnd={(val) => console.log(val)}>
                    <RangeSliderTrack bg='black'>
                    <RangeSliderFilledTrack bg='black' />
                    </RangeSliderTrack>
                    <RangeSliderThumb bg="black"boxSize={2} index={0} />
                    <RangeSliderThumb bg="black" boxSize={2} index={1} />
                    </RangeSlider>
                    <Flex>
                        <Input border="1px solid #14276e" placeholder="Min" borderRadius={0.5}/>
                        <Text m={2}>to</Text>
                        <Input  border="1px solid #14276e" placeholder="Max" borderRadius={0.5}/>
                        <Button textStyle="NavHead" borderRadius={0.5} ml={2}>Go</Button>
                    </Flex>
                 </Box>
            </Skeleton>

            {/* 3rd Box */}
            <Skeleton isLoaded={isLoading}>
                <Box  w="100%" bg="#fff" h="auto" mt={1} p={4} >
                    <Text textStyle="SideBarHead"> Availablity </Text>
                    <Checkbox defaultChecked mr="70px">
                        <Text textStyle="SideBarText">Exclude Out Of Stock</Text></Checkbox>

                </Box>
            </Skeleton>

            {/* 4th Box */}
            <Skeleton isLoaded={isLoading}>
                <Box  w="100%" bg="#fff" h="auto" mt={1} p={4} >
                    <Text textStyle="SideBarHead"> Category </Text>
                    <Checkbox defaultChecked mr="200px">
                        <Text textStyle="SideBarText">Laptops</Text></Checkbox>

                </Box>
            </Skeleton>

             {/* 5th Box */}
             <Skeleton isLoaded={isLoading}>
                <Box  w="100%" bg="#fff" h="auto" mt={1} p={4} >
                    <Text textStyle="SideBarHead"> Brand </Text>
                    <Checkbox mr="200px">
                        <Text textStyle="SideBarText">lenovo</Text>
                    </Checkbox>
                    <Checkbox mr="200px">
                        <Text textStyle="SideBarText">HP</Text>
                    </Checkbox>
                    <Checkbox mr="200px">
                        <Text textStyle="SideBarText">Apple</Text>
                    </Checkbox>
                    <Checkbox mr="200px">
                        <Text textStyle="SideBarText">Asus</Text>
                    </Checkbox>
                    <Checkbox mr="200px">
                        <Text textStyle="SideBarText">Microsoft</Text>
                    </Checkbox>
                    <Checkbox mr="200px">
                        <Text textStyle="SideBarText">Dell</Text>
                    </Checkbox>
                    <Checkbox mr="200px">
                        <Text textStyle="SideBarText">MSI</Text>
                    </Checkbox>
                    <Checkbox mr="200px">
                        <Text textStyle="SideBarText">Acer</Text>
                    </Checkbox>
                   

                </Box>
            </Skeleton>




       
        </Stack>
    )

}

export default LaptopSidebar;