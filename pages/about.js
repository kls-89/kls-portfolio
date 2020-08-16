import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faGithub,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';
const About = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>
        My name is Keenan Leonard-Solís, and I am a self-taught programmer
        currently living in northeastern Massachusetts. While I graduated from
        Swarthmore College in 2012 with a BA in Psychology, I have always had a
        penchant for learning and problem solving, and I'm perpetually thinking
        of ways to use technology to bring people together. Presently, I work in
        Public Safety, so I'm motivated in finding ways to bring technology and
        improvements to this field.
      </p>
      <p>
        I’m a firm believer that our world would be a better place if more
        people knew a thing or two about the technology, infrastructure, and
        processes that make it run. To this end, I hope to one day use my
        programming knowledge and skills to help others find the spark for
        innovation and the passion for discovery that technology brings.
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-evenly'
        }}
      >
        <FontAwesomeIcon icon={faHtml5} color="#E44D26" width="3em" size="3x" />
        <FontAwesomeIcon icon={faCss3} color="#4682b4" width="3em" size="3x" />
        <FontAwesomeIcon icon={faJs} color="#F0DB4F" width="3em" size="3x" />
        <FontAwesomeIcon icon={faReact} color="#61DBFB" width="3em" size="3x" />
        <FontAwesomeIcon icon={faNode} color="#3c873a" width="3em" size="3x" />
        <FontAwesomeIcon icon={faGitAlt} color="#F1502F" width="3em" size="3x" />
        <FontAwesomeIcon icon={faGithub} color="#333" width="3em" size="3x" />
        <FontAwesomeIcon
          icon={faBootstrap}
          color="#563d7c"
          width="3em"
          size="3x"
        />
      </div>
    </Layout>
  );
};

export default About;
