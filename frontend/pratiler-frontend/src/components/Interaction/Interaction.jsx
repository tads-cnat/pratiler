/* eslint-disable no-unused-vars */
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { internalAxios } from '../Global/axiosInstances';
import axios from 'axios';
import { getCookie } from '../Global/authStore';

/* CSS */
import css from '../../assets/css/Interaction/Interaction.module.css';

/* Componentes */
import { Header } from '../Global/HeaderGlobal';
import { Book } from './Book';

export function Interaction(){
    const { id } = useParams(); // Pega o ID da URL
    const navigate = useNavigate();
    const [interaction, setInteraction] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [user, setUser] = useState({});

    const fetchUser = async () => {
        const user = await axios.get('http://localhost:8000/api/user', {
            headers: {
                'X-CSRFToken': getCookie('csrftoken'),
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        setUser(user.data);
    }

    useEffect(() =>{
        fetchUser();
    }, []);
    
    useEffect(() => {
        const fetchInteraction = async () => {
            try {
                const response = await internalAxios.get(`interacoes/leitor/${id}`);
                setInteraction(response.data);
            } catch (error) {
                console.error("Erro ao buscar interação:", error);
                setError("Interação não encontrada");
            } finally {
                setLoading(false);
            }
        };
        fetchInteraction();
    }, [id]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;
    
    return(
        <>
            <Header user={user}/>
            <div className={css.sectionBox}>
                <Book 
                    key={interaction.id}
                    img={interaction.livro.capa}
                    title={interaction.livro.titulo}
                    autor={interaction.livro.autor.nome}
                    sinopse={interaction.livro.sinopse}
                    status={interaction.status}
                />
            </div>
        </>
    )
}