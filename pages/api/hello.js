// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const options = {
  method: 'GET',
  headers: {
      'X-RapidAPI-Key': process.env.NBA_API_KEY,
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
}; 

export default async function handler(req, res) {
  const {
    query: { year, id},
  } = req;

  const baseUrl = `https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=${year}&team=${id}`;
  const response = await fetch(baseUrl, options)

  res.status(200).json({
  data: response.response,
  });
}
