
import { GoogleGenAI, Type } from "@google/genai";
import { IndustryData } from "../types";

export const getMarketInsights = async (industry: string, region: string): Promise<IndustryData> => {
  // 브라우저 런타임에서 process가 없을 경우를 대비한 안전한 체크
  const env = (globalThis as any).process?.env || {};
  const apiKey = env.API_KEY || "";
  
  if (!apiKey) {
    throw new Error("API Key가 설정되지 않았습니다.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `대표님께서 요청하신 업종 [${industry}]과 지역 [${region}]에 대한 공공조달 시장 분석을 수행해줘. 실무 전문가 관점에서 구체적인 데이터를 JSON 형식으로 반환해.`,
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
    console.error("Gemini Parse Error:", e);
    throw new Error("시장 데이터 분석 중 오류가 발생했습니다.");
  }
};
