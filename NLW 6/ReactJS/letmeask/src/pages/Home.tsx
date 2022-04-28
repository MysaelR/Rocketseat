import googleIconImg from '../assets/google-icon.svg';
import IlustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { getDatabase } from "firebase/database"
import { testContext } from '../App';
import { useContext } from 'react';

import '../styles/auth.scss';

export function Home() {

    let navigate = useNavigate();
    const { value, setValue } = useContext(testContext);

    async function handleCreateRoom() {

        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider).then(result => {
            console.log(result);


        })



        /* console.log(result); */
    }


    return (
        <div id='page-auth'>
            <aside>
                <img src={IlustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <h1>{value}</h1>
                <div className='main-content'>
                    <img src={logoImg} alt="logo Letmeask" />
                    <button onClick={() => navigate('rooms/new')} className='create-room'>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>Ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder='Digite o código da sala'
                        />
                        <Button type='submit'>Entrar na sala</Button>

                    </form>
                    <button onClick={() => handleCreateRoom()}>Test</button>
                </div>

            </main>
        </div>
    );
}