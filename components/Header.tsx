import { FC } from 'react';
import Head from 'next/head';
export type HeaderProps = {
    title: string;
};

export const Header: FC<HeaderProps> = function ({ title }) {
    return (
        <Head>
            <title>{title}</title>
            {/* TODO add desc */}
            <meta name="description" content="Sample desc" />
            <link rel="icon" href="/favicon.ico" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="theme-color" content="#bc7100"/>
        </Head>
    );
};
