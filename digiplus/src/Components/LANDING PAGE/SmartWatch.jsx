import {Image,Box,Grid,Text,Card,Flex,  CardBody, Stack, Badge} from "@chakra-ui/react"


const watchesArr=[
    {
        "id": 3,
        "title": "Niose Colorfit Caliber Go Smartwatch HD",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 3999,
        "discountPercentage": 66,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
        "https://www.reliancedigital.in/medias/Noise-COLRFIT-CALIBER-GO-Smart-Watch-493178070-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNDg2OHxpbWFnZS9qcGVnfGltYWdlcy9oNDUvaDQ4Lzk4OTYxMTk0NjgwNjIuanBnfDk5YzRiNTNjYzdhNTIyNWEyODg3MzNkODhjYmI1N2Y4NTJmOTk1N2IwZDVlZjg4YjhmMzQ0YmYyNmEwYzNkNGQ"
        ]
        },
        {
        "id": 4,
        "title": "Hammer Pulse Ace Pro Smartwatch with bluetooth Calling",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 4999,
        "discountPercentage": 70,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
        "https://www.reliancedigital.in/medias/Hammer-Pulse-Ace-Pro-Sports-Fitness-Watches-493177732-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNjM4NHxpbWFnZS9qcGVnfGltYWdlcy9oZjcvaDlkLzk5MjMxODkyMTExNjYuanBnfDM1NGNjZjNiZDI5MWExODM3ZmMzN2U5YjAyYzBmMDAxOGE5OWM4ODNmYmYxMjc2ZmExODgwYWE3NjM3MDRhZmI",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
        },
        {
        "id": 5,
        "title": "pTron Plusefit P261 bluetooth calling smartphone",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 5999,
        "discountPercentage": 78,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
        "https://www.reliancedigital.in/medias/pTron-PULSEFIT-P261-Smart-Watch-493177969-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDUzNnxpbWFnZS9qcGVnfGltYWdlcy9oMGEvaGIzLzk4OTQ2NzAyMzc3MjYuanBnfDJjMTc3ODdhNzNiMTU2YWU2MDM4ZTRlYTQwYTljMDk1MWRmMjgwMWFkNzI4MmM5NTU2MzA3NjUzNjhkYmZkYWI",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
        },
        {
        "id": 6,
        "title": "boAt Flash Edition Smartwatch with multiple Tracker",
        "description": "Volcanic Black, 12GB RAM, 256GB Storage",
        "price": 6990,
        "discountPercentage": 71,
        "rating": 4.09,
        "stock": 45,
        "brand": "OnePlus",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
        "https://www.reliancedigital.in/medias/Noise-Colorfit-Beat-Smart-Watches-492574673-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDYzN3xpbWFnZS9qcGVnfGltYWdlcy9oZjgvaGY5Lzk3NzcwOTE1MTAzMDIuanBnfDg2OTE5ODVmODdhM2IzNDRlNTc5MmUzYzdiYWJlZDk3M2M3ZjJlYWI4YjMyZjIzNzZkMGU5MjQxYzgzNWY2MzM",
        "https://m.media-amazon.com/images/I/61uVJh4Pw3L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/51JP+TMk7nL._SX679_.jpg"
        ]
        }
]



function Smartwatch(){
    return(
        <div style={{position:"sticky"}}>
         <Box w="85%" h="500px" margin="auto" mt={10} mb={10} >
            <Text mb={7} textAlign="initial" fontSize={25} >SMART WATCHES STARTING FROM ₹999</Text>
            <Flex>
            <Box w="25%" p={5}>
                <Box>
                    <Image mt={6}  w="100%" src="https://www.reliancedigital.in/medias/Smartwatches-Producst-Carousel-27-10-2022-02.jpg?context=bWFzdGVyfGltYWdlc3wxMDA3NTB8aW1hZ2UvanBlZ3xpbWFnZXMvaGViL2gxYS85OTEzNzc2Nzk5Nzc0LmpwZ3w0YzI5OWYwMDI2YzYzMGJiZmRhZGRhZGQyNWIwNTc1OGVmZDRlZmY2NmYzN2E4ZDdkZjMxMzRkM2QxMGYzNmQy" alt=""/>
                </Box>

                </Box>
                <Box w="75%">
                <Grid templateColumns="Repeat(4,1fr)" gap={1}>
                {watchesArr.map((el)=>(
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
                

            </Flex>
            
            </Box>
        </div>
    )

}

export default Smartwatch;