import type{ FC } from 'react';
import { useState } from 'react';
import { Card, Accordion, Button, Modal } from 'react-bootstrap';
import { dateTimeFormatOptions } from '../lib/constants';
import { IDBItemHandler } from '../lib/idbWrapper';
import { Item, ItemValueFormat, itemTypeMap } from '../lib/Item';
import { ItemTypeToString } from '../lib/Item';

export const ItemView: FC<Item & { eventKey: string }> = function (props) {
    const { date, eventKey, itemType, desc } = props;
    const [showDelete, setShowDelete] = useState(false);
    const setHideDeleteModal = () => setShowDelete(false);
    const setShowDeleteModal = () => setShowDelete(true);
    const confirmDeleteModal = async () => {
        try {
            await IDBItemHandler.delete(date);
            setShowDelete(false);
        } catch (e) {
            console.log('Failed to delete', e);
        }
    };
    return (
        <>
            <Card bg="dark">
                <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
                    {`${date.toLocaleString(
                        'en-us',
                        dateTimeFormatOptions
                    )} ${ItemTypeToString(itemType)} - ${ItemValueFormat(
                        props
                    )}`}
                </Accordion.Toggle>

                <Accordion.Collapse eventKey={eventKey}>
                    <Card.Body>
                        <Card.Text>
                            {ItemTypeToString(itemType)}
                            {` - `}
                            {ItemValueFormat(props)}
                            <br />
                            {desc}
                        </Card.Text>
                        <Button variant="primary" onClick={setShowDeleteModal}>
                            Delete
                        </Button>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Modal show={showDelete} onHide={setHideDeleteModal}>
                <Modal.Header>Delete?</Modal.Header>
                <Modal.Body>Confirm Delete?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={setHideDeleteModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={confirmDeleteModal}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
