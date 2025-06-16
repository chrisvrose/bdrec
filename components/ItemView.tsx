import type { Dispatch, FC, SetStateAction } from 'react';
import { useState } from 'react';
import { Card, Accordion, Button, Modal, ButtonGroup } from 'react-bootstrap';
import { dateTimeFormatOptions } from '../lib/constants';
import { IDBItemHandler } from '../lib/db/idbWrapper';
import { Item, ItemValueFormat, denormalizeItem, itemTypeToString } from '../lib/Item';

export type ItemViewProps = {
    item: Item;
    eventKey: string;
    setSelectedEditItem: Dispatch<SetStateAction<Item | null>>;
    setShowEditModal: Dispatch<SetStateAction<boolean>>;
    updateData: () => Promise<void>;
};

export const ItemView: FC<ItemViewProps> = function (props) {
    const { item, eventKey, updateData, setSelectedEditItem, setShowEditModal } = props;

    const { date, itemType, desc } = item;

    const [showDelete, setShowDelete] = useState(false);
    const setHideDeleteModal = () => setShowDelete(false);
    const setShowDeleteModal = () => setShowDelete(true);
    const confirmDeleteModal = async () => {
        try {
            await IDBItemHandler.delete(date);
            setShowDelete(false);
            await updateData();
        } catch (e) {
            console.log('Failed to delete', e);
        }
    };
    return (
        <>
            <Card bg="dark">
                <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
                    {`${date.toLocaleString('en-us', dateTimeFormatOptions)} ${itemTypeToString(
                        itemType
                    )} - ${ItemValueFormat(item)}`}
                </Accordion.Toggle>

                <Accordion.Collapse eventKey={eventKey}>
                    <Card.Body>
                        <Card.Text>
                            {itemTypeToString(itemType)}
                            {` - `}
                            {ItemValueFormat(item)}
                            <br />
                            {desc}
                        </Card.Text>
                        <ButtonGroup>
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    setSelectedEditItem(denormalizeItem(item));
                                    setShowEditModal(true);
                                }}
                            >
                                Edit
                            </Button>
                            <Button variant="warning" onClick={setShowDeleteModal}>
                                Delete
                            </Button>
                        </ButtonGroup>
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
