import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Keenan Leonard-Solis | Portfolio</title>

        <link
          href="https://use.fontawesome.com/releases/v5.14.0/css/svg-with-js.css"
          rel="stylesheet"
        />

        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout className={styles.main}>
        <h1 className="important">Keenan Leonard-Solís</h1>
        <p id="lead">
          Seeking opportunities to utilize the best technology available to
          build and deliver new and exciting products.
        </p>
        <Container
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
          }}
        >
          <Link href="/about" passHref>
            <Button variant="info">About Me</Button>
          </Link>
          <Link href="/projects" passHref>
            <Button variant="info">What I'm working on</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button variant="info">Let's Connect</Button>
          </Link>
        </Container>
      </Layout>
  </>
  );
}
