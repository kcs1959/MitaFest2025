import type { Metadata } from "next";
import Container from "@/app/components/Container";
import MainContent from "@/app/components/MainContent";

const FLOW = [
  "受付でテーマと注意事項を案内（約1分）",
  "興味のあるゾーンを選んで移動",
  "作品デモやプレイ体験（5〜10分）",
  "制作背景のパネル確認",
  "一問チャレンジや操作体験で締めくくり",
] as const;

const TIPS = [
  "滞在目安は10〜20分。混雑時はスタッフが順番を整理します。",
  "操作に迷ったら近くのスタッフへ声をかけてください。",
  "展示ごとに撮影可否を表示します。人物撮影は事前確認をお願いします。",
] as const;

const ACCESS = [
  "JR山手線・京浜東北線 田町駅 西口から徒歩約8分",
  "都営三田線・浅草線 三田駅 A3出口から徒歩約7分",
  "都営大江戸線 赤羽橋駅 赤羽橋口から徒歩約15分",
] as const;

const FAQ = [
  "未経験でも楽しめますか？ → はい。スタッフが常時サポートし、ヒントカードも用意します。",
  "作品は持ち帰れますか？ → 体験のみと配布予定のものがあります。最新情報は会場掲示をご確認ください。",
  "団体で参加できますか？ → 可能です。5名以上は入室タイミングを調整する場合があります。",
] as const;

export const metadata: Metadata = {
  title: "来場ガイド・FAQ | KCS ExVision 2025",
  description: "KCS ExVision 2025の体験フロー、滞在ヒント、FAQ、アクセス情報。",
};

const GuidePage = () => (
  <MainContent>
    <Container>
      <section>
        <h1>来場ガイド</h1>
        <p>
          当日の流れと基本情報をコンパクトにまとめました。迷った場合はスタッフにお声がけください。
        </p>
      </section>
    </Container>

    <Container>
      <section>
        <h2>体験の流れ</h2>
        <ol>
          {FLOW.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </Container>

    <Container>
      <section>
        <h2>スムーズに楽しむコツ</h2>
        <ul>
          {TIPS.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>
    </Container>

    <Container>
      <section>
        <h2>よくある質問</h2>
        <ul>
          {FAQ.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </Container>

    <Container>
      <section>
        <h2>アクセス</h2>
        <p>会場：慶應義塾大学 三田キャンパス（教室は確定次第掲載）</p>
        <ul>
          {ACCESS.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>バリアフリー経路や入場ルールの最新情報は三田祭公式サイトをご確認ください。</p>
      </section>
    </Container>
  </MainContent>
);

export default GuidePage;
