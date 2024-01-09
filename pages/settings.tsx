import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Container, Form } from 'react-bootstrap';
import {
    localStorageKeys,
    LocalStorageWrapper,
} from '../lib/db/localStorageWrapper';
import { useEffect, useState } from 'react';
const Settings: NextPage = () => {
    const [selectedTemperatureUnitAsCelcius, setSelectedTemperatureUnitAsCelcius] = useState(false);
    // get from localstorage
    useEffect(() => {
        setSelectedTemperatureUnitAsCelcius(
            LocalStorageWrapper.get(localStorageKeys.tempIsCelcius, 'no') ===
                'yes'
        );
    }, []);
    return (
        <>
            <Header title="Log" activeKey="settings" />
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Temperature Display Unit</Form.Label>
                        <br />
                        <Form.Check
                            inline
                            type="radio"
                            name="selectedUnit"
                            id="is-C"
                            checked={selectedTemperatureUnitAsCelcius}
                            label="C"
                            onClick={(e) => {
                                setSelectedTemperatureUnitAsCelcius(true);
                                LocalStorageWrapper.put(
                                    localStorageKeys.tempIsCelcius,
                                    'yes'
                                );
                            }}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            name="selectedUnit"
                            id="is-F"
                            label="F"
                            checked={!selectedTemperatureUnitAsCelcius}
                            onClick={(e) =>{
                                setSelectedTemperatureUnitAsCelcius(false);
                                LocalStorageWrapper.put(
                                    localStorageKeys.tempIsCelcius,
                                    'no'
                                )}
                            }
                        />
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
};

export default Settings;
