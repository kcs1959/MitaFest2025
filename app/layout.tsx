import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import "@/app/styles/globals.css";

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "700"],
  preload: false,
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KCS ExVision 2025 – 触れて、遊んで、作ってみるコンピュータの世界",
  description:
    "慶應義塾大学の公認コンピュータサークルKCSによる体験型展示。ゲーム、AI、Web、CG、音楽、低レイヤまで“ぜんぶ入り”で楽しめます。",
  keywords: ["KCS", "慶應義塾大学", "三田祭", "ExVision", "コンピュータサークル", "展示"],
  openGraph: {
    title: "KCS ExVision 2025",
    description:
      "慶應義塾大学の公認コンピュータサークルKCSによる体験型展示イベント。ゲームやAI、Web、CG、音楽、低レイヤ作品を実際に触って楽しめます。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary",
    title: "KCS ExVision 2025",
    description:
      "KCSが届ける体験型展示イベント。ゲーム／AI／Web／CG／音楽／低レイヤ作品を実際に触って楽しめます。",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={notoSansJp.variable}>
        <div className="site">
          <header className="site-header">
            <p className="site-title">KCS ExVision 2025</p>
            <nav className="site-nav" aria-label="ページ内ナビゲーション">
              <Link href="/">トップ</Link>
              <Link href="/zones">展示ゾーン</Link>
              <Link href="/sessions">セッション</Link>
              <Link href="/guide">来場ガイド</Link>
              <Link href="/kcs">KCS情報</Link>
              <Link href="/resources">参考リンク</Link>
            </nav>
          </header>
          <main className="site-main">{children}</main>
          <footer className="site-footer">
            <p>
              主催：慶應義塾大学 公認コンピュータサークル KCS ｜ お問い合わせは公式サイト
              <a href="https://www.kcs1959.jp/" target="_blank" rel="noopener noreferrer">
                https://www.kcs1959.jp/
              </a>
              まで
            </p>
            <p>© 2025 Keio Computer Society</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
