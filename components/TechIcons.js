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

const TechIcons = () => {
  return (
        <div style={{ marginTop: '2vh' }}>
        <p className="lead">
          A collection of some of my work-related and personal projects, many of
          which use the following technologies:
        </p>
        <div
          style={{
            display: 'flex',
            marginBottom: '2em',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}
        >
          <FontAwesomeIcon
            icon={faHtml5}
            color="#E44D26"
            width="3em"
            size="3x"
          />
          <FontAwesomeIcon
            icon={faCss3}
            color="#4682b4"
            width="3em"
            size="3x"
          />
          <FontAwesomeIcon icon={faJs} color="#F0DB4F" width="3em" size="3x" />
          <FontAwesomeIcon
            icon={faReact}
            color="#61DBFB"
            width="3em"
            size="3x"
          />
          <FontAwesomeIcon
            icon={faNode}
            color="#3c873a"
            width="3em"
            size="3x"
          />
          <FontAwesomeIcon
            icon={faGitAlt}
            color="#F1502F"
            width="3em"
            size="3x"
          />
          <FontAwesomeIcon icon={faGithub} color="#333" width="1em" size="1x" />
          <FontAwesomeIcon
            icon={faBootstrap}
            color="#563d7c"
            width="3em"
            size="3x"
          />
        </div>
    </div>
  );
}

export default TechIcons;

