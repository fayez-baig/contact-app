import { FC } from 'react';
import _ from 'lodash';

export interface PaginationProps {
  itemCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}
//@ts-ignore
const Pagination: FC<PaginationProps> = ({
  itemCount,
  pageSize,
  onPageChange,
  currentPage,
}) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return '';
  const pages = _.range(1, pageCount + 1);

  return (
    <div className="flex h-12 font-medium bg-gray-200 rounded-full">
      {pages.map(p => (
        <div
          key={p}
          onClick={() => onPageChange(p)}
          className={`flex items-center justify-center w-12 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex ${
            currentPage === p && 'bg-purple-700 text-white'
          } `}
        >
          {p}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
