
import React, { useState } from 'react';

interface ApplicationFormProps {
  onClose: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6 animate-in fade-in duration-500">
        <div className="max-w-md w-full text-center">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <span className="text-5xl">✓</span>
          </div>
          <h2 className="text-3xl font-black text-navy mb-4">"신청이 완료되었습니다!"</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            대표님의 소중한 정보를 확인했습니다.<br/>
            남겨주신 업종의 최근 낙찰 데이터 분석을 마친 후,<br/>
            <span className="font-bold text-navy">담당 전략가가 순차적으로 연락드리겠습니다.</span>
          </p>
          <button 
            onClick={onClose}
            className="w-full bg-navy text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24 animate-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-navy">교육 신청서</h1>
          <button onClick={onClose} className="text-slate-400 hover:text-navy text-2xl font-light">✕</button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 pt-12">
        <div className="mb-12">
          <h2 className="text-3xl font-black text-navy mb-4 leading-tight">
            🚩 실전 조달 교육 &<br/>
            1:1 밀착 컨설팅 신청서
          </h2>
          <p className="text-slate-500 font-medium">
            "성공적인 첫 낙찰, 대표님의 기초 데이터 분석에서 시작됩니다." 아래 정보를 상세히 적어주실수록, 대표님 업체에 딱 맞는 '돈 되는 공고'를 더 정확히 찾아낼 수 있습니다.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* 1. 기초 정보 */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
              <span className="w-6 h-6 bg-navy text-white text-xs rounded-full flex items-center justify-center">1</span>
              기초 정보 (상담 안내용)
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">성함 및 직함</label>
                <input required type="text" placeholder="예: 홍길동 대표" className="w-full px-5 py-4 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-navy outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">연락처 (분석 결과 전달용)</label>
                <input required type="tel" placeholder="010-0000-0000" className="w-full px-5 py-4 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-navy outline-none transition-all" />
              </div>
            </div>
          </section>

          {/* 2. 업체 정보 */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
              <span className="w-6 h-6 bg-navy text-white text-xs rounded-full flex items-center justify-center">2</span>
              업체 정보 (분석의 핵심)
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">업체명</label>
                <input required type="text" placeholder="회사명을 입력해 주세요" className="w-full px-5 py-4 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-navy outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">주요 취급 품목/업종</label>
                <input required type="text" placeholder="예: 사무용 가구, 전산장비 유지보수 등" className="w-full px-5 py-4 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-navy outline-none transition-all" />
                <p className="mt-3 text-xs text-blue-600 font-medium leading-relaxed">
                  💡 전문가 소견: 업종을 정확히 적어주시면 최근 1년 낙찰가를 미리 분석하여 상담 시 제공해 드립니다.
                </p>
              </div>
            </div>
          </section>

          {/* 3. 현재 준비 상태 */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
              <span className="w-6 h-6 bg-navy text-white text-xs rounded-full flex items-center justify-center">3</span>
              현재 준비 상태 (맞춤 커리큘럼 설계용)
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                "조달 시스템 등록 전 (완전 초보)",
                "나라장터 등록 완료 (경험 없음)",
                "투찰 경험 있음 (낙찰 경험은 없음)",
                "낙찰 경험 있음 (매출 확장 필요)"
              ].map((label) => (
                <label key={label} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl cursor-pointer hover:bg-slate-100 transition-colors group">
                  <input type="radio" name="status" className="w-5 h-5 text-navy focus:ring-navy border-slate-300" />
                  <span className="text-slate-700 font-medium group-hover:text-navy transition-colors">{label}</span>
                </label>
              ))}
            </div>
          </section>

          {/* 4. 해결하고 싶은 핵심 고민 */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
              <span className="w-6 h-6 bg-navy text-white text-xs rounded-full flex items-center justify-center">4</span>
              해결하고 싶은 핵심 고민 (우선순위 결정)
            </h3>
            <div className="grid grid-cols-1 gap-3 mb-6">
              {[
                "내 업종에 맞는 '돈 되는 공고' 찾는 법",
                "떨어지지 않는 '낙찰 가격' 계산법",
                "복잡한 입찰 서류 및 행정 절차",
                "낙찰 후 계약 및 사후 관리 방법"
              ].map((label) => (
                <label key={label} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl cursor-pointer hover:bg-slate-100 transition-colors">
                  <input type="checkbox" className="w-5 h-5 rounded text-navy focus:ring-navy border-slate-300" />
                  <span className="text-slate-700 font-medium">{label}</span>
                </label>
              ))}
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">기타 의견</label>
              <textarea placeholder="기타 궁금하신 점을 자유롭게 적어주세요" className="w-full px-5 py-4 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-navy outline-none transition-all h-24 resize-none" />
            </div>
          </section>

          {/* 5. 상담 희망 시간대 */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
              <span className="w-6 h-6 bg-navy text-white text-xs rounded-full flex items-center justify-center">5</span>
              상담 희망 시간대
            </h3>
            <input type="text" placeholder="예: 평일 오후 2시 이후 / 오전 중 등" className="w-full px-5 py-4 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-navy outline-none transition-all" />
          </section>

          <button 
            type="submit"
            className="w-full bg-navy text-white py-6 rounded-3xl font-black text-xl hover:bg-slate-800 transition-all shadow-[0_20px_40px_rgba(15,23,42,0.3)] transform hover:-translate-y-1 active:scale-95"
          >
            🚀 신청 완료
          </button>
        </form>

        <p className="mt-12 text-center text-slate-400 text-sm">
          잠시만 기다려 주시면, 매출로 증명해 보이겠습니다.
        </p>
      </div>
    </div>
  );
};

export default ApplicationForm;
