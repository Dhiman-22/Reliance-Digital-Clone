import {Image,Box,Grid,Text} from "@chakra-ui/react";

function Entertainment(){
    return(
        <>
        <Box w="85%" margin="auto" mt={10} mb={10} >
        <Text mb={7} textAlign="initial" fontSize={25} >ENTERTAINMENT FEST</Text>
        <Grid mb={10} templateColumns="Repeat(4,1fr)"  gap={10} >
            <Image src="https://www.reliancedigital.in/medias/43-inch-UHD-TV-Small-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w2MTc5NXxpbWFnZS9qcGVnfGltYWdlcy9oZDcvaGM2Lzk5MjgxNjcyNjAxOTAuanBnfDg4MjdjN2IwZWViMTNlNmM2ODdiOWZjNzU2M2RkZmVlZTMxMmM4ODRlZWQ3MWNhMWIwYWI3NmNhMDcxNjkxY2M" alt=""/>

            <Image src="https://www.reliancedigital.in/medias/Headphones-and-Earphones-Entertainment-Fest-Small-Banner-02-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w0MDQzNHxpbWFnZS9qcGVnfGltYWdlcy9oYTAvaDU0Lzk5MjY3ODEzMzc2MzAuanBnfGI1Y2Q4MDExYTAwOGEzYzhlNWQxOTI0MzU2ZWIyY2YyYWQ5NDE1M2EwYzNmMTNjNjA4MGZiMTU2Y2VlZGNlZDQ" alt=""/>

            <Image src="https://www.reliancedigital.in/medias/Best-Deals-in-TV-Small-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w0ODE2NnxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaDY1Lzk5MjgxNjcxOTQ2NTQuanBnfDhiODBlYTA4YmI1OTA0YjZkMTkzYjA0ZTRmOWQ5MzMxMjcyZDJjODY0YTE3MWE4M2ZlNDIxODRhNzFiODJkYjY" alt=""/>

            <Image src="https://www.reliancedigital.in/medias/Soundbars-Entertainment-Fest-Small-Banner-02-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMTg3NHxpbWFnZS9qcGVnfGltYWdlcy9oMzYvaGQ1Lzk5MjY3ODE0MDMxNjYuanBnfDY5ODQ2ZDU3NDFlMjgxYTY2YTViZmQ1ZTA4Y2U5ZTMwYjVlNjYzNTk3YzJjNzkyMDUwY2VkY2ZlZTViODQ1NjQ" alt=""/>


           </Grid>
        </Box>
        </>
    )

}

export default Entertainment;