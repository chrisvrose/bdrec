import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { IDBItemHandler } from '../lib/idbWrapper';
import { Item } from '../lib/Item';
import styles from '../styles/Home.module.scss';
import useSWR from 'swr';
import { Button } from 'react-bootstrap';
import { useIDBFetcher } from '../lib/miscSwr';
const Home: NextPage = () => {
    const [x,setX] = useState(2);
    const [y,setY] = useState(false);
    console.log('Rerender for x,y',x,y)
    const { data, error, isValidating,mutate } = useIDBFetcher('getVal',y,undefined,undefined,{refreshInterval:2000})
    
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
                {JSON.stringify(data)}
                <Button onClick={(event)=>setX(2-x)}>Change</Button>
                <Button onClick={(e)=>{IDBItemHandler.add(new Item(0));mutate(undefined,true)}}>Add</Button>
                <Button onClick={(e)=>{setY(!y);mutate(undefined,true)}} >Flip</Button>
                <Button onClick={(e)=>{mutate(undefined,true)}}>Mutate</Button>
                <Button onClick={(e)=>{IDBItemHandler.flush()}}>Flush</Button>

            </div>
        </>
    );
};

export default Home;
