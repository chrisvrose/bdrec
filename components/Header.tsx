import type { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styles from '../styles/Header.module.scss';

/** Props for header */
export type HeaderProps = {
    /** Title of above window */
    title: string;
    /** Current active key in the navbar */
    activeKey: 'home' | 'plot';
};

/** Head along with Navbar */
export const Header: FC<HeaderProps> = function ({ title, activeKey }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Vitals Recording" />
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
                <meta name="theme-color" content="#bc7100" />
            </Head>
            <Navbar
                bg="dark"
                expand="md"
                fixed="top"
                variant="dark"
                className="card-1"
            >
                <Container fluid>
                    <Navbar.Brand>Vitals Recorder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-toggleable" />
                    <Navbar.Collapse id="navbar-toggleable">
                        <Nav
                            activeKey={activeKey}
                            className="justify-content-end mr-auto"
                        >
                            <Link href="/" passHref>
                                <Nav.Link eventKey="home">Home</Nav.Link>
                            </Link>

                            <Link href="/plot" passHref>
                                <Nav.Link eventKey="plot">Plot</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
