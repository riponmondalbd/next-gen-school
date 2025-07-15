export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left navbar component */}
      <div className="w-1/6 bg-red-200">l</div>
      {/* right main component */}
      <div className="w-5/6 bg-blue-200">r</div>
    </div>
  );
}
