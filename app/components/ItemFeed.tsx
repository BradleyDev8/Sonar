import { FeedItem } from "@/models/feedItem";
import { FeedViewMode } from "@/models/feedViewMode";
import Link from "next/link";

export function ItemFeed({ items, viewMode }: { items: FeedItem[], viewMode: FeedViewMode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 mx-auto gap-y-6 mb-12">
    {items.map((item: FeedItem) => (
      <Link
        href={item.guid}
        target="_blank"
        className="card w-96 bg-neutral shadow-xl border-white hover:animate-pulse hover:cursor-pointer"
        key={item.guid}>
        <div className="h-full">
          <div className="card-body justify-between h-full">
            <h2 className={"card-title " + (viewMode === FeedViewMode.Total ? "text-primary" : "text-secondary")}>
              {item.title}
            </h2>

            <div className="flex flex-col">
              <p>Created: {item.fromNow}</p>
              <p className="text-neutral-400 text-xs">{item.pubDate}</p>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
}