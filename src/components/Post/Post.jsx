import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getCommentsSaga } from 'redux/slices/commentsSlice';
import { getUserSaga } from 'redux/slices/userSlice';

import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.min.css';

import Comment from './components/Comment/Comment';
import avatar from 'assets/images/man.png';

const Post = ({ props }) => {
	const navigate = useNavigate();

	const comments = useSelector((state) => state.comments.comments);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [showA, setShowA] = useState(false);

	const handleComment = () => {
		setLoading(true);
		comments[0]?.postId !== props.id && dispatch(getCommentsSaga(props.id));
		setTimeout(() => {
			setShowA(true);
			setLoading(false);
		}, 1000);
	};

	const handleClose = () => {
		setShowA(false);
	};

	const handleUser = () => {
		localStorage.setItem('userId', JSON.stringify({ userId: props.userId }));
		dispatch(getUserSaga(props.userId));
		navigate('/profile');
	};

	return (
		<Card style={{ width: '18rem' }}>
			<Card.Body
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					gap: '1rem',
				}}
			>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.body}</Card.Text>
				<div>
					<Card.Img
						style={{ width: '4rem', paddingRight: '1rem', cursor: 'pointer' }}
						src={avatar}
						onClick={handleUser}
					/>
					<Button
						onClick={handleComment}
						className='mb-2'
						style={{
							width: '70%',
						}}
					>
						Comments{' '}
						{loading && (
							<Spinner
								animation='grow'
								variant='light'
								style={{ height: '1rem', width: '1rem' }}
							/>
						)}
					</Button>
					<Toast
						show={showA}
						style={{
							position: 'fixed',
							top: '50%',
							left: '50%',
							transform: 'translateX(-50%) translateY(-50%)',
							zIndex: 1,
							maxHeight: '50rem',
							overflowY: 'scroll',
						}}
						onClose={handleClose}
					>
						<Toast.Header>
							<strong className='me-auto'>Comments</strong>
						</Toast.Header>
						<Toast.Body
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '2rem',
							}}
						>
							{comments.map((comment) => (
								<Comment key={comment.id} props={comment} />
							))}
						</Toast.Body>
					</Toast>
				</div>
			</Card.Body>
		</Card>
	);
};

export default Post;
