import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const PageNotFound = () => {
	const navigate = useNavigate();
	return (
		<div style={{display: 'flex', flexDirection: 'column', padding: '2rem'}}>
			<p style={{ fontSize: '4rem', textAlign: 'center', color: 'white' }}>
				Page not found
			</p>
			<Button type='button' onClick={() => navigate('/')}>
				Go back
			</Button>
		</div>
	);
};

export default PageNotFound;
