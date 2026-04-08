import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Openclaw Setup',
  description: 'Setup your Openclaw instance',
  icons: {
    icon: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
