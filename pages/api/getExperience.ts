// nextjs API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experience } from "../../typings";
// import { PageInfo, Social } from "../../typings";

const query = groq`
*[_type == "experience"]{
    ...,
    technologies[]->
    
  }
`;

type Data = {
  experiences: Experience[];
};
//set up nextjs endpoint

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experience[] = await sanityClient.fetch(query);
  res.status(200).json({ experiences });
}
