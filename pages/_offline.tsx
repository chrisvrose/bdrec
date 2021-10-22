import type { NextPage } from 'next';
import { Container, Jumbotron } from 'react-bootstrap';
import { Header } from '../components/Header';

const OfflinePage: NextPage = () => {
    return (
        <>
            <Header title="Log" activeKey={undefined} />
            <Container>
                <Jumbotron>You are offline! Press back or load this page up online!</Jumbotron>
            </Container>
        </>
    );
};

export default OfflinePage;
