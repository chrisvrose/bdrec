import type { NextPage } from 'next';
import { Header } from '../components/Header';
import styles from '../styles/Home.module.scss';
import { ItemsView } from '../components/ItemsView';
import { Nav } from 'react-bootstrap';
import Link from 'next/link';
const Home: NextPage = () => {
    return (
        <>
            <Header title="Pain" activeKey="home"/>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link as={Link} passHref href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  eventKey="link-1">
                        Option 2
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <div className={styles.container}>
                <ItemsView />
                {/* HI there */}
            </div>
        </>
    );
};

export default Home;
