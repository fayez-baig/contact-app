import { FC } from 'react';

interface BadgePillsProps {
  name: string;
  onClick: () => void;
}
const BadgePills: FC<BadgePillsProps> = ({ name, onClick }) => (
  <span
    className="inline-flex items-center px-2 py-1 mb-2 mr-1 text-xs rounded-full cursor-pointer bg-light-mode-content-bg text-light-mode-text dark:text-light-mode dark:bg-dark-mode-content-bg md:mr-2"
    onClick={onClick}
  >
    {name}
  </span>
);

export default BadgePills;
