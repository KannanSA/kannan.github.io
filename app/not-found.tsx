import type { Metadata } from 'next';
import { PongGame } from './pong/pong-game';

export const metadata: Metadata = {
  title: { absolute: '404 · Page not found · sakannan' },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="pong-page pong-page--missing">
      <PongGame missing />
    </main>
  );
}
