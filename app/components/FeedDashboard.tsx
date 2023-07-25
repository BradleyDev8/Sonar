"use client"
import { EuropaRSS } from "@/models/europaRss";
import { FeedStatsPanel } from "./FeedStatsPanel";
import { ItemFeed } from "./ItemFeed";
import { FeedMapper } from "@/lib/feedMapper";
import { FeedStats } from "@/models/feedStats";
import { FeedItem } from "@/models/feedItem";
import { useState, useMemo } from "react";
import { FeedViewMode } from "@/models/feedViewMode";


export function FeedDashboard({ feed }: { feed: EuropaRSS }) {
  const [viewMode, setViewMode] = useState<FeedViewMode>(FeedViewMode.Total);

  const feedMapper = new FeedMapper()
  const feedStats: FeedStats = feedMapper.mapEuropaRSSFeedStats(feed);

  const feedItems: FeedItem[] = useMemo(() => {
    return feedMapper.mapEuropaRssFeedItems(feed, viewMode);
  }, [viewMode]);


  return (
    <div className="flex flex-col">
      <FeedStatsPanel stats={feedStats} viewMode={viewMode} setViewMode={setViewMode} />
      <ItemFeed items={feedItems} viewMode={viewMode} />
    </div>
  )
}