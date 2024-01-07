import { Dispatch,  FC, SetStateAction } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { IDBItemHandler } from '../../lib/db/idbWrapper';
import { Item, ItemType } from '../../lib/Item';
import { formStrings } from '../../lib/constants';

export interface OxyFormProps {
    showCreateForm: boolean;
    itemType: ItemType;
    existingItem?: Item;
    setShowCreateForm: Dispatch<SetStateAction<boolean>>;
    updateData: () => Promise<void>;
}
export const DataInputForm: FC<OxyFormProps> = function ({ showCreateForm,itemType, existingItem, setShowCreateForm, updateData }) {
    return (
        <Modal
            show={showCreateForm}
            onHide={() => {
                setShowCreateForm(false);
            }}
        >
            <Form
                onSubmit={async (e) => {
                    e.preventDefault();
                    
                    // little foobar
                    const formElement = e.target as any;
                    const num = parseInt(formElement.numinput.value);
                    const desc: string = formElement.desc.value;
                    // whether c is checked
                    const item = Item(itemType, undefined, num, desc);
                    IDBItemHandler.add(item);

                    setShowCreateForm(false);
                    await updateData();
                }}
            >
                <Modal.Header>{formStrings[itemType].addButtonText}</Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>{formStrings[itemType].addLabel}</Form.Label>
                        <Form.Control placeholder={formStrings[itemType].addPlaceHolder} type="number" name="numinput" min={0} max={100} value={existingItem?.value} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Description(Optional)" name="desc" />
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCreateForm(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        Confirm
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};
