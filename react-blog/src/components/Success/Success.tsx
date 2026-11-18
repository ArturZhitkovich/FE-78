import { PageHeader } from '../Layout/PageHeader';
import { Btn } from '../UI/Button';
import styles from './Success.module.scss';

export const Success = () => {
  return (
    <>
        <PageHeader title='Success' showBackLink={true} />
        
        <div className={styles.message}>

          <h3 className={styles.textConfirmation}>Email confirmed</h3>

          <p className={styles.textRegistration}>Your registration is now confirmed.</p>

          <Btn type='button'>
            Go to home
          </Btn>

        </div>
    </>
  )
}