export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <aside>
        <h1>Aside</h1>
      </aside>
      {children}
    </>
  );
}
