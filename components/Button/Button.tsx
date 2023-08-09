import { ReactNode } from 'react';

type ButtonProps = {
  classes: string;
  content: string;
  icon?: ReactNode;
};

export default function Button({ classes, content, icon }: ButtonProps) {
  return (
    <button
      type='button'
      className={`inline-flex items-center gap-2 rounded-lg bg-white text-center font-medium text-black hover:bg-gray-700 hover:text-white focus:outline-none ${classes}`}
    >
      {content}
      <span>{icon}</span>
    </button>
  );
}
