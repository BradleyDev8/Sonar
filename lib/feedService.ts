import { EuropaRSS, EuropaRSSItem } from '@/models/europaRss';
import { FeedStats } from '@/models/feedStats';
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

  getFeedStatistics(feed: EuropaRSS): FeedStats {
    const items = feed.rss.channel.item;
    const totalItems = items.length;

    const itemsPublishedInPastWeek = items.filter(item => {
      const itemDate = new Date(item.pubDate);
      const today = new Date();
      const weekAgo = new Date(today.setDate(today.getDate() - 7));

      return itemDate >= weekAgo;
    });

    return {
      totalItems: totalItems,
      itemsPublishedInPastWeek: itemsPublishedInPastWeek.length
    }
  }

  getFeedItems(feed: EuropaRSS): EuropaRSSItem[] {
    return feed.rss.channel.item;
  }

  getFeedItemsPublishedInPastWeek(feed: EuropaRSS): EuropaRSSItem[] {
    const items = feed.rss.channel.item;

    return items.filter(item => {
      const itemDate = new Date(item.pubDate);
      const today = new Date();
      const weekAgo = new Date(today.setDate(today.getDate() - 7));

      return itemDate >= weekAgo;
    });
  }
}