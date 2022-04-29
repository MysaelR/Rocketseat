import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../services/firebase";


export const AuthContext = createContext({} as AuthContextType);

type User = {
    id: string;
    name: string;
    avatar: string;
}

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}
type AuthContextProviderProps = {
    children: ReactNode;
}


const [user, setUser] = useState<User>();

useEffect(() => {
    const unsubscrible = auth.onAuthStateChanged(user => {  //isso é um event listening, caso ele detecte que havia um usuário logado, ele vai retornar esse usuário
        if (user) { //verifica se o usuário tem informações dentro dele
            if (user) {
                const { displayName, photoURL, uid } = user;

                if (!displayName || !photoURL) {
                    throw new Error('Missing information from Google Account.');
                }
                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
        }
    })

    return () => {
        unsubscrible();
    }
}, [])


async function signInWithGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    // const result = await signInWithPopup(auth, provider).then(result => {
    //   if (result.user) {
    //     const { displayName, photoURL, uid } = result.user

    //     if (!displayName || !photoURL) {
    //       throw new Error('Missing information from Google Account.');
    //     }
    //     setUser({
    //       id: uid,
    //       name: displayName,
    //       avatar: photoURL
    //     })
    //   }
    // })
    const result = await signInWithPopup(auth, provider);

    console.log(result);

    if (result.user) {
        const { displayName, photoURL, uid } = result.user;

        if (!displayName || !photoURL) {
            throw new Error('Missing information from Google Account.');
        }
        setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
        })
    }
}

export function AuthContextProvider(props: AuthContextProviderProps) {
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
}