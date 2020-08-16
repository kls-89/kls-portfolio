import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
  return (
    <Layout>
      <>
        <h1>Let's Connect</h1>
        <div style={{ display: 'flex', justifyContent: 'space-betweenfind' }}>
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
      </>
    </Layout>
  );
};

export default Contact;
