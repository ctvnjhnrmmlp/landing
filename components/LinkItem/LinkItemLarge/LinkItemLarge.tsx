import LinkItem from '../LinkItem';

type LinkItemLargeProps = {
  classes: string;
  path: string;
  content: string;
};

export default function LinkItemLarge({
  classes,
  path,
  content,
}: LinkItemLargeProps) {
  return (
    <LinkItem
      path={path}
      classes={`text-lg lg:text-xl ${classes}`}
      content={content}
    />
  );
}
