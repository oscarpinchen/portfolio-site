// import mockArticles from '../../services/articleMocks'
import ArticlePreview from '../../components/articlePreview/ArticlePreview';
import Footer from '../../components/footer/Footer';
import { getNewsArticles } from '../../services/news';
import Header from '../../components/header/Header';
import { useEffect, useState } from 'react';



function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const setNewsArticles = async () => {
      const newsArticles = await getNewsArticles();
      if (newsArticles) {
        setArticles(newsArticles);
      }
    };
    setNewsArticles();
  }, []);

  return (
    <div>
      <Header
        headerTitle="NewsYouWant"
        headerSubTitle="A simple news viewer for the publications that matter."
      />
      {articles &&
        articles.map((article, i) => (
          <ArticlePreview key={i} article={article} />
        ))}
      <Footer />
    </div>
  );
}

export default Home;
