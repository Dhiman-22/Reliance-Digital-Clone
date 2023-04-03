import {Image,Box, Tr} from "@chakra-ui/react";
import Carousel from "./Carousal";
import Navbar from "../NAVBAR/Navbar";
import Footer from "../FOOTER/Footer";
import GreatDeals from "./GreatDeals";
import BrandPromise from "./BrandPromise";
import Entertainment from "./Entertainment";
import Explore from "./Explore";
import TrendingTv from "./TrendingTv";
import TrendingPhone from "./TrendingPhone";
import Smartwatch from "./SmartWatch";


function LandingPage(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    

    return(
        <>
        <Navbar />
        
        <Box w="100%" mt="150px">
        <Image mb="50px" w="100%" src="https://www.reliancedigital.in/medias/Year-End-Sale-5000-Instant-Discount-Carousel-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDcwODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hiNS85OTI4MTY1NTg5MDIyLmpwZ3w4NDk3ZDFhZTM1YzUxYTg3MDFiMWZkZjhmMGE0ZWI2ZWZmYjU0MWNmOGJkMTAzZTYwMTdlNjI5MGNjYzZiOTIx" alt=""/>
        
        </Box>
        <Carousel />
        <br/>
        <TrendingTv/>
        <Entertainment/>
        <br/>
        <Smartwatch/>
        <GreatDeals />
        <TrendingPhone/>
        <BrandPromise />
        <Explore/>

        <Footer />
        </>
    )

}

export default LandingPage;