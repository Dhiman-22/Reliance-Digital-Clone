import {Image,Box,Grid,Text,Card,Flex,  CardBody, Stack, Badge} from "@chakra-ui/react"



const MobilesArr=[
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 24999,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
        "https://www.reliancedigital.in/medias/Motorola-G62-Mobile-Phone-493177198-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oY2YvaDI0Lzk4NzMyNjUwOTg3ODIuanBnfDVjNDlmZTJmZmZmOGE4MGQwZDkzMDg4OTYxNWYxOThmYTkwYjE5MWMwMjllOTI2YTM1MGU4ZGZlMjQ5MDE0MmE"
        ]
        },
        {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 18999,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
        "https://www.reliancedigital.in/medias/Tecno-SPARK-9-Mobile-Phone-493177163-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMzgzMnxpbWFnZS9qcGVnfGltYWdlcy9oMzEvaDY2Lzk4NjMzMDk3MjE2MzAuanBnfDk4NTQzYjJhMWFlMWViMTE2MzAyMWUxZTE5YWRjZmM4OGVlZjA0YWM2NzIxNzZkODkxYWYyZDQwMmEwNGY3OGI",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
        },
        {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 30999,
        "discountPercentage": 8.89,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
        "https://www.reliancedigital.in/medias/realme-C31-Smartphone-492849898-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjk5N3xpbWFnZS9qcGVnfGltYWdlcy9oMWYvaGFjLzk5MDc5OTgwNjQ2NzAuanBnfDhiODllNTI4OTQyYjg3NGM3MmVmZDgyNGRhNjIyYjNjMWVjZWFlZDBlZWNmNTAzYTc2MTM2YjVjZDRiYzExMGE",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
        },
        {
        "id": 6,
        "title": "OnePlus 10 Pro 5G",
        "description": "Volcanic Black, 12GB RAM, 256GB Storage",
        "price": 66999,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 45,
        "brand": "OnePlus",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
        "https://m.media-amazon.com/images/I/41hbeJ-SaUL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/61uVJh4Pw3L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/51JP+TMk7nL._SX679_.jpg"
        ]
        }
]


function TrendingPhone(){
    return(
        <>
         <Box w="85%" h="500px" margin="auto" mt={10} mb={10} >
            <Text mb={7} textAlign="initial" fontSize={25} >LATEST SMARTPHONES</Text>
            <Flex>
                <Box w="75%">
                <Grid templateColumns="Repeat(4,1fr)" gap={1}>
                {MobilesArr.map((el)=>(
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
                            <Badge borderRadius="10px" colorScheme='green'>Offer Available</Badge>
                            </Box>
                            </Box>

                        </CardBody>
                    </Card>
                ))}
                

            </Grid>

                </Box>
                <Box w="25%" p={5}>
                <Box>
                    <Image mt={6}  w="100%" src="https://www.reliancedigital.in/medias/iPhone-14-Producst-Carousel-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMzgxMHxpbWFnZS9qcGVnfGltYWdlcy9oYzcvaGQxLzk5MTM3NzcxMjc0NTQuanBnfDA0NzFkZmIwYjVlMWZjZjUxZGY5MjA3NmVlMTdiNTY0ZjhmODU1NjkxY2Y2NDRjNjUxOTQ2MTc5Nzg5MjQxZjk" alt=""/>
                </Box>

                </Box>

            </Flex>
            
            </Box>
        </>
    )

}

export default TrendingPhone;