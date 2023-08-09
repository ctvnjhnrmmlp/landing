import Link from 'next/link';

type LinkItemProps = {
  classes: string;
  path: string;
  content: string;
};

export default function LinkItem({ classes, path, content }: LinkItemProps) {
  return (
    <Link
      href={path}
      className={`block justify-center rounded align-middle text-white hover:bg-white hover:text-gray-700 md:border-0 md:hover:bg-transparent md:hover:text-gray-700 ${classes}`}
      aria-current='page'
    >
      {content}
    </Link>
  );
}
