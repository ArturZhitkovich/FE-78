import { useState, type SubmitEvent } from "react";
import styles from './SignIn.module.scss';
import { Input } from "../UI/Input";
import { Btn } from "../UI/Button";
import { PageHeader } from "../Layout/PageHeader";
import { Link } from "react-router";


export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    return(
        <>
            <PageHeader title='Sign In' showBackLink={true} />

            <form className={styles.form} onSubmit={handleSubmit}>
                <Input 
                    type='email' 
                    label='email' 
                    value={email} 
                    placeholder='Your email' 
                    onChange={(e) => {setEmail(e.target.value)}} 
                />
                <Input 
                    type='password' 
                    label='password' 
                    value={password} 
                    placeholder='Your password' 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                
                <a href="#" className={styles.forgotLink}>
                    Forgot password?
                </a>

                <Btn type='submit'>Sign In</Btn>

                <p className={styles.signUpText}>
                    Don't have an account? <Link to={'/sign-up'} className={styles.signUpLink}>Sign Up</Link>
                </p>
            </form>
        </>
    )
}