import type { ReactNode } from "react"
import { Header } from "../Header/Header";
import { Box, Container, Link} from "@mui/material";
import { Title } from "../Title/Title";
import styles from "./Layout.module.scss";

type LayoutProps = {
    children: ReactNode;
    showBackLink?: boolean;
    title: string;
}

export const Layout = ({children, showBackLink, title} : LayoutProps) =>{
    return(
        <>
        <Box className={styles.wrapper}>
        <Header />
            <Box component="main" className={styles.main}>
                <Container>
                    <div className={styles.titleBlock}>

                        {showBackLink && (
                            <Link 
                            href="/" 
                            underline="none" 
                            color="inherit" 
                            className={styles.backLink}
                            >
                            Back to home
                            </Link>
                        )}

                        <Title title={title} />

                    </div>

                    {children}
                </Container>
            </Box>
        </Box>
        </>
            
    )
}