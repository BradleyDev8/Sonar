import { FeedStats } from "@/models/feedStats";
import { LightBulbIcon, BoltIcon } from "@heroicons/react/24/solid";

export function FeedStatsPanel({ stats }: { stats: FeedStats }) {
  return <div className="stats shadow mx-auto mb-4">
    <div className="stat text-4xl">
      <div className="stat-figure text-primary">
        <LightBulbIcon className="w-6 h-6" />
      </div>
      <div className="stat-title mb-2">Total Opportunities</div>
      <div className="stat-value text-primary mb-2">{stats.totalItems}</div>
      <div className="stat-desc text-xl">Created in the last 2 months</div>
    </div>

    <div className="stat text-4xl">
      <div className="stat-figure text-secondary">
        <BoltIcon className="w-6 h-6" />
      </div>
      <div className="stat-title mb-2">Items Published Recently</div>
      <div className="stat-value text-secondary mb-2">{stats.itemsPublishedInPastWeek}</div>
      <div className="stat-desc text-xl">In the past week</div>
    </div>
  </div>
}