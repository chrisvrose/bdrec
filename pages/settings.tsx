import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Container, Form } from 'react-bootstrap';
import {
    localStorageKeys,
    LocalStorageWrapper,
} from '../lib/localStorageWrapper';
import { useEffect, useState } from 'react';
const Settings: NextPage = () => {
    const [selectedC, setSelectedC] = useState(false);
    // get from localstorage
    useEffect(() => {
        setSelectedC(
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
                            checked={selectedC}
                            label="C"
                            onClick={(e) => {
                                setSelectedC(true);
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
                            checked={!selectedC}
                            onClick={(e) =>{
                                setSelectedC(false);
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
