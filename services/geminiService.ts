
import { GoogleGenAI, Type } from "@google/genai";
import { IndustryData } from "../types";

export const getMarketInsights = async (industry: string, region: string): Promise<IndustryData> => {
  // 브라우저 환경에서 process 객체 부재로 인한 Crash 방지
  const env = (globalThis as any).process?.env || {};
  const apiKey = env.API_KEY || "";
  
  if (!apiKey) {
    throw new Error("API Key가 설정되지 않았습니다.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `업종 [${industry}]과 지역 [${region}]에 대한 공공조달 시장 분석을 수행해줘. JSON 형식으로 반환해.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          industryName: { type: Type.STRING },
          summary: { type: Type.STRING },
          insights: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                region: { type: Type.STRING },
                activityLevel: { type: Type.STRING },
                expectedProfit: { type: Type.STRING },
                opportunityIndex: { type: Type.STRING },
                hotBids: { type: Type.NUMBER },
                avgWinRate: { type: Type.NUMBER }
              },
              required: ["region", "activityLevel", "expectedProfit", "opportunityIndex", "hotBids", "avgWinRate"]
            }
          },
          trendData: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                month: { type: Type.STRING },
                value: { type: Type.NUMBER }
              },
              required: ["month", "value"]
            }
          }
        },
        required: ["industryName", "summary", "insights", "trendData"]
      }
    }
  });

  try {
    const text = response.text;
    if (!text) throw new Error("Empty response");
    return JSON.parse(text);
  } catch (e) {
    console.error("Gemini API Error:", e);
    throw new Error("시장 분석 데이터를 불러오는 중 오류가 발생했습니다.");
  }
};
