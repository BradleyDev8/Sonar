import { EuropaRSSItem } from "@/models/europaRss";
import Link from "next/link";

export function ItemFeed({ items }: { items: EuropaRSSItem[] }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 mx-auto gap-y-6">
    {items.map((item: EuropaRSSItem) => (
      <div className="card w-96 bg-neutral shadow-xl border-white" key={item.guid}>
        <div className="card-body">
          <h2 className="card-title text-primary">
            <Link href={item.guid}> {item.title}</Link>
          </h2>

          <p className="card-text">Created: {item.pubDate}</p>

        </div>
      </div>
    ))}
  </div>
}