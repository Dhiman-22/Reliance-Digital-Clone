import {Image,Box,Grid,Text, Flex} from "@chakra-ui/react";


function BrandPromise(){
    return(
        <>
        <Box w="85%" margin="auto" mt={10} mb={10}>
            <Text fontSize={20} mb={5} fontWeight="700" color="#003380">THE RELIANCE DIGITAL BRAND PROMISE</Text>
        <Grid templateColumns="Repeat(4,1fr)" gap={10}>
            <Box width="300px" p={3} border="0.5px solid grey" borderRadius={5} margin="auto" textAlign="center" bg="rgb(247,247,247)">
                <Box w="40%" margin="auto">
                <Image ml={10} p={1} h="60px"  w="40%" src="https://www.reliancedigital.in/medias/Insta-Delivery-Brand-Promise-Icon.png?context=bWFzdGVyfGltYWdlc3wxNTM3fGltYWdlL3BuZ3xpbWFnZXMvaGI2L2gwNS85NDQ3MTcwMzQyOTQyLnBuZ3w2Yzc1ZmY1ZjYwOWIyNWU0ZTgwMjFlYmRkMTU5ZTgzMGI4ZDNmZTE2NjVjYmRlMmUwMmRiODI2OTExNWM5ZTdk" alt=""/>
                <Text textStyle="BrandPromise"color="#003380">INSTA DELIVERY</Text>
                <Text textStyle="BrandPromiseSmall"  color="#666" >LESS THAN 3Hrs</Text>
                </Box>
            
            </Box>

            <Box width="300px" p={3} border="0.5px solid grey" borderRadius={5} margin="auto" textAlign="center" bg="rgb(247,247,247)">
                <Box w="40%" margin="auto">
                <Image ml={10} p={1} h="50px"  w="40%" src="https://www.reliancedigital.in/medias/Best-Finance-Options-2.png?context=bWFzdGVyfGltYWdlc3wxMjM4fGltYWdlL3BuZ3xpbWFnZXMvaDJmL2gxOS85NDQ3MTcwNDA4NDc4LnBuZ3xlMDBiNjY4YWI5YzMzYjZkZDhlZTMyMDhjYjE2YzI2OTY2NWJhYjk2M2VkNzdjZDg3NTNlMGEyMTA1ZjFlODZh" alt=""/>
                <Text textStyle="BrandPromise" color="#003380">BEST FINANCE OPTIONS</Text>
                <Text textStyle="BrandPromiseSmall"  color="#666" >WIDE RANGE</Text>
                </Box>
            
            </Box>

            <Box width="300px" p={3} border="0.5px solid grey" borderRadius={5} margin="auto" textAlign="center" bg="rgb(247,247,247)">
                <Box w="40%" margin="auto">
                <Image ml={10} p={1} h="50px"  w="40%" src="https://www.reliancedigital.in/medias/service-img.png?context=bWFzdGVyfGltYWdlc3w5MTB8aW1hZ2UvcG5nfGltYWdlcy9oMDYvaGEzLzkwOTA3OTc5OTQwMTQucG5nfGJjZmJhNzM1ODdkYTQ5ODI3YzNiMzQ1ZTdlM2JjNjUwMTBjM2E3YWFjNmUxZjdmMmEyOGRjZDMxOGI4ZWE0MWY" alt=""/>
                <Text textStyle="BrandPromise" color="#003380">SERVICE GUARENTEE</Text>
                <Text textStyle="BrandPromiseSmall"  color="#666" >HASSLE FREE</Text>
                </Box>
            
            </Box>

            <Box width="300px" p={3} border="0.5px solid grey" borderRadius={5} margin="auto" textAlign="center" bg="rgb(247,247,247)">
                <Box w="40%" margin="auto">
                <Image ml={10} p={1} h="50px"  w="40%" src="https://www.reliancedigital.in/medias/unmatched-network-img.png?context=bWFzdGVyfGltYWdlc3w3NDV8aW1hZ2UvcG5nfGltYWdlcy9oODIvaDJhLzkwOTA3OTgwNTk1NTAucG5nfDFmMThjYzdiYTNiOTgxYjA5YzdlZTFiMmQyODI5MGY2NTM4ZTcxOWZkZTA1ZjAzY2Q1ZTk5YjQ1NTMxMWViYzU" alt=""/>
                <Text textStyle="BrandPromise" color="#003380">UNMATCHED NETWORK</Text>
                <Text textStyle="BrandPromiseSmall"  color="#666" >700 CITIES,2000 STORES</Text>
                </Box>
            
            </Box>

            

        </Grid>

        </Box>
        </>
    )
        

}

export default BrandPromise;