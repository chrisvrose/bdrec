import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { IDBItemHandler } from '../lib/idbWrapper';
import { Item } from '../lib/Item';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    
    useEffect(()=>{
        const x = new IDBItemHandler;
        (window as any).x = x;
        console.log(x);
        x.put({date:new Date,itemType:0}).then(e=>console.log('done')).catch(e=>console.log('no'));
        x.getAll().then(e=>console.log(e));
        
    },[]);
    return (
        <>
            <Header title="Pain" />
            <div className={styles.container}></div>
        </>
    );
};

export default Home;
