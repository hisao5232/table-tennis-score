# Table Tennis Score Board (卓球スコアボード)

Expo (React Native) と TypeScript で作成した、Android/iOS 向けのシンプルで操作性に優れた卓球スコアボードアプリです。

## 特長

- **横画面（Landscape）特化**: スマホを横向きにして卓球台の横に置くことで、大きな文字でスコアを確認可能
- **バイブレーションフィードバック**: スコア加算時・リセット時に手応えのある振動通知
- **コンポーネント & スタイル分離**: 保守性を考慮した設計

## 技術構成

- **Framework**: Expo (React Native)
- **Language**: TypeScript
- **Style**: StyleSheet (モジュール分離)

## 開発環境のセットアップ

### 前提条件
- Node.js (LTS版) がインストールされていること
- スマホに **Expo Go** アプリ（iOS / Android）がインストールされていること

### 起動手順

1. パッケージのインストール:
   ```bash
   npm install
   ```

2. 開発サーバーの起動:
   ```bash
   npx expo start
   ```

3. スマホの Expo Go アプリで端末上の QR コードをスキャンして起動します。

## ライセンス
MIT License
