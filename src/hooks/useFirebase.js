import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setpass] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const logInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {})
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleEmailChnage = e => {
        setEmail(e.target.value)
    }
    const handlePassChnage = e => {
        setpass(e.target.value)
    }

    const handleLogin = e => {
        e.preventDefault();
        if(pass.length < 6){
            setError('Password should be at least 6 characters.');
            return;
        }if(!/(?=.*[A-Z].*[A-Z])/.test(pass)){
            setError('Password should contain 2 upper case');
            return;
        }

        logInUsingEmail(email, pass);
    }
    const logInUsingEmail = (email, pass, e) => {
        signInWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                console.log(result.user)
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleRegister = e => {
        e.preventDefault();
        if(pass.length < 6){
            setError('Password should be at least 6 characters.');
            return;
        }if(!/(?=.*[A-Z].*[A-Z])/.test(pass)){
            setError('Password should contain 2 upper case');
            return;
        }

        registerUsingEmail(email, pass);
    }
    const registerUsingEmail = (email, pass) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                console.log(result.user)
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {displayName: name})
            .then(() => {})
    }
    
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
        }); 
    }, [])

    return {
        logInUsingGoogle,
        handleNameChange,
        handleEmailChnage,
        handlePassChnage,
        handleLogin,
        handleRegister,
        error,
        logOut,
        user
    };
};

export default useFirebase;