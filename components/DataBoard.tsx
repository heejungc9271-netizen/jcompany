
import React, { useState, useEffect } from 'react';

const DataBoard: React.FC = () => {
  const records = [
    { agency: 'OO 육군부대', item: '병영 생활관 소모품 및 잡화 납품', price: '4,200만 원' },
    { agency: 'OO 시청 재난과', item: '안전 점검 및 시설 유지보수 용역', price: '2,800만 원' },
    { agency: 'OO 공공기관', item: '사무용 가구 및 전산 장비 교체', price: '6,500만 원' },
    { agency: 'OO 초등학교', item: '교육용 콘텐츠 및 교구재 납품', price: '1,500만 원' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % records.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [records.length]);

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* 프리미엄 배경 글로우 효과 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-600/20 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
            🏆 공공조달 낙찰 기록
          </h2>
          <p className="text-xl md:text-2xl text-blue-300 font-medium px-4">
            "대한민국 모든 국가 기관이 <br className="md:hidden" />
            대표님의 물건을 기다리고 있습니다."
          </p>
        </div>

        {/* 데스크탑: 밝은 화이트 테이블 카드 */}
        <div className="hidden md:block bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="py-8 px-10 font-bold text-slate-400 uppercase tracking-widest text-sm">수요 기관</th>
                <th className="py-8 px-10 font-bold text-slate-400 uppercase tracking-widest text-sm">입찰 품목 (Item)</th>
                <th className="py-8 px-10 font-bold text-slate-400 uppercase tracking-widest text-sm text-center">낙찰 금액</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {records.map((record, idx) => (
                <tr 
                  key={idx} 
                  className={`transition-all duration-700 ${idx === currentIndex ? 'bg-blue-50/80 scale-[1.01] z-20' : 'bg-white opacity-90'}`}
                >
                  <td className="py-9 px-10">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-blue-600 animate-ping' : 'bg-slate-200'}`}></div>
                      <span className={`font-bold text-2xl ${idx === currentIndex ? 'text-blue-600' : 'text-slate-800'}`}>
                        {record.agency}
                      </span>
                    </div>
                  </td>
                  <td className={`py-9 px-10 text-xl font-medium ${idx === currentIndex ? 'text-slate-900' : 'text-slate-400'}`}>
                    {record.item}
                  </td>
                  <td className="py-9 px-10 text-center">
                    <span className={`font-black text-3xl ${idx === currentIndex ? 'text-blue-700' : 'text-slate-300'}`}>
                      {record.price}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 모바일: 한 페이지에 하나씩 보이는 컴팩트 카드 슬라이드 */}
        <div className="md:hidden px-2">
          <div className="relative h-[280px] w-full">
            {records.map((record, idx) => (
              <div 
                key={idx} 
                className={`absolute inset-0 bg-white rounded-[2rem] shadow-2xl p-6 flex flex-col justify-center transition-all duration-1000 ease-in-out transform
                  ${idx === currentIndex 
                    ? 'opacity-100 translate-y-0 scale-100 z-20' 
                    : 'opacity-0 translate-y-8 scale-95 z-10 pointer-events-none'}`}
              >
                <div className="mb-2 flex items-center gap-2">
                   <div className="w-1.5 h-5 bg-blue-600 rounded-full"></div>
                   <span className="text-xl font-black text-blue-700 tracking-tight">
                    {record.agency}
                  </span>
                </div>
                
                <div className="mb-4">
                  <p className="text-[10px] font-bold text-slate-400 mb-0.5 uppercase tracking-wider">입찰 품목</p>
                  <h4 className="text-base font-bold text-slate-600 leading-tight">
                    {record.item}
                  </h4>
                </div>

                <div className="mt-2 pt-4 border-t border-slate-100 flex flex-col">
                  <p className="text-slate-400 text-[9px] font-bold mb-0.5 uppercase tracking-widest">FINAL WINNING BID</p>
                  <span className="text-3xl font-black text-navy tracking-tighter">
                    {record.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* 모바일 인디케이터 (Dots) */}
          <div className="flex justify-center mt-8 gap-3">
            {records.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-10 bg-blue-500' : 'w-2 bg-white/20'}`}
                aria-label={`Go to record ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center px-4">
          <div className="inline-block bg-white/10 backdrop-blur-lg border border-white/20 px-8 py-6 md:px-12 md:py-8 rounded-[2rem] shadow-2xl">
            <p className="text-lg md:text-3xl font-extrabold text-white leading-relaxed">
              📢 <span className="text-yellow-400 underline underline-offset-8 decoration-yellow-400/50">다음 주인공</span>은 대표님이 될 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataBoard;
