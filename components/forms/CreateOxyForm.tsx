import type { Dispatch, FC, SetStateAction } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { IDBItemHandler } from '../../lib/db/idbWrapper';
import { Item, ItemType } from '../../lib/Item';

export interface CreateOxyFormProps {
    showCreateOxy: boolean;
    setShowCreateOxy: Dispatch<SetStateAction<boolean>>;
    updateData: () => Promise<void>;
}
export const CreateOxyForm: FC<CreateOxyFormProps> = function CreateTempForm(
    props
) {
    const { showCreateOxy, setShowCreateOxy, updateData } = props;
    return (
        <Modal
            show={showCreateOxy}
            onHide={() => {
                setShowCreateOxy(false);
            }}
        >
            <Form
                onSubmit={async (e) => {
                    e.preventDefault();
                    // little foobar
                    const formElement = e.target as any;
                    const num = parseInt(formElement.oxy.value);
                    const desc: string = formElement.desc.value;
                    // whether c is checked
                    // console.log('created', num, tempMiddle,desc, unit,);
                    IDBItemHandler.add(
                        Item(ItemType.OXY, undefined, num, desc)
                    );

                    setShowCreateOxy(false);
                    await updateData();
                }}
            >
                <Modal.Header>Add Oxygen readings</Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Blood Oxygen Levels</Form.Label>
                        <Form.Control
                            placeholder="SpO2 reading"
                            type="number"
                            name="oxy"
                            min={0}
                            max={100}
                        />
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
                        onClick={() => setShowCreateOxy(false)}
                    >
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
