import { Providers } from '../Providers';
import '@/app/globals.css';
export default function InnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
