import type { Dispatch, FC, SetStateAction } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { IDBItemHandler } from '../../lib/db/idbWrapper';
import { toTempMiddleFormat, Item, ItemType } from '../../lib/Item';

export interface CreateTempFormProps  {
    showCreateTemp: boolean;
    setShowCreateTemp: Dispatch<SetStateAction<boolean>>;
    updateData: ()=>Promise<void>;
}
export const CreateTempForm: FC<CreateTempFormProps> = function CreateTempForm(
    props
) {
    const { showCreateTemp, setShowCreateTemp,updateData } = props;
    return (
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
                    const desc: string = formElement.desc.value;
                    // whether c is checked
                    const unit: boolean =
                        formElement.unit.value === 'on' &&
                        formElement.unit[0].checked;
                    const tempMiddle = toTempMiddleFormat(num, unit);
                    await IDBItemHandler.add(
                        Item(ItemType.TEMP, undefined, tempMiddle, desc)
                    );

                    setShowCreateTemp(false);
                    await updateData();
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
                        <Form.Label>Unit</Form.Label>
                        <br />
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
    );
};
