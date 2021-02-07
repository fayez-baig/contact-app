interface Friend {
  name: string;
  liked: boolean;
  id: number;
}
export interface CardProps {
  friends: Friend[];
  setFriendList?: any;
  handleDelete: any;
  handleFavourite: any;
}
