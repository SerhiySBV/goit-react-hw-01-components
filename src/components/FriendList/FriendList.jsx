import PropTypes from 'prop-types';
import { FriendItem } from 'components/FriendItem/FriendItem';
import { FriendStyleList } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendStyleList>
      {friends.map(friend => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </FriendStyleList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
