
export interface MarketInsight {
  region: string;
  activityLevel: string;
  expectedProfit: string;
  opportunityIndex: string;
  hotBids: number;
  avgWinRate: number;
}

export interface IndustryData {
  industryName: string;
  summary: string;
  insights: MarketInsight[];
  trendData: { month: string; value: number }[];
}
