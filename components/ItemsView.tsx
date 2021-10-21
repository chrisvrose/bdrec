import type { FC, ReactChild } from 'react';
import { useState } from 'react';
import {
    Accordion,
    Button,
    ButtonGroup,
    Col,
    Container,
    Dropdown,
    DropdownButton,
    Form,
    InputGroup,
    Modal,
    Row,
} from 'react-bootstrap';
import { pageSizes } from '../lib/constants';
import { IDBItemHandler } from '../lib/idbWrapper';
import { Item, ItemType, itemTypeMap, toTempMiddleFormat } from '../lib/Item';
import { useIDBFetcher } from '../lib/miscSwr';
import { ItemView } from './ItemView';
import Link from 'next/link';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

export const ItemsView: FC = function () {
    const { data, error, mutate } = useIDBFetcher(
        'getVal',
        true,
        undefined,
        pageSizes,
        { refreshInterval: 2000 }
    );
    const updateData = () => mutate(undefined, true);

    const [showClearModal, setShowClearModal] = useState(false);

    const [showCreateTemp, setShowCreateTemp] = useState(false);

    const confirmClear = async () => {
        try {
            await IDBItemHandler.clear();
            updateData();
            setShowClearModal(false);
        } catch (e) {
            console.log('Failed to clear', e);
        }
    };

    let dataFragment: ReactChild;
    if (error) {
        dataFragment = <div>Error {error.toString()}</div>;
    } else if (!data) {
        dataFragment = <div>Loading</div>;
    } else if ((data.length ?? 0) === 0) {
        dataFragment = <div>No data (Add an entry)</div>;
    } else
        dataFragment = (
            <Accordion>
                {data.map((e) => (
                    <ItemView
                        key={JSON.stringify(e)}
                        {...e}
                        eventKey={JSON.stringify(e)}
                    />
                ))}
            </Accordion>
        );

    return (
        <>
            <Row style={{ textAlign: 'center' }} md={8}>
                <Col md={{ span: 6, offset: 3 }}>
                    <ButtonGroup
                        aria-label="Buttons"
                        className="full-width spacer-top-margin"
                    >
                        {/* <Button onClick={()=>{}}>Add</Button> */}
                        {/* <Button
                            onClick={() => {
                                IDBItemHandler.add(Item(0));
                                updateData();
                            }}
                        >
                            Add
                        </Button> */}
                        <DropdownButton as={ButtonGroup} title="Add">
                            {/* <Dropdown.Item eventKey="1">Temperature</Dropdown.Item> */}
                            <Dropdown.Item
                                eventKey="1"
                                onClick={() => {
                                    setShowCreateTemp(true);
                                }}
                            >
                                {itemTypeMap[ItemType.TEMP]}
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey="2"
                                onClick={() => {
                                    IDBItemHandler.add(
                                        Item(ItemType.OXY, undefined, 98, 'no')
                                    );
                                }}
                            >
                                {itemTypeMap[ItemType.OXY]}
                            </Dropdown.Item>
                        </DropdownButton>
                        {/* <br /> */}
                        <Button onClick={() => updateData()}>Refresh </Button>
                        <Button onClick={() => setShowClearModal(true)}>
                            Clear
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <Modal
                show={showClearModal}
                onHide={() => setShowClearModal(false)}
            >
                <Modal.Header>Clear?</Modal.Header>
                <Modal.Body>Confirm Clearing all entries?</Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowClearModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={confirmClear}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showCreateTemp}
                onHide={() => {
                    setShowCreateTemp(false);
                }}
            >
                <Form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        // little foobar
                        const formElement = e.target as any;
                        const num = Number(formElement.temp.value);
                        const desc:string = formElement.desc.value;
                        // whether c is checked
                        const unit:boolean = formElement.unit.value==='on' && formElement.unit[0].checked;
                        const tempMiddle = toTempMiddleFormat(num,unit);
                        console.log('created', num, tempMiddle,desc, unit,);
                        IDBItemHandler.add(
                            Item(ItemType.TEMP, undefined,tempMiddle, desc)
                        );

                        setShowCreateTemp(false);
                    }}
                >
                    <Modal.Header>Add temp</Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Temperature</Form.Label>
                            <Form.Control
                                placeholder="Temperature"
                                type="number"
                                name="temp"
                                min={0}
                                max={200}
                                step={0.01}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Unit</Form.Label><br />
                            <Form.Check inline type="radio" name="unit" label="C" />
                            <Form.Check inline type="radio" name="unit" label="F" />
                            
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Description(Optional)"
                                name="desc"
                            />
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={() => setShowCreateTemp(false)}
                        >
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            <br />

            {dataFragment}
        </>
    );
};
