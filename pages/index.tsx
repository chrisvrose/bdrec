import type { NextPage } from 'next';
import { Header } from '../components/Header';
import styles from '../styles/Home.module.scss';
import { ItemsView } from '../components/ItemsView';
import { Container } from 'react-bootstrap';
const Home: NextPage = () => {
    return (
        <>
            <Header title="Pain" activeKey="home" />
            <Container>
                <ItemsView />
            </Container>
        </>
    );
};

export default Home;
