const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
import { NextApiRequest, NextApiResponse } from "next";
import events from "../../data/eventsData";

const mysitemap = async (req: NextApiRequest, res: NextApiResponse) => {
  // An array with your links

  const eventPageLinks = events.map((event) => {
    return {
      url: `/events/${event.path}`,
      changefreq: "daily",
      priority: 0.9,
    };
  });

  const links = [
    { url: "/", changefreq: "daily", priority: 1 },
    { url: "/events", changefreq: "daily", priority: 0.9 },
    { url: "/sponsors", changefreq: "daily", priority: 0.9 },
    ...eventPageLinks,
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
