import  {articles} from '../../../data';

export default async ({ query: { id } }, res) => {
  const article = articles.find((item) => item.id === id) ?? null;

  res.status(200).json(article);
};
