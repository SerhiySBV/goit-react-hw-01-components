import {
  ProfileStyle,
  Avatar,
  UserName,
  Description,
  SocialList,
  Social,
  SocialCount,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileStyle>
      <div>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Description>{tag}</Description>
        <Description>{location}</Description>
      </div>

      <SocialList>
        <Social>
          <span>Followers</span>
          <SocialCount>{followers}</SocialCount>
        </Social>
        <Social>
          <span>Views</span>
          <SocialCount>{views}</SocialCount>
        </Social>
        <Social>
          <span>Socialkes</span>
          <SocialCount>{likes}</SocialCount>
        </Social>
      </SocialList>
    </ProfileStyle>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
