import { PageHeader } from '../Layout/PageHeader';
import { Btn } from '../UI/Button';
import styles from './ConfirmationRegistration.module.scss';

type ConfirmationProps = {
    email?: string;
}

export const ConfirmationRegistration = ({ email }: ConfirmationProps) => {
    return (
        <>
            <PageHeader title='Registration confirmation' showBackLink={true} />
            <div className={styles.message}>
                
                <h3 className={styles.textActivation}>
                    Please activate your account with the activation
                    link in the email <span className={styles.mail}>{email}</span>
                </h3>

                <p className={styles.textCheckEmail}>Please, check your email</p>
                
                <Btn type='button'>
                    Go to home
                </Btn>
                
            </div>
        </>
    )
}