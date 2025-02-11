<div id="top"></div>

## 使用技術一覧

<div style="display: inline">

  <!-- フロントエンドのフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/-Node.js-339933.svg?logo=node.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Next.js-blue.svg?logo=next.js&style=for-the-badge">
  <!-- フロントエンドの言語 -->
  <img src="https://img.shields.io/badge/-Typescript-FFF.svg?logo=typescript&style=for-the-badge">
  <!-- ミドルウェア -->
  <img src="https://img.shields.io/badge/-Firebase-FFCA28.svg?logo=firebase&style=for-the-badge">

</div>

#### 使用ライブラリ
<div>
  <!-- 使用ライブラリ -->
  <p><a href="https://mui.com/material-ui/material-icons/">MUI Material icons</a></p>
  <p><a href="https://redux.js.org/">Redux</a></p>
  <p><a href="https://sass-lang.com/">Sass</a></p>
  
</div>


## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)


<!-- プロジェクトの概要を記載 -->

## プロジェクトについて


<p align="right">(<a href="#top">トップへ</a>)</p>



<!-- プロジェクトの環境を記載 -->

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| Node.js               | 18.20.4    |
| Next.js               | 14.0.0    |
| React                 | 18.2.0     |

その他のパッケージのバージョンは package.json を参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>


## ディレクトリ構成

```
.
├── .firebase
├── .firebaserc
├── README.md
├── eslint.config.mjs
├── firebase.json
├── next-env.d.ts
├── next.config.js
├── out
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── StoreProvider.tsx
│   │   ├── Types.ts
│   │   ├── components
│   │   ├── favicon.ico
│   │   ├── firebase.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.scss
│   │   └── page.tsx
│   ├── hooks
│   │   ├── useCollection.tsx
│   │   └── useSubCollection.tsx
│   └── lib
│       ├── features
│       ├── hooks.ts
│       └── store.ts
└── tsconfig.json
```

outディレクトリ内部(公開用ディレクトリ)
```
.
├── 404.html
├── _next
├── bs-logo_icon_black.jpg
├── discordIcon.png
├── favicon.ico
├── index.html
└── index.txt
```

<p align="right">(<a href="#top">トップへ</a>)</p>


## 開発環境構築

In the project directory, you can run:

#### `npm install`

### 動作確認

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<p align="right">(<a href="#top">トップへ</a>)</p>

