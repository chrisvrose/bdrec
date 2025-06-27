import { FC, ReactChild, useEffect, useState } from 'react';
import {
    Accordion,
    Button,
    ButtonGroup,
    ButtonToolbar,
    Col,
    Dropdown,
    DropdownButton,
    Modal,
    Row,
} from 'react-bootstrap';
import { pageSizes } from '../lib/constants';
import { IDBItemHandler } from '../lib/db/idbWrapper';
import { ENABLED_ITEMS, Item, ItemType, itemTypeToString } from '../lib/Item';
import { useIDBFetcher } from '../lib/miscSwr';
import { ItemView } from './ItemView';
import { DataInputForm } from './forms/DataInputForm';

export const ItemsView: FC = function () {
    // which page am i in?
    const [pageIndex, setPageIndex] = useState(0);
    const pageOffset = pageIndex * pageSizes;

    // how many pages?
    const [pageCount, setPageCount] = useState(0);
    // fetch the number of pages when starting
    async function refreshCount() {
        const count = await IDBItemHandler.getCount();
        setPageCount(Math.ceil(count / pageSizes));
    }
    useEffect(() => {
        refreshCount().catch((e) => console.error('Error fetching page count', e));
    }, []);

    // data fetching
    const { data, error, mutate } = useIDBFetcher('getVal', true, pageOffset, pageSizes, { refreshInterval: 2000 });
    /** Helper function to refresh the items list from db */
    const updateData = async () => {
        await refreshCount();
        await mutate(undefined, true);
    };

    // delete everything modal state
    const [showClearModal, setShowClearModal] = useState(false);
    // what item type
    const [formItemType, setFormItemType] = useState(ItemType.TEMP);
    // create form modal states
    const [showInputForm, setShowInputForm] = useState(false);
    const [selectedEditItem, setSelectedEditItem] = useState<Item | null>(null);

    const confirmClear = async () => {
        try {
            await IDBItemHandler.clear();
            await updateData();
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
        dataFragment = <div style={{"textAlign":"center"}}>{"Nothing here yet! :)"}</div>;
    } else
        dataFragment = (
            <Accordion>
                {data.map((item) => (
                    <ItemView
                        key={JSON.stringify(item)}
                        item={item}
                        eventKey={JSON.stringify(item)}
                        setSelectedEditItem={setSelectedEditItem}
                        setShowEditModal={setShowInputForm}
                        updateData={updateData}
                    />
                ))}
            </Accordion>
        );

    return (
        <>
            <Row style={{ textAlign: 'center' }} md={8}>
                <Col md={{ span: 6, offset: 3 }}>
                    <ButtonToolbar className="justify-content-between">
                        <ButtonGroup aria-label="Buttons" className="spacer-top-margin">
                            <DropdownButton as={ButtonGroup} title="Add">
                                {ENABLED_ITEMS.map((e, i) => {
                                    return (
                                        <Dropdown.Item
                                            key={e}
                                            eventKey={`${i}`}
                                            onClick={() => {
                                                setFormItemType(e);
                                                setShowInputForm(true);
                                            }}
                                        >
                                            {itemTypeToString(e)}
                                        </Dropdown.Item>
                                    );
                                })}
                            </DropdownButton>
                        </ButtonGroup>
                        <ButtonGroup className="spacer-top-margin">
                            <Button onClick={() => setShowClearModal(true)}>Clear</Button>
                        </ButtonGroup>

                    </ButtonToolbar>
                </Col>
            </Row>
            <Modal show={showClearModal} onHide={() => setShowClearModal(false)}>
                <Modal.Header>Clear?</Modal.Header>
                <Modal.Body>Confirm Clearing all entries?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowClearModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmClear}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            <DataInputForm
                {...{
                    itemType: formItemType,
                    showCreateForm: showInputForm,
                    setShowCreateForm: setShowInputForm,
                    updateData,
                    existingItem: selectedEditItem,
                    setExistingItem: setSelectedEditItem,
                }}
            />
            <br />

            {dataFragment}

            <Row style={{ textAlign: 'center' }} md={8}>
                <Col md={{ span: 6, offset: 3 }}>
                    {pageCount > 0 && (
                        <ButtonGroup className="spacer-top-margin-lot">
                            <Button
                                disabled={pageIndex <= 1}
                                onClick={() => {
                                    if (pageIndex > pageCount) setPageIndex(0);
                                    else if (pageIndex < 1) setPageIndex(0);
                                    else setPageIndex(pageIndex - 1);
                                }}
                            >
                                Prev
                            </Button>
                            <Button disabled>{`${pageIndex + 1}/${pageCount}`}</Button>
                            <Button
                                disabled={pageIndex + 1 >= pageCount}
                                onClick={() => {
                                    // increment only if lesser
                                    pageIndex < pageCount - 1 && setPageIndex(pageIndex + 1);
                                }}
                            >
                                Next
                            </Button>
                        </ButtonGroup>
                    )}
                </Col>
            </Row>
            <div className="spacer-top-margin-lot" />
        </>
    );
};
