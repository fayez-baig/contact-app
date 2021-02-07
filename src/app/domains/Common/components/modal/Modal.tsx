import { FC } from 'react';
import { ModalProps } from './types';

const Modal: FC<ModalProps> = ({ showModal, children, handleDelete }) => {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-white opacity-50 dark:bg-gray-900"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block overflow-hidden text-left align-bottom transition-all transform rounded-lg shadow-xl bg-light-mode-content-bg dark:bg-dark-mode sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-purple-200 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                ❌
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                {children}
              </div>
            </div>
          </div>
          <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={() => {
                handleDelete();
                showModal(false);
              }}
              className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-purple-500 border border-transparent rounded-md shadow-sm hover:bg-purple-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
            >
              OK
            </button>

            <button
              type="button"
              onClick={() => showModal(false)}
              className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-gray-300 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
