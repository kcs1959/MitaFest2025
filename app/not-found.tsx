import Link from "next/link";
import MainContent from "@/app/components/MainContent";
import Container from "@/app/components/Container";

export const metadata = {
  title: "KCS ExVision 2025",
};

const NotFoundPage = () => {
  return (
    <MainContent>
      <Container>
        <section>
          <h2>ページが見つかりませんでした</h2>
          <p>KCS ExVision 2025 の特設情報はトップページに集約しています。</p>
          <p>
            <Link href="/">トップページへ戻る</Link>
          </p>
        </section>
      </Container>
    </MainContent>
  );
};

export default NotFoundPage;
