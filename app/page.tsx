import { FeedService } from "@/lib/feedService"
import { EuropaRSS, EuropaRSSItem } from "@/models/europaRss";
import { FeedStats } from "@/models/feedStats";
import { BoltIcon } from "@heroicons/react/20/solid";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { ItemFeed } from "./components/ItemFeed";
import { FeedStatsPanel } from "./components/FeedStatsPanel";

enum ViewingMode {
  All,
  PublishedInPastWeek
}

export default async function Home() {
  const feedService = new FeedService();
  const feed: EuropaRSS | null = await feedService.getFeed();

  if (feed === null) {
    return <main className="flex flex-col h-[95vh]">
      <div className="hero bg-base-200 my-auto h-full">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Data Unavailable</h1>
            <p className="py-6">Sorry about that, the feed is currently unavailable. Please check back later</p>
          </div>
        </div>
      </div>
    </main>
  }

  const feedStatistics: FeedStats = feedService.getFeedStatistics(feed);
  const feedItems: EuropaRSSItem[] = feedService.getFeedItems(feed);

  return (
    <main className="flex flex-col">
      <FeedStatsPanel stats={feedStatistics} />
      <ItemFeed items={feedItems} />
    </main>
  )
}
