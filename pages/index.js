import Head from 'next/head';
import Layout from '../components/Layout';
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

      <Layout>
        <div style={{ marginTop: '20vh' }}>
          <h1 className="important">Keenan Leonard-Solís</h1>
          <p className="lead">
            Seeking opportunities to utilize the best technology available to
            build and deliver new and exciting products.
          </p>
          <div
            className="d-flex flex-column flex-sm-row  align-items-center justify-content-around"
            style={{
              marginTop: '3em'
            }}
          >
            <div className="my-2">
              <Link href="/about" passHref>
                <Button className="py-2" variant="info">
                  About Me
                </Button>
              </Link>
            </div>
            <div className="my-2">
              <Link href="/projects" passHref>
                <Button className="py-2" variant="info">
                  Projects
                </Button>
              </Link>
            </div>
            <div className="my-2">
              <Link href="/contact" passHref>
                <Button className="py-2" variant="info">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
