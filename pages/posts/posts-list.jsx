import styles from '../../styles/list.module.css';
import Lottie from 'lottie-react';
import loader from '../../public/assets/images/blue-loader.json';
import { useSelector, useDispatch } from 'react-redux';
import { init } from '../../features/posts/postsReducer';
import PostsItem from '../../components/PostItem';

const postsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);

  const handleLoadClick = () => {
    dispatch(init());
  };

  return (
    <div className={styles.container}>
      <h1>Posts list</h1>

      <button
        className={styles.load_button}
        onClick={handleLoadClick}
      >
        Load list
      </button>

      {loading && (
        <Lottie
          animationData={loader}
          loop={true}
          autoplay={true}
          className={styles.loader}
        />
      )}

      {posts.length > 0 && (
        <ul className={styles.list}>
          {posts.map(post => (
            <PostsItem
              key={post.id}
              post={post}
            />
          ))}
        </ul>
      )}

    </div>
  );
};

export default postsList;