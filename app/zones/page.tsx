import type { Metadata } from "next";
import Container from "@/app/components/Container";
import MainContent from "@/app/components/MainContent";

const ZONES = [
  "Playground（ゲーム・インタラクティブ）",
  "AI Studio（生成AI・LLM体験）",
  "Web & IoT Lab（Web・ネットワーク）",
  "Low-Level Lab（低レイヤ）",
  "Security & Puzzle（CTFライト）",
  "CG & Sound Works（映像・音楽）",
] as const;

const HIGHLIGHTS = [
  "可視化するコンパイラ：コード変換の流れをライブ表示",
  "ミニAtCoder：初学者向け3問セットをその場で解答",
  "AIの落とし穴体験：前処理と安全設計の重要性を実例で紹介",
] as const;

export const metadata: Metadata = {
  title: "展示ゾーンと見どころ | KCS ExVision 2025",
  description: "KCS ExVision 2025で予定している展示ゾーンと注目企画の概要。",
};

const ZonesPage = () => (
  <MainContent>
    <Container>
      <section>
        <h1>展示ゾーン</h1>
        <p>6つのゾーンでゲームから低レイヤまで横断的に紹介します。詳細は確定次第更新します。</p>
        <ul>
          {ZONES.map((zone) => (
            <li key={zone}>{zone}</li>
          ))}
        </ul>
      </section>
    </Container>

    <Container>
      <section>
        <h2>注目企画（予定）</h2>
        <ul>
          {HIGHLIGHTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>最新情報はSNSと会場パンフレットで案内します。</p>
      </section>
    </Container>
  </MainContent>
);

export default ZonesPage;
