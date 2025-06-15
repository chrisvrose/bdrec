import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { IDBItemHandler } from '../../lib/db/idbWrapper';
import { Item, ItemType, normalizeInputItem } from '../../lib/Item';
import { formStrings, getFormConfig } from '../../lib/constants';

export interface OxyFormProps {
    showCreateForm: boolean;
    itemType: ItemType;
    existingItem: Item | null;
    setExistingItem: Dispatch<SetStateAction<Item | null>>;
    setShowCreateForm: Dispatch<SetStateAction<boolean>>;
    updateData: () => Promise<void>;
}
export const DataInputForm: FC<OxyFormProps> = function ({
    showCreateForm,
    itemType,
    existingItem,
    setShowCreateForm,
    setExistingItem,
    updateData,
}) {
    const formRef = useRef<HTMLFormElement>(null);
    useEffect(() => {
        if (!showCreateForm) {
            // if hidden, clear it all?
            setExistingItem(null);
        } else if (existingItem !== null) {
            //1. load all text
            if (formRef.current != null) {
                formRef.current.numinput.value = existingItem.value;
                formRef.current.desc.value = existingItem.desc;
            }
            if (itemType !== existingItem.itemType) {
                console.warn('Detected mismatch, please report', itemType, existingItem);
            }
        }
    }, [showCreateForm]);
    return (
        <Modal
            show={showCreateForm}
            onHide={() => {
                setExistingItem(null);
                setShowCreateForm(false);
            }}
        >
            <Form
                ref={formRef}
                onSubmit={async (e) => {
                    e.preventDefault();

                    // little foobar
                    const formElement = e.target as any;
                    const num = parseFloat(formElement.numinput.value);
                    const desc: string = formElement.desc.value;

                    const item = normalizeInputItem(Item(itemType, existingItem?.date, num, desc));

                    await IDBItemHandler.edit(existingItem?.date, item);

                    setShowCreateForm(false);
                    await updateData();
                }}
            >
                <Modal.Header>{formStrings[itemType].addFormHeadingText}</Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>{formStrings[itemType].addLabel}</Form.Label>
                        <Form.Control
                            placeholder={formStrings[itemType].addPlaceHolder}
                            type="number"
                            name="numinput"
                            min={0}
                            max={getFormConfig(itemType, 'inputValueMax')}
                            step={getFormConfig(itemType, 'inputValueStep')}
                            value={existingItem?.value}
                        />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Description -- E.g. Medicines taken (Optional)"
                            name="desc"
                        />
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setShowCreateForm(false);
                        }}
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
