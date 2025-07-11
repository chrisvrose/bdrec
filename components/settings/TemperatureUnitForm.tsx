import { useEffect, useState } from 'react';
import { localStorageKeys, LocalStorageWrapper } from '../../lib/db/localStorageWrapper';
import { Form } from 'react-bootstrap';

export function TemperatureUnitControlForm() {
    const [selectedTemperatureUnitAsCelcius, setSelectedTemperatureUnitAsCelcius] = useState(false);
    useEffect(() => {
        setSelectedTemperatureUnitAsCelcius(LocalStorageWrapper.getBoolean(localStorageKeys.tempIsCelcius));
    }, []);
    return (
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
                        LocalStorageWrapper.putBoolean(localStorageKeys.tempIsCelcius, true);
                    }}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="selectedUnit"
                    id="is-F"
                    label="F"
                    checked={!selectedTemperatureUnitAsCelcius}
                    onClick={(e) => {
                        setSelectedTemperatureUnitAsCelcius(false);
                        LocalStorageWrapper.putBoolean(localStorageKeys.tempIsCelcius, false);
                    }}
                />
            </Form.Group>
        </Form>
    );
}
