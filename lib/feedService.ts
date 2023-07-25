import { EuropaRSS, } from '@/models/europaRss';
import { parseStringPromise } from 'xml2js'

export class FeedService {
  async getFeed(): Promise<EuropaRSS | null> {
    const tenderRssFeed = await fetch('https://ec.europa.eu/info/funding-tenders/opportunities/data/referenceData/grantTenders-rss.xml', {
      method: 'GET'
    });

    if (!tenderRssFeed.ok) {
      return null
    }

    const xml = await tenderRssFeed.text();
    const europaRss: EuropaRSS = await parseStringPromise(xml, { explicitArray: false });

    return europaRss;
  }
}