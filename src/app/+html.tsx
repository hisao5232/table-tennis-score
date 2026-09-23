// src/app/+html.tsx
import { ScrollViewStyleReset } from 'expo-router/html';
import React from 'react';

// Expo Router専用の特殊ファイル。
// Webビルド時に一度だけレンダリングされ、
// 全ページ共通の <html><head> を定義する。
// これがないと manifest.json への参照タグが index.html に入らない。
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* PWAインストールに必須：manifestへの参照 */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />

        {/* Web版でスクロールの見た目を統一するExpo標準コンポーネント */}
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
