import { FeedService } from "@/lib/feedService"
import { EuropaRSS } from "@/models/europaRss";
import { FeedDashboard } from "./components/FeedDashboard";


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

  return (
    <main className="flex flex-col">
      <FeedDashboard feed={feed} />
    </main>
  )
}
