import { Button } from "@chakra-ui/react";
import {Box,Text,Grid,Image} from "@chakra-ui/react";


function Explore(){
    return(
        <>
        <Box w="100%" margin="auto" bg="rgb(247,247,247)" h="auto" mt={10} p={10} >
        <Text mb={7}  fontWeight="700" color="#333"  fontSize={24} >EXPLORE OUR RANGE OF PRODUCTS</Text>
        <Grid templateColumns="Repeat(5,1fr)" gap={10}>
            <Box w="250px" h="auto">
                <Image w="100%" src="https://www.reliancedigital.in/medias/iphone-pro-11-01.png?context=bWFzdGVyfGltYWdlc3wyOTc3NnxpbWFnZS9wbmd8aW1hZ2VzL2gxNi9oNWUvOTI3NjA1OTkxMDE3NC5wbmd8MzdkYzljODgzMDcyM2ZjMjJmZDI2ZjMwNjhkZmU5YjFmOTJmMGRmOTFiYzc4ZjcyMDRhMjQ5MWMyNjYwOTgxYg" alt="" />
                <Text color="#333" fontSize={20} mt="16px" fontWeight="400">Smartphones</Text>
            </Box>

            <Box w="250px" h="auto">
                <Image w="100%" src="https://www.reliancedigital.in/medias/Washing-Machine-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wzNDU4MXxpbWFnZS9wbmd8aW1hZ2VzL2gzOC9oM2UvOTI1MTA1MDg4MTA1NC5wbmd8ZDAyZGNkMzU1MzE3N2E2OGFlOTliMzUyODZkYzlkNTc0NzFmODllY2JiZDVlNzdhYjg3MTgyMTc4ZGVhODA3ZA" alt="" />
                <Text color="#333" fontSize={20} mt="16px" fontWeight="400">Washing Machines</Text>
            </Box>

            <Box w="250px" h="auto">
                <Image w="100%" src="https://www.reliancedigital.in/medias/Laptop-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyOTAwOXxpbWFnZS9wbmd8aW1hZ2VzL2g0Mi9oNTYvOTI1MTA1MDYxODkxMC5wbmd8N2ZjYTg0ZDAyOTZmMmQ5OTZhZDNiM2M4NDg0ZDgxY2UyNzNjMmJiYzMwZTZiOGQwOWE5N2JlZDI4M2ViMGZjNw" alt="" />
                <Text color="#333" fontSize={20} mt="16px" fontWeight="400">Laptops</Text>
            </Box>

            <Box w="250px" h="auto">
                <Image w="100%" src="https://www.reliancedigital.in/medias/TV-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0OTM4M3xpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oMTEvOTI1MTA1MDU1MzM3NC5wbmd8MThiNmU4NTZiNWI5MTE1ZGVjYjA4ZjIwM2QwZjUyMzFlOGExZTY0YmQ0MTRkYTkyN2M2MDZiYzUzZDY1ZjM4Ng" alt="" />
                <Text color="#333" fontSize={20} mt="16px" fontWeight="400">Televisions</Text>
            </Box>

            <Box w="250px" h="auto">
                <Image w="100%" src="https://www.reliancedigital.in/medias/Watch-180x180-27-02-2020.png?context=bWFzdGVyfGltYWdlc3w2Njk2fGltYWdlL3BuZ3xpbWFnZXMvaGQ1L2g2My85MjUzNTA3NTk2MzE4LnBuZ3w4NmEwODU5NDI5YzVlMzJjNzRlNzNlYmJkMmJmYTZjMTI2OWY0YTUxYWU3YzMzM2E3YTc5YjljZmU4ZGMyNGQ2" alt="" />
                <Text color="#333" fontSize={20} mt="16px" fontWeight="400">Smart Wearables</Text>
            </Box>

        </Grid>
        <Button bg="rgb(0,51,128)" color="white" p={4} borderRadius="15px" mt={6} _hover={{color:"black",bg:"white",border:"1px solid rgb(0,51,128)"}}> View All</Button>
        </Box>
        </>
    )

}

export default Explore;