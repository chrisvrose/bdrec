import type { FC } from 'react';
import { Card, Accordion } from 'react-bootstrap';
import { dateTimeFormatOptions } from '../lib/constants';
import { Item, ItemFormat, itemTypeMap } from '../lib/Item';
import { ItemTypeToString } from '../lib/Item';

export const ItemView: FC<Item & { eventKey: string }> = function (
    props
) {
    const {date,eventKey,itemType} = props;
    return (
        <Card bg="dark">
            <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
                {`${date.toLocaleString('en-us',dateTimeFormatOptions)} ${ItemTypeToString(itemType)} - ${ItemFormat(props)}`}
            </Accordion.Toggle>

            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                    {ItemTypeToString(itemType)}
                    {ItemFormat(props)}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};
