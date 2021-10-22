import type { NextPage } from 'next';
import { Container } from 'react-bootstrap';
import { Header } from '../components/Header';
import { PlotChart } from '../components/PlotChart';

const PlotPage: NextPage = function () {
    return (
        <>
            <Header title="Stat Charts" activeKey="plot" />
            <Container>
                <PlotChart />
            </Container>
        </>
    );
};

export default PlotPage;
