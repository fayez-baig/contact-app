import { useState, useEffect } from 'react';
import { Input } from 'app/domains/Common/components/Forms';
import { Card } from 'app/domains/Common/components/card';
import { FriendCardGridProps } from './types';
import Pagination from 'app/domains/Common/components/pagination/Pagination';
import _ from 'lodash';
import { paginate } from 'utils/paginate';

const FriendCardGrid: React.FC<FriendCardGridProps> = ({
  search,
  setSearch,
  fliteredFriendArr,
  setFriendList,
}) => {
  const [input, setInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4);

  const handleSubmit = e => {
    e.preventDefault();
    const id = ~~(Math.random() * 1000000 * 1000000 * 1000000);
    fliteredFriendArr.push({
      id,
      name: input,
      liked: false,
    });
    //@ts-ignore
    setFriendList(fliteredFriendArr);
    localStorage.setItem('friendsList', JSON.stringify(fliteredFriendArr));
    setInput('');
  };

  const handleDelete = friend => {
    const allFriends = fliteredFriendArr;
    const list = allFriends.filter(item => item.id !== friend.id);
    //@ts-ignore
    setFriendList(list);
    localStorage.setItem('friendsList', JSON.stringify(list));
  };

  const handleFavourite = friend => {
    const allFriends = fliteredFriendArr;
    const index = allFriends.indexOf(friend);
    allFriends[index].liked = !allFriends[index].liked;
    //@ts-ignore
    setFriendList(allFriends);

    localStorage.setItem('friendsList', JSON.stringify(allFriends));
  };

  const getPagedData = () => {
    let filtered = fliteredFriendArr;
    if (search) {
      filtered = fliteredFriendArr.filter(friend =>
        friend.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    filtered.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });

    //@ts-ignore
    fliteredFriendArr.sort((a, b) => b.liked - a.liked);

    const friendsList = paginate(filtered, currentPage, pageSize);

    return { totalCount: filtered.length, data: friendsList };
  };
  const { totalCount, data } = getPagedData();

  useEffect(() => {
    if (data.length === 0 && currentPage !== 1) setCurrentPage(currentPage - 1);
  }, [currentPage, data]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="w-full mx-auto mb-4 md:w-2/4">
        <Input
          autocomplete="off"
          name="searhFriend"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="search Friend"
          withIcon
          icon={<span className="w-5 h-5 mx-auto ">🔍</span>}
          className="mt-1"
        />
      </div>
      <div className="w-full mx-auto mb-4 md:w-2/4">
        <form className="h-12">
          <Input
            autocomplete="off"
            name="addFriend"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add Friend"
            withIcon
            icon={<span className="w-5 h-5 mx-auto">➕</span>}
            className="mt-1"
          />
          {input && (
            <button
              type="submit"
              className="bg-transparent border-transparent"
              onClick={e => handleSubmit(e)}
            />
          )}
        </form>
      </div>
      {fliteredFriendArr.length === 0 ? (
        <p className="font-semibold text-center text-gray-600 truncate text-md dark:text-gray-400">
          No Friends Found
        </p>
      ) : (
        <div className="flex justify-center h-2/5">
          <Card
            friends={data}
            setFriendList={setFriendList}
            handleDelete={handleDelete}
            handleFavourite={handleFavourite}
          />
        </div>
      )}
      <div className="flex flex-col items-center my-12">
        <Pagination
          itemCount={totalCount}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default FriendCardGrid;
