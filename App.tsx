
import React from 'react';
import ValueSection from './components/ValueSection';
import DataBoard from './components/DataBoard';
import CTASection from './components/CTASection';

const GOOGLE_FORM_URL = "https://forms.gle/bJB9LtBJisgrzoNw6";

const Header: React.FC = () => (
  <header className="relative bg-navy text-white pt-24 pb-36 px-4 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
       <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
       <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 rounded-full blur-[120px]"></div>
    </div>
    
    <div className="relative max-w-6xl mx-auto text-center animate-fade-in">
      <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-bold mb-6 backdrop-blur-sm border border-blue-500/30">
        대한민국 No.1 조달 전략 컨설팅
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight px-2">
        공공조달 <br className="md:hidden" />
        <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.6)]">낙찰의 공식</span>
        <span className="text-white">을</span> <br className="md:hidden" />
        <span className="hidden md:inline"><br/></span>
        깨우다
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed px-4">
        데이터는 거짓말을 하지 않습니다. <br className="md:hidden" />
        전략가들이 설계하는 압도적인 수주 성과, <br className="md:hidden" />
        이제 대표님의 차례입니다.
      </p>
    </div>
  </header>
);

const App: React.FC = () => {
  const handleApply = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="-mt-16 relative z-10 flex-grow">
        <ValueSection />
        <DataBoard />
        <CTASection onApply={handleApply} />
      </main>

      <footer className="bg-slate-900 text-slate-500 py-12 px-4 border-t border-slate-800 pb-32 md:pb-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">
            &copy; 2024 Procurement Strategy Master. All rights reserved.
          </div>
          <div className="flex gap-8 text-xs font-medium uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md">
        <button 
          onClick={handleApply}
          className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-navy py-5 rounded-2xl font-black shadow-[0_15px_35px_rgba(245,158,11,0.5)] border border-white/30 text-lg active:scale-95 transition-all transform"
        >
          실전 조달 교육 신청하기 📍
        </button>
      </div>
    </div>
  );
};

export default App;
