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
declare const News: React.FC<NewsProps>;
export default News;
//# sourceMappingURL=News.d.ts.map