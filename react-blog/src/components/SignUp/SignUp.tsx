import { useState, type SubmitEvent } from "react";
import styles from './SignUp.module.scss';
import { Input } from "../UI/Input";
import { Btn } from "../UI/Button";
import { PageHeader } from "../Layout/PageHeader";


export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    return (
        <>
            <PageHeader title='Sign Up' showBackLink={true} />

            <form className={styles.form} onSubmit={handleSubmit}>
                <Input
                    type='text'
                    label='name'
                    value={name}
                    placeholder='Your name'
                    onChange={(e) => setName(e.target.value)} 
                />
                <Input
                    type='email'
                    label='email'
                    value={email}
                    placeholder='Your email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type='password'
                    label='password'
                    value={password}
                    placeholder='Your password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    type='password'
                    label='confirm password'
                    value={confirmPassword}
                    placeholder='Confirm password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <Btn type='submit'>Sign Up</Btn>

                <p className={styles.signUpText}>
                    Already have an account? <a href="#" className={styles.signInLink}>Sign In</a>
                </p>
            </form>
        </>
    )
}