import {Image,Box,Grid,Text,Card,Flex,  CardBody, Stack, Badge} from "@chakra-ui/react"



const Tvarray=[
    {
        "id": 31,
        "title": "MI 100 cm 40 inches 5A Series Full HD Smart Android LED TV",
        "description": "with 24W Dolby Audio & Metal Bezel-Less Frame (Black) (2022 Model)",
        "price": 21999,
        "discountPercentage": 14.91,
        "rating": 4.1,
        "stock": 40,
        "brand": "MI",
        "category": "television",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
        "https://m.media-amazon.com/images/I/81rwiwQ1itL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/71VWX9X9sVL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/61P4td8CKcL._SX522_.jpg"
        ]
        },
        {
        "id": 32,
        "title": "MI LED TV 5A Series HD Ready Smart Android ",
        "description": "80 cm (32 inches) 5A Series HD Ready Smart Android",
        "price": 13999,
        "discountPercentage": 14.91,
        "rating": 4.1,
        "stock": 180,
        "brand": "MI",
        "category": "television",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
        "https://www.reliancedigital.in/medias/Tcl-32S5205-Television-493285675-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjM4OHxpbWFnZS9qcGVnfGltYWdlcy9oNDMvaGUzLzk4NzcwNTI0ODk3NTguanBnfDM1ZmZlN2JjMzFiMWViNDM4ZDk5N2ZiZGIzMTJkMDE4YjljNDg2YmM4YTRmOTIzMWE0MWM0OGU5NDhlMWViZjQ",
        "https://m.media-amazon.com/images/I/61-LihKQnOL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/71u24tMwkfL._SX522_.jpg"
        ]
        },
        {
        "id": 33,
        "title": "MI 5A Series Full HD Smart Android LED TV (Black) ",
        "description": "80 cm (32 inches) 5A Series HD Ready Smart Android",
        "price": 24999,
        "discountPercentage": 10.91,
        "rating": 4.59,
        "stock": 180,
        "brand": "MI",
        "category": "television",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
        "https://m.media-amazon.com/images/I/811UAL1+6DL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/61-LihKQnOL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/71u24tMwkfL._SX522_.jpg"
        ]
        },  
        {
        "id": 34,
        "title": "Samsung HD 5A Series Ready Smart Android",
        "description": "180 cm 5A Series HD Ready Smart Android ",
        "price": 31990,
        "discountPercentage": 10.91,
        "rating": 4.59,
        "stock": 180,
        "brand": "Samsung",
        "category": "television",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
        "https://www.reliancedigital.in/medias/Kodak-32HDX7XPRO-Televisions-492166141-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjIzNHxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaDgwLzk4OTQ2ODczNDI2MjIuanBnfDAxNzdkZTU5YWY0ZjdkMWFhN2NhM2E3ZDY4MjkwZjIzMGNkYjIzYzNkMDkyMTZlNWU3N2ViZTA2YTE4YzcxMzc",
        "https://m.media-amazon.com/images/I/71qR78V2o4L._SX522_.jpg",
        "https://m.media-amazon.com/images/I/71u24tMwkfL._SX522_.jpg"
        ]
        }
]


function TrendingTv(){
    
    return(
        <>
         <Box w="85%" h="500px" margin="auto" mt={10} mb={10} >
            <Text mb={7} textAlign="initial" fontSize={25} >TRENDING IN TELEVISIONS</Text>
            <Flex>
                <Box w="75%">
                <Grid templateColumns="Repeat(4,1fr)" gap={5}>
                {Tvarray.map((el)=>(
                    <Card key={el.id} w="200px" h="auto">
                        <CardBody>
                            <Image w="100%" src={el.images[0]} alt=""/>
                            <Stack mt={6} spacing={3}>
                                <Text mb={5}  fontSize="15px" color="#003380" fontWeight="500" lineHeight="1.4em">{el.title}</Text>
                            </Stack>
                            <Box>
                            <Text textAlign="initial">Offer price: ₹{el.price}</Text>
                            <Flex>
                            <Text>MRP : </Text>
                            <Text textDecoration="line-through" textAlign="initial"> ₹{Math.floor(el.price-(el.discountPercentage/100)*el.price)}</Text>
                            </Flex>
                            <Text textAlign="initial">You Save: {el.discountPercentage}%</Text>
                            <Box w="10px" margin="initial">
                            <Badge borderRadius="10px" colorScheme='red'>Offer Available</Badge>
                            </Box>
                            </Box>

                        </CardBody>
                    </Card>
                ))}
                

            </Grid>

                </Box>
                <Box w="25%" p={5}>
                <Box>
                    <Image mt={16}  w="100%" src="https://www.reliancedigital.in/medias/Trending-in-TVs-Producst-Carousel-05-15-2022.jpg?context=bWFzdGVyfGltYWdlc3w4MTM1OHxpbWFnZS9qcGVnfGltYWdlcy9oNzUvaDkwLzk5MjgxNjcxMjkxMTguanBnfGZhOTkxYjA5YzE4N2Q5NzIxOThhMjUzNzYxMTljYjdhZDMzODAyMjJlM2MzMDdjZmFjM2Q4ZDY2MTZmNzQzNTI" alt=""/>
                </Box>

                </Box>

            </Flex>
            
            </Box>
        </>
    )

}

export default TrendingTv;