import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserSaga } from 'redux/slices/userSlice';
import { getPostsSaga } from 'redux/slices/postsSlice';

import Layout from 'components/Layout/Layout';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Post from 'components/Post/Post';
import { Container } from 'react-bootstrap';
import { offLoading, onLoading } from 'redux/slices/loadingSlice';

import Spinner from 'react-bootstrap/Spinner';

const Profile = () => {
	const user = useSelector((state) => state.user.user);
	const posts = useSelector((state) => state.posts.posts);
	const loading = useSelector((state) => state.loading.loading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(onLoading());
		const id = JSON.parse(localStorage.getItem('userId'));
		if (id) {
			dispatch(getUserSaga(id.userId));
		}
		if (posts.length === 0) {
			dispatch(getPostsSaga());
		}
		setTimeout(() => dispatch(offLoading()), 1000);
	}, []);

	return (
		<Layout>
			<div
				style={{
					display: 'flex',
					gap: '2rem',
					padding: '0 6rem',
				}}
			>
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
					<>
						<ProfileCard props={user} />
						<Container
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(2, 1fr)',
								justifyItems: 'center',
								rowGap: '2rem',
								paddingBottom: '10rem',
							}}
						>
							{posts.map(
								(post) =>
									post.userId === user.id && (
										<Post key={post.id} props={post} />
									),
							)}
						</Container>
					</>
				)}
			</div>
		</Layout>
	);
};

export default Profile;
