
import React from 'react';

const ValueSection: React.FC = () => {
  const marketStats = [
    {
      icon: '📈',
      title: '역대급 규모',
      desc: <>연간 계약액 <span className="text-blue-600 font-bold">225.1조 원</span></>,
      sub: '(GDP의 9%, 사상 최대치)'
    },
    {
      icon: '🤝',
      title: '중소기업의 기회',
      desc: <>전체 계약의 <span className="text-blue-600 font-bold">63.1%</span></>,
      sub: '중소기업 우선 수주 원칙'
    },
    {
      icon: '🚀',
      title: '예산 역대 최대',
      desc: <><span className="text-blue-600 font-bold">2026년 지원 예산 확대</span></>,
      sub: '혁신제품 지원금 60% 증액'
    }
  ];

  const values = [
    {
      id: '01',
      tag: 'NETWORK',
      title: (
        <>
          업계 사람만 아는 <span className="font-extrabold text-blue-600">'진짜 정보'</span>
        </>
      ),
      items: [
        <>인터넷 검색으로는 안 나오는 <span className="font-bold text-slate-900">현장 뒷이야기</span>를 공유합니다.</>,
        <>공고문 속에 숨겨진 의도를 파악해 <span className="font-bold text-slate-900">맞춤형 전략</span>을 짜드립니다.</>,
        <><span className="font-bold text-slate-900">공공조달 현직 전문가</span>들이 즉시 해결책을 알려드립니다.</>
      ],
      icon: '🌐'
    },
    {
      id: '02',
      tag: 'DATA',
      title: (
        <>
          통계로 맞히는 <span className="font-extrabold text-blue-600">'낙찰 가격'</span>
        </>
      ),
      items: [
        <>기존 <span className="font-bold text-slate-900">공공조달 데이터를 분석</span>하여 정보를 제시합니다.</>,
        <>"운"에 맡기지 않고 <span className="font-bold text-slate-900">수학적으로 계산된 '당첨 확률 높은 가격'</span>을 제안합니다.</>,
        <>우리 업종에 딱 맞는 <span className="font-bold text-slate-900">필승 가격 설계도</span>를 제공합니다.</>
      ],
      icon: '📊'
    },
    {
      id: '03',
      tag: 'COACHING',
      title: (
        <>
          <span className="font-extrabold text-slate-900">전문가가 옆에서 잡아주는 1:1 밀착 가이드</span>
        </>
      ),
      items: [
        <><span className="font-bold text-slate-900">성공률이 높은 공고</span> 골라내는 법을 가르쳐 드립니다.</>,
        <>서류 준비부터 계약까지, <span className="font-bold text-slate-900">전 과정</span>을 옆에서 같이 <span className="font-bold text-slate-900">도와드립니다</span>.</>,
        <>낙찰받고 난 뒤 복잡한 서류 작업과 납품 관리까지 <span className="font-bold text-slate-900">끝까지 책임</span>집니다.</>
      ],
      icon: '🎓'
    },
    {
      id: '04',
      tag: 'ADMIN',
      title: (
        <>
          실수 없는 <span className="font-extrabold text-blue-600">'안전한 길'</span>
        </>
      ),
      items: [
        <>까다로운 나라장터 등록부터 서류 검토까지 <span className="font-bold text-slate-900">알아서 세팅을 도와드립니다</span>.</>,
        <>실수로 입찰 자격을 잃거나 불이익을 당하지 않게 <span className="font-bold text-slate-900">미리 차단</span>합니다.</>,
        <><span className="font-bold text-slate-900">가장 빠르고 편하게 수익</span>을 낼 수 있는 지름길을 안내합니다.</>
      ],
      icon: '🛡️'
    }
  ];

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      {/* Market Data Section */}
      <div className="mb-32 text-center">
        <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-lg text-sm font-bold mb-4">
          MARKET INSIGHT 2026
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
          매년 커지는 역대급 시장
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 font-medium mb-12 italic">
          "2026년 정부 예산이 향하는 곳은 결국 조달입니다."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marketStats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 transition-transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h4 className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-2">{stat.title}</h4>
              <p className="text-xl font-extrabold text-navy mb-1">{stat.desc}</p>
              <p className="text-slate-500 text-sm">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          당신의 낙찰을 확정 짓는 4대 핵심 전략
        </h2>
        <p className="text-xl text-slate-600 font-medium">
          "조달 시장의 승패는 오직 '검증된 정보'에서 갈립니다."
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
        {values.map((v) => (
          <div key={v.id} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-7xl opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all">
              {v.icon}
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-navy text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider">
                {v.id}. {v.tag}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-navy leading-tight">
              {v.title}
            </h3>
            <ul className="space-y-5">
              {v.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-600 leading-relaxed text-lg">
                  <span className="text-blue-500 mt-1.5 text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueSection;
