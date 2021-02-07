import { useState } from 'react';
import { CardProps } from './types';
import { SvgIcon } from 'app/domains/Common/components/svg-icon';
import { Modal } from '../modal';

const Card: React.FC<CardProps> = ({
  friends,
  handleDelete,
  handleFavourite,
}) => {
  const [showModalOnSuccess, setShowModalOnSuccess] = useState(false);
  const [friendObject, setFriendObject] = useState({});

  return (
    <div className="flex flex-wrap w-full mb-4 md:w-6/12 h-96 md:h-80 lg:h-96">
      <ul className="flex flex-col w-full">
        {friends.map((friend, i) => (
          <li key={i} className="flex flex-row mb-2 border-gray-400">
            <div className="flex items-center justify-between flex-1 p-3 overflow-hidden rounded-md shadow-md cursor-pointer select-none bg-light-mode dark:bg-dark-mode">
              <div className="flex">
                <div className="flex flex-col items-center justify-center mr-2 rounded-md ">
                  <div className="h-7 w-7">
                    <img
                      src={`https://avatars.dicebear.com/api/bottts/${friend.name}.svg`}
                      className="img-fluid rounded-circle"
                      alt="rounded circle"
                      width="40px"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center overflow-hidden font-semibold text-gray-600 dark:text-gray-400">
                  <p className="truncate text-md">{friend.name}</p>
                </div>
              </div>
              <div className="flex">
                <SvgIcon
                  icon={friend.liked ? 'FavouriteFilledIcon' : 'FavouriteIcon'}
                  className="w-5 h-5 mr-5"
                  onClick={() => handleFavourite(friend)}
                />
                <SvgIcon
                  icon="DeleteIcon"
                  className="w-5 h-5"
                  onClick={() => {
                    setShowModalOnSuccess(true);
                    setFriendObject(friend);
                  }}
                />
                {showModalOnSuccess && (
                  <Modal
                    showModal={setShowModalOnSuccess}
                    handleDelete={() => handleDelete(friendObject)}
                  >
                    <p className="text-1xl">Are you sure you want to delete</p>
                  </Modal>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
