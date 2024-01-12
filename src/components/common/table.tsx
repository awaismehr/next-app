import React from "react";

interface TableProps {
  rows: das;
}

const Table = ({ rows, columns }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {columns?.map((column, index) => (
            <th key={index} scope="col" className="px-4 py-3">
              {column}
            </th>
          ))}
          <th scope="col" className="px-4 py-3">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b dark:border-gray-700">
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="px-4 py-3">
                {row[column]}
              </td>
            ))}
            <td className="px-4 py-3 flex items-center justify-end">
              <button
                className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                type="button"
              >
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
              {/* Dropdown content here */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
