import type { Metadata } from "next";
import Container from "@/app/components/Container";
import MainContent from "@/app/components/MainContent";

const GROUPS = [
  "AI：AIの基礎の学習、pytorchとkaggleの勉強会",
  "Web：Next.jsとtypeScriptを用いたWebアプリ開発",
  "ゲーム制作： UnityやUnreal Engineでのゲーム開発",
  "システム：自作OS、自作コンパイラ、CTFなど",
  "3DCG：Blenderによる3Dモデリング",
  "音楽：DAWを用いた音楽制作(DTM)",
  "競プロ：AtCoderを中心とした競技プログラミング",
] as const;

const CHANNELS = [
  { label: "公式サイト", url: "https://www.kcs1959.jp/" },
  { label: "X (Twitter)", url: "https://x.com/kcs1959" },
  { label: "YouTube", url: "https://www.youtube.com/user/kcs1959" },
  { label: "Qiita", url: "https://qiita.com/tags/KCS" },
] as const;

export const metadata: Metadata = {
  title: "KCSの活動と入会案内 | KCS ExVision 2025",
  description: "慶應義塾大学公認コンピュータサークルKCSの概要と連絡先。",
};

const KcsPage = () => (
  <MainContent>
    <Container>
      <section>
        <h1>KCSについて</h1>
        <p>
          KCS（Keio Computer
          Society）は1959年創立の、慶應義塾大学唯一のコンピュータ系サークルです。個人制作と班活動を軸に、学園祭展示や技術発信を行っています。
        </p>
      </section>
    </Container>

    <Container>
      <section>
        <h2>主な活動分野</h2>
        <ul>
          {GROUPS.map((group) => (
            <li key={group}>{group}</li>
          ))}
        </ul>
      </section>
    </Container>

    <Container>
      <section>
        <h2>連絡先</h2>
        <ul>
          {CHANNELS.map((channel) => (
            <li key={channel.url}>
              <a href={channel.url} target="_blank" rel="noopener noreferrer">
                {channel.label}
              </a>
            </li>
          ))}
        </ul>
        <p>入会・見学の相談は三田祭会場または各チャネルから受け付けています。</p>
      </section>
    </Container>
  </MainContent>
);

export default KcsPage;
