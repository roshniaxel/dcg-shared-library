export interface NewsProps {
  articles: {
    id: number;
    title: string;
    link: string;
    image: string;
  }[];
  bgColor?: string;
  textColor?: string;
}

const News: React.FC<NewsProps> = ({ articles, bgColor = "white", textColor = "black" }) => {
  return (
    <div style={{ backgroundColor: bgColor, color: textColor }} className="p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Related Articles</h2>

      {articles.length === 0 ? (
        <p className="text-gray-500">No articles available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <div key={article.id || `article-${index}`} className="bg-white p-5 rounded-lg shadow-md">
              <img 
                src={article.image || "/default-image.jpg"} 
                alt={article.title} 
                className="w-full h-full object-cover rounded-md" 
                onError={(e) => (e.currentTarget.src = "/default-image.jpg")} // Handle broken image links
              />
              <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
              <a href={article.link} className="text-blue-500 hover:underline mt-2 inline-block">
                Read More →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
