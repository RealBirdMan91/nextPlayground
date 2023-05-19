export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <h1>Protected Dashboard navigation</h1>
      </nav>
      {children}
    </>
  );
}
