import { v4 as uuidv4 } from 'uuid';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Project = props => {
  return (
    <Card text="dark" border="dark" className="mt-4">
      <Card.Header className="py-4 text-danger" as="h3">{props.title}</Card.Header>
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
      <Button
        className="py-3"
        target="_blank"
        rel="noopener"
        rel="noreferrer"
        href={props.url}
      >
        View on Github
      </Button>
    </Card>
  );
};

export default Project;
