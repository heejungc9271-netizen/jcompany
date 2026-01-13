
import { GoogleGenAI, Type } from "@google/genai";
import { IndustryData } from "../types";

export const getMarketInsights = async (industry: string, region: string): Promise<IndustryData> => {
  // 인스턴스를 호출 직전에 생성하여 최신 API 키 상태를 반영
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `대표님께서 요청하신 업종 [${industry}]과 지역 [${region}]에 대한 공공조달(나라장터) 시장 분석을 수행해줘. 실무 전문가 관점에서 매우 구체적이고 신뢰감 있는 데이터를 시뮬레이션해서 JSON 형식으로 반환해.`,
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
    if (!text) throw new Error("응답 데이터가 비어있습니다.");
    return JSON.parse(text);
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    throw new Error("데이터 분석 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
};
