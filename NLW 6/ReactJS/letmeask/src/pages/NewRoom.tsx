import IlustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import googleIconImg from '../assets/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';



export function NewRoom() {

    const { user, signInWithGoogle } = useAuth();



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
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder='Nome da sala'
                        />
                        <Button type='submit'/*  onClick={() => console.log(user)} */>Criar sala</Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to='/'>clique aqui</Link>
                    </p>
                </div>

            </main >
        </div >
    );
}