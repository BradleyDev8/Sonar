import { EuropaRSS, EuropaRSSItem } from "@/models/europaRss";
import { FeedItem } from "@/models/feedItem";
import { FeedStats } from "@/models/feedStats";
import { FeedViewMode } from "@/models/feedViewMode";
import moment from "moment";


export class FeedMapper {
  private lastWeekFilter(item: EuropaRSSItem): boolean {
    const itemDate = new Date(item.pubDate);
    const today = new Date();
    const weekAgo = new Date(today.setDate(today.getDate() - 7));

    return itemDate >= weekAgo;
  }

  private mapEuropaRSSFeedItems(rssItem: EuropaRSSItem): FeedItem {
    return {
      ...rssItem,
      fromNow: moment(rssItem.pubDate).fromNow()
    }
  }

  mapEuropaRSSFeedStats(feed: EuropaRSS): FeedStats {
    const items = feed.rss.channel.item;
    const totalItems = items.length;

    const itemsPublishedInPastWeek = items.filter((item) => this.lastWeekFilter(item));

    return {
      totalItems: totalItems,
      itemsPublishedInPastWeek: itemsPublishedInPastWeek.length
    }
  }

  mapEuropaRssFeedItems(feed: EuropaRSS, viewMode: FeedViewMode): FeedItem[] {
    if (viewMode === FeedViewMode.Total) {
      return feed.rss.channel.item.map((item) => this.mapEuropaRSSFeedItems(item));
    } else {
      return feed.rss.channel.item
        .filter((item) => this.lastWeekFilter(item))
        .map((item) => this.mapEuropaRSSFeedItems(item));
    }
  }
}