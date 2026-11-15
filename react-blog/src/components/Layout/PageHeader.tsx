import { Link } from "react-router";
import { Title } from "../Title/Title";
import styles from "./Layout.module.scss";

type PageHeaderProps = {
    title?: string;
    showBackLink?: boolean;
}

export const PageHeader = ({ title, showBackLink }: PageHeaderProps) => {

    return (
            <div className={styles.titleBlock}>

                {showBackLink && (
                    <Link 
                    to="/"  
                    className={styles.backLink}
                    >
                    Back to home
                    </Link>
                )}
                    <Title title={title} />

            </div>
    );
};