import Navbar from './Navbar';
import Container from 'react-bootstrap/Container';

const withLayout = props => {
  return (
    <Container>
      <Navbar />
      {props.children}
    </Container>
  );
};

export default withLayout;
