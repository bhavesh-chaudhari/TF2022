const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
import { NextApiRequest, NextApiResponse } from "next";

const mysitemap = async (req: NextApiRequest, res: NextApiResponse) => {
  // An array with your links
  const links = [
    { url: "/", changefreq: "daily", priority: 1 },
    { url: "/events", changefreq: "daily", priority: 0.9 },
    { url: "/events/hackme", changefreq: "daily", priority: 0.8 },
    { url: "/events/codefiesta", changefreq: "daily", priority: 0.8 },
    { url: "/events/robo-rumble", changefreq: "daily", priority: 0.8 },
    { url: "/events/clash-of-words", changefreq: "daily", priority: 0.8 },
    { url: "/events/designathon", changefreq: "daily", priority: 0.8 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data: any) => data.toString());

  res.end(xmlString);
};

export default mysitemap;
