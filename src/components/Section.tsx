type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
