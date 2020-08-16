import { v4 as uuidv4 } from 'uuid';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Project = props => {
  return (
    <Card className="mt-4">
      <Card.Header as="h4">{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>
          <strong>Project Description</strong>: {props.description}
        </Card.Text>
        <Card.Text>
          <strong>Technologies Used</strong>:
        </Card.Text>
        <ListGroup variant="flush">
          {props.technologies.map(tech => (
            <ListGroup.Item key={uuidv4()}>{tech}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
      <Card.Link
        target="_blank"
        rel="noopener"
        rel="noreferrer"
        href={props.url}
      >
        View on Github
      </Card.Link>
    </Card>
  );
};

export default Project;
