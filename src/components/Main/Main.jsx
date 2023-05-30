import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsSaga } from '../../redux/slices/postsSlice';

import Spinner from 'react-bootstrap/Spinner';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Layout from 'components/Layout/Layout';
import Post from 'components/Post/Post';
import { offLoading, onLoading } from 'redux/slices/loadingSlice';

const Main = () => {
	const posts = useSelector((state) => state.posts.posts);
	const loading = useSelector((state) => state.loading.loading);
	const dispatch = useDispatch();

	const [currentPage, setCurrentPage] = useState(1);
	const [input, setInput] = useState('');
	const [currentPosts, setCurrentPosts] = useState([]);
	const [postsPerPage, setPostsPerPage] = useState(9);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const pages = [1, 2, 3, 4, 5];

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage <= Math.round(posts.length / postsPerPage)) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handleCertainPage = (i) => {
		if (
			currentPage >= 1 &&
			currentPage <= Math.round(posts.length / postsPerPage)
		) {
			setCurrentPage(i);
		}
	};

	useEffect(() => {
		if (input !== '') {
			const newPosts = posts.filter((post) => post.title.includes(input.toLowerCase()));
			setCurrentPosts(newPosts.slice(indexOfFirstPost, indexOfLastPost));
		} else {
			setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
		}
	}, [input, posts, currentPage, postsPerPage]);

	useEffect(() => {
		dispatch(onLoading());
		dispatch(getPostsSaga());
		setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
		setTimeout(() => dispatch(offLoading()), 1000);
	}, []);

	const checkWidth = useCallback(() => {
		if (window.innerWidth <= 640 && window.innerWidth > 400) {
			setPostsPerPage(6);
		} else if (window.innerWidth <= 400) {
			setPostsPerPage(3);
		} else {
			setPostsPerPage(9);
		}
	}, []);

	const handleResize = () => {
		setTimeout(() => checkWidth(), 1000);
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [postsPerPage]);

	useEffect(() => {
		checkWidth();
	}, []);

	return (
		<Layout>
			<InputGroup style={{ marginBottom: '5rem', padding: '0 10rem' }}>
				<Form.Control
					placeholder="Recipient's username"
					aria-label="Recipient's username"
					aria-describedby='basic-addon2'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<Button
					variant='outline-secondary'
					id='button-addon2'
					onClick={() => setInput('')}
				>
					X
				</Button>
			</InputGroup>
			<div className='posts__container'>
				{loading ? (
					<Spinner
						animation='grow'
						variant='light'
						style={{
							width: '20rem',
							height: '20rem',
							position: 'absolute',
						}}
					/>
				) : (
					currentPosts.map((item) => <Post key={item.id} props={item} />)
				)}
			</div>
			<Pagination
				style={{
					position: 'absolute',
					bottom: '2rem',
					left: '50%',
					transform: 'translateX(-50%)',
				}}
			>
				<Pagination.Item onClick={handlePrevPage}>Prev</Pagination.Item>
				{pages.map((page) => {
					return (
						<Pagination.Item key={page} onClick={() => handleCertainPage(page)}>
							{page}
						</Pagination.Item>
					);
				})}
				<Pagination.Item>...</Pagination.Item>
				<Pagination.Item onClick={handleNextPage}>Next</Pagination.Item>
			</Pagination>
		</Layout>
	);
};

export default Main;
