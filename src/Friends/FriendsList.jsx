import PropTypes from 'prop-types';
import FriendsListItem from "./FriendsListItem";
import s from './Friends.module.css';


const FriendsList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({id, name, avatar, isOnline }) => (
        
        <FriendsListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
          />
        
      ))
    }
    </ul>
    
  )
}


FriendsList.defaultProps = {
  friends: [],
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),

}


export default FriendsList;