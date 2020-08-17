import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
  return (
    <Layout>
      <div style={{ marginTop: '5vh' }}>
        <h1>Let's Connect</h1>
        <p className="lead">
          If you think I'd be a good fit for your company, please let me know!
        </p>
        <p className="lead">You can reach me via:</p>
        <div
          className="d-flex flex-column flex-sm-row  align-items-center justify-content-around"
          style={{
            marginBottom: '1.5em'
          }}
        >
          <a href="mailto: k.leonardsolis@gmail.com?subject=Portfolio Reply">
            <FontAwesomeIcon width="3em" size="3x" icon={faEnvelope} />
          </a>

          <a
            target="_blank"
            rel="noopener"
            rel="noreferrer"
            href="https://www.linkedin.com/in/keenan-leonard-solis-60815490"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#0077B5"
              width="3em"
              size="3x"
            />
          </a>
          <a
            href="https://github.com/kls-89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#333"
              width="3em"
              size="3x"
            />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
