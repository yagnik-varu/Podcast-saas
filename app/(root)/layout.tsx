import LeftSidebar from "@/components/LeftSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
            <main>
                <LeftSidebar></LeftSidebar>
                {children}
                <p className="text-white-1">right Sidebar</p>
            </main>
        </div>
      </body>
    </html>
  );
}
