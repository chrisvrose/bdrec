import type { NextPage } from 'next';
import { Header } from '../components/Header';
import styles from '../styles/Home.module.scss';
import { ItemsView } from '../components/ItemsView';
const Home: NextPage = () => {
    

    return (
        <>
            <Header title="Pain" />
            <div className={styles.container}>
                <ItemsView/>
            </div>
        </>
    );
};

export default Home;
