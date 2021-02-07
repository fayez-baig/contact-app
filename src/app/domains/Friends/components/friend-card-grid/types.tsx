interface Friend {
  name: string;
  liked: boolean;
  id: number;
}
export interface FriendCardGridProps {
  search?: string;
  setSearch?: any;
  fliteredFriendArr: Friend[];
  setFriendList?: (data: Friend[]) => void;
}
