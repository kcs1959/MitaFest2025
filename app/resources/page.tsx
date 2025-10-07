import type { Metadata } from "next";
import Container from "@/app/components/Container";
import MainContent from "@/app/components/MainContent";

const REFERENCES = [
  { label: "第67回三田祭公式サイト", url: "https://www.mitasai.com/about/" },
  { label: "KCS公式サイト", url: "https://www.kcs1959.jp/" },
  { label: "KCS ExVision 2024 アーカイブ", url: "https://www.mitasai.com/search/" },
  {
    label: "三田祭展示物全紹介2024 (Qiita)",
    url: "https://qiita.com/tomo0211goo/items/8aa892cf32e4d8e5fdb3",
  },
] as const;

export const metadata: Metadata = {
  title: "参考リンク集 | KCS ExVision 2025",
  description: "KCS ExVision 2025に関連する主要リンク。",
};

const ResourcesPage = () => (
  <MainContent>
    <Container>
      <section>
        <h1>参考リンク集</h1>
        <ul>
          {REFERENCES.map((reference) => (
            <li key={reference.url}>
              <a href={reference.url} target="_blank" rel="noopener noreferrer">
                {reference.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  </MainContent>
);

export default ResourcesPage;
