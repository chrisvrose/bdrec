import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { PlotChart } from '../components/PlotChart';

const PlotPage: NextPage = function () {
    return (
        <>
            <Header title="Stat Charts" activeKey="plot" />
            <PlotChart />
        </>
    );
};

export default PlotPage;
