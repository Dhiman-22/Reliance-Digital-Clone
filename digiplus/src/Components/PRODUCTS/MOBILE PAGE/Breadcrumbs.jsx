import { Box,Breadcrumb,BreadcrumbItem,Skeleton} from "@chakra-ui/react";
import { Link } from "react-router-dom";


function Breadcrumbs({isLoading}){
    return(
        <Skeleton isLoaded={isLoading}>
        <Box mt="160px" w="100%" h="30px">
        <Breadcrumb>
            <BreadcrumbItem>
            <Link to="/" >Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
            <Link to='/mobiles'>Mobiles</Link>
            </BreadcrumbItem>
        </Breadcrumb>

        </Box>
        </Skeleton>
    )

}

export default Breadcrumbs;