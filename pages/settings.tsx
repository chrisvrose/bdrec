import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Container } from 'react-bootstrap';
import { TemperatureUnitControlForm } from '../components/settings/TemperatureUnitForm';
import { ImportExportForm } from '../components/settings/ExportForm';
const Settings: NextPage = () => {
    return (
        <>
            <Header title="Log" activeKey="settings" />
            <Container>
                <TemperatureUnitControlForm />
                <ImportExportForm />
            </Container>
        </>
    );
};

export default Settings;

