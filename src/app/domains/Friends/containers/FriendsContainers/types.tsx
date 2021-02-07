import { ReactNode } from 'react';

interface FriendDetails {
  name: string;
  liked: boolean;
  id: number;
}
interface ChildrenProps {
  searchFriend?: string;
  setSearchFriend?: any;
  fliteredFriendArr: FriendDetails[];
  setFriendList?: (data: FriendDetails[]) => void;
}

export interface FriendsContainersProps {
  children: (props: ChildrenProps) => ReactNode;
}
