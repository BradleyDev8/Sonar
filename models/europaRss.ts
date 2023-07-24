interface EuropaRSSChannel {
  title: string;
  link: string;
  description: string;
  item: EuropaRSSItem[];
}

export interface EuropaRSSItem {
  title: string;
  link: string;
  pubDate: string;
  description?: string;
  guid: string
}

export interface EuropaRSS {
  rss: {
    channel: EuropaRSSChannel;
  }
}