import { Header } from "../Header/Header";
import { Box, Container} from "@mui/material";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router";

// type LayoutProps = {
//     children: ReactNode;
// }

export const Layout = () =>{
    return(
        <>
        <Box className={styles.wrapper}>
        <Header />
            <Box component="main" className={styles.main}>
                <Container>
                    <Outlet/>
                </Container>
            </Box>
        </Box>
        </>
            
    )
}