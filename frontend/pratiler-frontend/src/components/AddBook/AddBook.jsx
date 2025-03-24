import css from '../../assets/css/AddBook/AddBook.module.css'
import { Header } from '../Global/HeaderGlobal'
import { ListBooks } from './ListBooks'
import { useAuthStore } from '../Global/authStore'


export function AddBook(){

    const { user } = useAuthStore();

    return(
        <>
            <Header user={user}/>
            <div className={css.section}>
                <ListBooks />
            </div>
        </>
    )
}