import PropTypes from 'prop-types';
import s from './Profile.module.css';
const Profile = ({ user }) => {
  return (
    <div className={s.profile}>
      <div className="description">
        <img src={user.avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{user.name}</p>
        <p className={s.tag}>@{user.tag}</p>
        <p className={s.location}>{user.location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statItem}>
          <span className={s.label}>Followers </span>
          <span className={s.quantity}>{user.stats.followers}</span>
        </li>
        <li className={s.statItem}>
          <span className={s.label}>Views </span>
          <span className={s.quantity}>{user.stats.views}</span>
        </li>
        <li className={s.statItem}>
          <span className={s.label}>Likes </span>
          <span className={s.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
