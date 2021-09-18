import type { NextPage } from 'next';
import { useState } from 'react';
import { Header } from '../components/Header';
import { IDBItemHandler } from '../lib/idbWrapper';
import { Item } from '../lib/Item';
import styles from '../styles/Home.module.scss';
import { Button } from 'react-bootstrap';
import { useIDBFetcher } from '../lib/miscSwr';
import { ItemView } from '../components/ItemView';
const Home: NextPage = () => {
    const [x, setX] = useState(10);
    const { data, error, mutate } = useIDBFetcher(
        'getVal',
        true,
        undefined,
        x,
        { refreshInterval: 2000 }
    );

    if (error) {
        return <div className={styles.container}>Error {error.toString()}</div>;
    }
    if (!data) {
        return <div className={styles.container}>Loading</div>;
    }

    return (
        <>
            <Header title="Pain" />
            <div className={styles.container}>
                {data.map((e) => (
                    <ItemView key={JSON.stringify(e)} {...e} />
                ))}
                <br />
                <Button
                    onClick={(e) => {
                        IDBItemHandler.add(new Item(0));
                        mutate(undefined, true);
                    }}
                >
                    Add
                </Button>
                <br />

                <Button
                    onClick={(e) => {
                        mutate(undefined, true);
                    }}
                >
                    Mutate
                </Button>
                <br />

                <Button
                    onClick={(e) => {
                        IDBItemHandler.clear();
                        mutate(undefined, true);
                    }}
                >
                    Clear
                </Button>
                <br />
            </div>
        </>
    );
};

export default Home;
