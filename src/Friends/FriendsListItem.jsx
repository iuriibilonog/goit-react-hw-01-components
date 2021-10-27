import PropTypes from 'prop-types';
import s from './Friends.module.css';

const FriendsListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={s.item}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  )
}

FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default FriendsListItem;


