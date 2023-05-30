import Card from 'react-bootstrap/Card';

const ProfileCard = ({ props }) => {
  return (
    <Card style={{ width: '18rem', maxHeight: '20rem' }}>
      <Card.Body>
        <Card.Title>USER INFO</Card.Title>
        <Card.Text>Name: {props.name}</Card.Text>
        <Card.Text>propsname: {props.propsname}</Card.Text>
        <Card.Text>Email: {props.email}</Card.Text>
        <Card.Text>Phone: {props.phone}</Card.Text>
        <Card.Text>Website: {props.website}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
