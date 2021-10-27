import PropTypes from 'prop-types';
import s from './Friends.module.css';

const FriendsListItem = ({ name, avatar, isOnline }) => {
  const frienStatus = isOnline ? s.online : s.offline;
  return (
    <li className={s.item}>
      <span className={frienStatus}>{isOnline}</span>
      <img className={ s.avatar} src={avatar} alt={name} width="48" />
      <p className={ s.name}>{name}</p>
    </li>
  )
}

FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default FriendsListItem;


