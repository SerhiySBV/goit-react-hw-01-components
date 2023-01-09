import PropTypes from 'prop-types';
import { FriendItem } from 'components/FriendItem/FriendItem';
export const FriendList = ({ friends }) => {
  return friends.map(friend => <FriendItem key={friend.id} friend={friend} />);
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
