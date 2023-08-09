type SectionType = {
  children: React.ReactNode;
  classes: string;
};

export default function Section({ children, classes }: SectionType) {
  return <section className={classes}>{children}</section>;
}
