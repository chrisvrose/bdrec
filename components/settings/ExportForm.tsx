import { Button, Form } from 'react-bootstrap';
import { IDBItemHandler } from '../../lib/db/idbWrapper';
import { downloadStringAsFile } from '../../lib/misc/download';

const DOWNLOAD_FILE_NAME = 'export.json';

function clickHandler() {
    IDBItemHandler.getAll()
        .then((items) => {
            const itemListString = JSON.stringify(items);
            downloadStringAsFile(itemListString, DOWNLOAD_FILE_NAME);
        })
        .catch(console.error);
}

export function ImportExportForm() {
    return (
        <Form>
            <Form.Label>Export Data (JSON)</Form.Label>
            <br />
            <Button block onClick={clickHandler}>
                Export
            </Button>
        </Form>
    );
}
