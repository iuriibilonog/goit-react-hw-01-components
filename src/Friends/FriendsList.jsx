import FriendsListItem from "./FriendsListItem";
import friends from '../friends.json';

const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ name, avatar, isOnline }) => (
        <li>
        <FriendsListItem
          name={name}
          avatar={avatar}
          isOnline={isOnline}
          />
        </li>
      ))
    }
    </ul>
    
  )
}


export default FriendsList;