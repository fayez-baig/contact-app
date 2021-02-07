import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import FriendCardGrid from 'app/domains/Friends/components/friend-card-grid/FriendCardGrid';
import { FriendsContainers } from 'app/domains/Friends/containers/FriendsContainers';
const HomePage: FC = () => (
  <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Home Page for Trending Videos" />
    </Helmet>
    <FriendsContainers>
      {({
        searchFriend,
        setSearchFriend,
        fliteredFriendArr,
        setFriendList,
      }) => {
        return (
          <FriendCardGrid
            setSearch={setSearchFriend}
            search={searchFriend}
            fliteredFriendArr={fliteredFriendArr}
            setFriendList={setFriendList}
          />
        );
      }}
    </FriendsContainers>
  </>
);

export default HomePage;
