import Link from "next/link";
import MainContent from "@/app/components/MainContent";
import Container from "@/app/components/Container";

const HERO_META = [
  {
    label: "日程",
    value: "2025年11月21日（金）〜24日（月・祝） 10:00–18:00",
  },
  {
    label: "会場",
    value: "慶應義塾大学 三田キャンパス（院校舎予定）",
  },
  {
    label: "教室",
    value: "2025年度の教室は決定次第お知らせします（昨年は院校舎342）。",
  },
] as const;

const HERO_LINKS = [
  { name: "三田祭公式", url: "https://www.mitasai.com/" },
  { name: "KCS 公式サイト", url: "https://www.kcs1959.jp/" },
] as const;

const HeroSection = () => (
  <Container>
    <section id="overview">
      <h1>KCS ExVision 2025</h1>
      <p>ゲーム・AI・Web・CG・音楽・低レイヤまで、KCSの学生作品を触って体験できる展示です。</p>
      <ul>
        {HERO_META.map((item) => (
          <li key={item.label}>
            <strong>{item.label}</strong>：{item.value}
          </li>
        ))}
      </ul>
      <ul>
        {HERO_LINKS.map((link) => (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <p>混雑情報や入場ルールは三田祭公式サイトをご確認ください。</p>
    </section>
  </Container>
);

const OverviewSection = () => (
  <Container>
    <section>
      <h2>展示のポイント</h2>
      <ul>
        <li>学生制作のデジタル作品をその場で操作・体験。</li>
        <li>参加無料・出入り自由。滞在目安は10〜20分です。</li>
        <li>詳細は会期に向けて順次更新します。</li>
      </ul>
    </section>
  </Container>
);

const LinksSection = () => (
  <Container>
    <section>
      <h2>関連ページ</h2>
      <ul>
        <li>
          <Link href="/zones">展示ゾーンの概要</Link>
        </li>
        <li>
          <Link href="/guide">来場ガイド・FAQ</Link>
        </li>
        <li>
          <Link href="/sessions">ショートセッション予定</Link>
        </li>
        <li>
          <Link href="/kcs">KCSについて</Link>
        </li>
        <li>
          <Link href="/resources">参考リンク集</Link>
        </li>
      </ul>
    </section>
  </Container>
);

const StructuredData = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "KCS ExVision 2025",
    description:
      "慶應義塾大学の公認コンピュータサークルKCSによる体験型展示。ゲーム、AI、Web、CG、音楽、低レイヤなど幅広い作品を展示。",
    startDate: "2025-11-21T10:00:00+09:00",
    endDate: "2025-11-24T18:00:00+09:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    isAccessibleForFree: true,
    organizer: {
      "@type": "Organization",
      name: "Keio Computer Society (KCS)",
      url: "https://www.kcs1959.jp/",
    },
    location: {
      "@type": "Place",
      name: "慶應義塾大学 三田キャンパス",
      address: {
        "@type": "PostalAddress",
        addressLocality: "港区",
        addressRegion: "東京都",
        addressCountry: "JP",
      },
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
};

const TopPage = () => (
  <MainContent>
    <HeroSection />
    <OverviewSection />
    <LinksSection />
    <StructuredData />
  </MainContent>
);

export default TopPage;
