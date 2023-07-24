import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const tenderRssFeed = await fetch('https://ec.europa.eu/info/funding-tenders/opportunities/data/referenceData/grantTenders-rss.xml', {
    method: 'GET'
  });

  console.log(tenderRssFeed.text());

  return NextResponse.json({}, { status: 200 });
}