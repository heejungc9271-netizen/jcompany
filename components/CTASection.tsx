
import React from 'react';

interface CTASectionProps {
  onApply?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onApply }) => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-navy">
          🔗 교육 / 상담 신청
        </h2>
        <p className="text-xl text-slate-600 mb-12">
          "시행착오는 오늘로 끝내고, 매출로 증명하십시오."
        </p>

        <div className="flex justify-center">
          <button
            onClick={onApply}
            className="flex items-center justify-center gap-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-navy px-12 py-7 rounded-3xl font-black text-xl hover:from-yellow-300 hover:to-amber-400 transition-all shadow-[0_20px_40px_rgba(245,158,11,0.3)] hover:shadow-[0_25px_50px_rgba(245,158,11,0.5)] transform hover:-translate-y-1 active:scale-95 group w-full sm:w-auto min-w-[360px]"
          >
            <span className="text-3xl group-hover:scale-125 group-hover:rotate-12 transition-transform">📍</span>
            <span>실전 조달 교육 신청하기</span>
          </button>
        </div>

        <div className="mt-16 p-8 bg-blue-50 border border-blue-100 rounded-3xl max-w-2xl mx-auto">
          <p className="text-blue-800 font-semibold leading-relaxed">
            📢 현재 예약 상담이 많아 당일 피드백이 지연될 수 있습니다. <br/>
            업종명을 남겨주시면 담당 전문가가 분석 자료와 함께 연락드립니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
