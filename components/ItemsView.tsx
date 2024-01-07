import { FC, ReactChild, useEffect, useState } from 'react';
import {
    Accordion,
    Button,
    ButtonGroup,
    Col,
    Dropdown,
    DropdownButton,
    Modal,
    Row,
} from 'react-bootstrap';
import { pageSizes } from '../lib/constants';
import { IDBItemHandler } from '../lib/db/idbWrapper';
import { ItemType, itemTypeToString } from '../lib/Item';
import { useIDBFetcher } from '../lib/miscSwr';
import { ItemView } from './ItemView';
import { CreateTempForm } from './forms/CreateTempForm';
import { CreateOxyForm } from './forms/CreateOxyForm';

export const ItemsView: FC = function () {
    // which page am i in?
    const [pageNum, setPageNum] = useState(0);
    const pageOffset = pageNum * pageSizes;

    // how many pages?
    const [pageCount, setPageCount] = useState(0);
    // fetch the number of pages when starting
    async function refreshCount() {
        const count = await IDBItemHandler.getCount();
        // >>0 forces a convert to integer style math - much faster than rounding altho less readable
        // setPageCount(((count / pageSizes) >> 0) + 1);
        setPageCount(Math.ceil(count / pageSizes));
    }
    useEffect(() => {
        refreshCount().catch((e) =>
            console.error('Error fetching page count', e)
        );
    }, []);

    // data fetching
    const { data, error, mutate } = useIDBFetcher(
        'getVal',
        true,
        pageOffset,
        pageSizes,
        { refreshInterval: 2000 }
    );
    // helper function
    const updateData = async () => {
        await refreshCount();
        await mutate(undefined, true);
    };

    // delete everything modal state
    const [showClearModal, setShowClearModal] = useState(false);
    // create form modal states
    const [showCreateTemp, setShowCreateTemp] = useState(false);
    const [showCreateOxy, setShowCreateOxy] = useState(false);

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
        dataFragment = <div>No data (Add an entry)</div>;
    } else
        dataFragment = (
            <Accordion>
                {data.map((e) => (
                    <ItemView
                        key={JSON.stringify(e)}
                        {...e}
                        eventKey={JSON.stringify(e)}
                        {...{ updateData }}
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
                        <DropdownButton as={ButtonGroup} title="Add">
                            <Dropdown.Item
                                eventKey="1"
                                onClick={() => {
                                    setShowCreateTemp(true);
                                }}
                            >
                                {itemTypeToString(ItemType.TEMP)}
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey="2"
                                onClick={() => {
                                    setShowCreateOxy(true);
                                }}
                            >
                                {itemTypeToString(ItemType.OXY)}
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

            <CreateTempForm
                {...{ showCreateTemp, setShowCreateTemp, updateData }}
            />
            <CreateOxyForm
                {...{ showCreateOxy, setShowCreateOxy, updateData }}
            />
            <br />

            {dataFragment}

            <Row style={{ textAlign: 'center' }} md={8}>
                <Col md={{ span: 6, offset: 3 }}>
                    {pageCount > 0 && (
                        <ButtonGroup className="spacer-top-margin-lot">
                            <Button
                                onClick={() => {
                                    if (pageNum > pageCount) setPageNum(0);
                                    else if (pageNum < 1) setPageNum(0);
                                    else setPageNum(pageNum - 1);
                                }}
                            >
                                Prev
                            </Button>
                            <Button disabled>{`${
                                pageNum + 1
                            }/${pageCount}`}</Button>
                            <Button
                                onClick={() => {
                                    // increment only if lesser
                                    pageNum < pageCount - 1 &&
                                        setPageNum(pageNum + 1);
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
