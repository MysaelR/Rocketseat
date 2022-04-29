import googleIconImg from '../assets/google-icon.svg';
import IlustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { getDatabase } from "firebase/database"
import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';


export function Home() {

    const { user, signInWithGoogle } = useAuth();

    let navigate = useNavigate();


    async function handleCreateRoom() {

        if (!user) {
            await signInWithGoogle()
        }
        navigate('rooms/new')


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

                <div className='main-content'>
                    <img src={logoImg} alt="logo Letmeask" />
                    <button onClick={handleCreateRoom} className='create-room'>
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