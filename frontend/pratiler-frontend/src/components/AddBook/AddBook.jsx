import css from '../../assets/css/AddBook/AddBook.module.css';
import { Header } from '../Global/HeaderGlobal';
import { ListBooks } from './ListBooks';

export function AddBook() {
  return (
    <>
      <Header />
      <div className={css.section}>
        <ListBooks />
      </div>
    </>
  );
}
