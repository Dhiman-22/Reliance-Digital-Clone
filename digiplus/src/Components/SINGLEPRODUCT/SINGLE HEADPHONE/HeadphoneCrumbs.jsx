import { Box,Breadcrumb,BreadcrumbItem,Skeleton} from "@chakra-ui/react";
import { Link,useParams } from "react-router-dom";



function HeadphoneCrumbs({isLoading}){
    const {id}=useParams();
    return(
        <Skeleton isLoaded={isLoading}>
        <Box mt="160px" w="95%" h="30px">
        <Breadcrumb>
            <BreadcrumbItem>
            <Link to="/" >Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
            <Link to="/headphone" >Headphones</Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
            <Link to={`/headphone/${id}`}>{id}</Link>
            </BreadcrumbItem>
        </Breadcrumb>

        </Box>
        </Skeleton>
    )

}

export default HeadphoneCrumbs;