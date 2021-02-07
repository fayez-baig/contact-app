import { useState } from 'react';
import { FriendsContainersProps } from './types';

const FriendsContainers: React.FC<FriendsContainersProps> = ({ children }) => {
  const list = JSON.parse(localStorage.getItem('friendsList')!);
  const [searchFriend, setSearchFriend] = useState('');
  const [friendList, setFriendList] = useState(list || []);

  const fliteredFriendArr = friendList.filter(friend =>
    friend.name.toLowerCase().includes(searchFriend.toLowerCase()),
  );

  return (
    <div className="text-gray-600 dark:text-gray-400">
      {children({
        searchFriend,
        setSearchFriend,
        fliteredFriendArr,
        setFriendList,
      })}
    </div>
  );
};

export default FriendsContainers;
