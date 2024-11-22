import "./globals.css";

export const metadata = {
  title: 'EcoWatt',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: 'Poppins, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}