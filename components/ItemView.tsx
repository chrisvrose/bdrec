import { FC } from 'react';
import { Card, Accordion } from 'react-bootstrap';
import type { Item } from '../lib/Item';
import { ItemTypeToString } from '../lib/Item';

export const ItemView: FC<Item & { eventKey: string }> = function ({
    date,
    itemType,
    value,
    desc,
    eventKey,
}) {
    return (
        <Card bg="dark">
            <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
                Click me!
                {date.toString()}
            </Accordion.Toggle>

            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                    {date.toString()} {ItemTypeToString(itemType)}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};
