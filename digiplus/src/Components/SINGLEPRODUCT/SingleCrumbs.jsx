import { Box,Breadcrumb,BreadcrumbItem,Skeleton} from "@chakra-ui/react";
import { Link,useParams } from "react-router-dom";



function SingleCrumbs({isLoading}){
    const {id}=useParams();
    return(
        <Skeleton isLoaded={isLoading}>
        <Box mt="160px" w="95%" h="30px">
        <Breadcrumb>
            <BreadcrumbItem>
            <Link to="/" >Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
            <Link to="/mobiles" >Mobiles</Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
            <Link to={`/mobiles/${id}`}>{id}</Link>
            </BreadcrumbItem>
        </Breadcrumb>

        </Box>
        </Skeleton>
    )

}

export default SingleCrumbs;