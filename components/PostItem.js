import styles from '../styles/post.module.css';
import { useEffect, useRef, useState } from 'react';
import lottieLike from '../public/assets/images/like.json';
import Lottie from 'lottie-react';

const PostsItem = ({
  post,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const like = useRef(null);

  useEffect(() => {
    like.current.setSpeed(3);
  }, [])

  const handleLikeClick = () => {
    if (isLiked) {
      like.current.setDirection(-1);
      like.current.play();
      setIsLiked(false);
      return;
    };

    like.current.setDirection(1);
    like.current.play();
    setIsLiked(true);
  }

  return (
    <li
      className={styles.item}
    >
      <h2>{post.title}</h2>

      <p className={styles.item__text}>{post.body}</p>

      <Lottie
        animationData={lottieLike}
        loop={false}
        autoplay={false}
        className={styles.item__like}
        lottieRef={like}
        onClick={handleLikeClick}
      />
    </li>
  );
};

export default PostsItem;