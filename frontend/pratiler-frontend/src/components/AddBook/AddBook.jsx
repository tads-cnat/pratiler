import css from '../../assets/css/AddBook/AddBook.module.css'
import { Header } from '../Global/HeaderGlobal'
import { ListBooks } from './ListBooks'
import axios from 'axios'
import { getCsrf } from '../Global/authStore'
import { useState } from 'react'
import { useEffect } from 'react'


export function AddBook(){

    const [user, setUser] = useState({});

    const fetchUser = async () => {
        const user = await axios.get('http://localhost:8000/api/user', {
            headers: {
                'X-CSRFToken': getCsrf('csrftoken'),
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        setUser(user.data);
    }

    useEffect(() =>{
        fetchUser();
    }, []);

    return(
        <>
            <Header user={user}/>
            <div className={css.section}>
                <ListBooks />
            </div>
        </>
    )
}