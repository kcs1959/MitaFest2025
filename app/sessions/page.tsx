import type { Metadata } from "next";
import Container from "@/app/components/Container";
import MainContent from "@/app/components/MainContent";

const SESSIONS = [
  "ゲームはどうやって動く？主役は“ループ”",
  "3分でわかるコンパイラの仕事",
  "プロンプトより大事な“前処理”",
  "AtCoder入門：全探索から始めよう",
] as const;

const NOTES = [
  "各回15分程度。タイムテーブルは前日までにSNSと会場で掲示します。",
  "展示スタッフによるライブデモも時間帯ごとに実施予定です。",
  "アーカイブ記事や動画の公開可否は当日案内します。",
] as const;

export const metadata: Metadata = {
  title: "ショートセッション | KCS ExVision 2025",
  description: "KCS ExVision 2025で予定しているショートセッションのテーマ一覧。",
};

const SessionsPage = () => (
  <MainContent>
    <Container>
      <section>
        <h1>ショートセッション</h1>
        <p>展示と連動したミニ講座を会期中に随時開催します。</p>
      </section>
    </Container>

    <Container>
      <section>
        <h2>予定テーマ</h2>
        <ul>
          {SESSIONS.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      </section>
    </Container>

    <Container>
      <section>
        <h2>進行メモ</h2>
        <ul>
          {NOTES.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </Container>
  </MainContent>
);

export default SessionsPage;
