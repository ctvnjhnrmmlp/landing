import { ReactNode } from 'react';
import Button from '../Button';

type ButtonProps = {
  classes: string;
  content: string;
  icon?: ReactNode;
};

export default function ButtonMedium({ classes, content, icon }: ButtonProps) {
  return (
    <Button
      classes={`md:text-md lg:text-lg ${classes}`}
      content={content}
      icon={icon}
    />
  );
}
