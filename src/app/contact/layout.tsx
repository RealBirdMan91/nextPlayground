export default function Layout({
  children,
  heavyLoading,
}: {
  children: React.ReactNode;
  heavyLoading: React.ReactNode;
}) {
  return (
    <>
      <aside>
        <h1>Hai Im layout from contact</h1>
      </aside>
      {heavyLoading}
      {children}
    </>
  );
}
