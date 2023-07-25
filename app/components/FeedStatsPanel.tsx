import { FeedStats } from "@/models/feedStats";
import { FeedViewMode } from "@/models/feedViewMode";
import { LightBulbIcon, BoltIcon } from "@heroicons/react/24/solid";

export function FeedStatsPanel({ stats, viewMode, setViewMode }:
  { stats: FeedStats, viewMode: FeedViewMode, setViewMode: (viewMode: FeedViewMode) => void }) {

  return <div className="stats stats-vertical md:stats-horizontal shadow mx-auto mb-4 border border-white">
    <button
      type="button"
      onClick={() => setViewMode(FeedViewMode.Total)}
      className="text-left">
      <div className={"stat text-xl xl:text-4xl " + (viewMode === FeedViewMode.Total ? "bg-neutral" : "")}>
        <div className="stat-figure text-primary">
          <LightBulbIcon className="w-6 h-6" />
        </div>
        <div className="stat-title mb-2">Total Opportunities</div>
        <div className="stat-value text-primary mb-2 text-xl md:text-4xl">{stats.totalItems}</div>
        <div className="stat-desc text-sm xl:text-xl">Created in the last 2 months</div>
      </div>
    </button>

    <button
      type="button"
      onClick={() => setViewMode(FeedViewMode.Recently)}
      className="text-left">
      <div className={"stat text-xl xl:text-4xl " + (viewMode === FeedViewMode.Recently ? "bg-neutral" : "")}>
        <div className="stat-figure text-secondary">
          <BoltIcon className="w-6 h-6" />
        </div>
        <div className="stat-title mb-2">Items Published Recently</div>
        <div className="stat-value text-secondary mb-2 text-xl md:text-4xl">{stats.itemsPublishedInPastWeek}</div>
        <div className="stat-desc text-sm xl:text-xl">In the past week</div>
      </div>
    </button>
  </div>
}