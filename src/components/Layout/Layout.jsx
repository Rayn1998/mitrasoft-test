import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from 'assets/images/man.png';

const Layout = ({ children }) => {
	const user = useSelector((state) => state.user.user);
	const navigate = useNavigate();

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Navbar
				bg='light'
				style={{
					padding: '1rem',
					marginBottom: '2rem',
					width: '100vw',
					gap: '3rem',
				}}
			>
				<Button
					variant='primary'
					onClick={handleShow}
					style={{ height: '5rem', width: '10rem', fontSize: '1.5rem' }}
				>
					Menu
				</Button>
				<Button
					variant='primary'
					onClick={() => navigate('/')}
					style={{ height: '5rem', width: '10rem', fontSize: '1.5rem' }}
				>
					Main
				</Button>
			</Navbar>
			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Menu</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '30rem',
					}}
				>
					<div style={{
						display: 'flex',
						gap: '2rem',
					}}>
						<Button
							style={{
								height: '5rem',
								width: '10rem',
								fontSize: '1.5rem',
							}}
							onClick={() => navigate('/about-me')}
						>
							About me
						</Button>
						<Button
							style={{ height: '5rem', width: '10rem', fontSize: '1.5rem' }}
							onClick={() => navigate('/profile')}
						>
							Profile
						</Button>
					</div>
					<div style={{ height: '5rem', width: '10rem', fontSize: '1.5rem' }}>
						<img src={avatar} alt='avatar' />
						<p style={{fontSize: '2rem'}}>Name: {user.name}</p>
						<p style={{fontSize: '2rem'}}>Email: {user.email}</p>
					</div>
				</Offcanvas.Body>
			</Offcanvas>
			{children}
		</>
	);
};

export default Layout;
