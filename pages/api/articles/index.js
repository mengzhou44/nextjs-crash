import {articles} from '../../../data';

export default async (req, res) => {
  res.status(200).json(articles);
};
