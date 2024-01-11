import React, { FC } from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
  error?: boolean;
  label: string;
}

const TextField: FC<TextFieldProps> = ({ helperText, error, label, value, onChange, ...restProps }) => {
  return (
    <div>
      <label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...restProps}
      />

      {error && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{helperText}</p>}
    </div>
  );
};

export default TextField;
