import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

export default function Landing() {
  return (
    <div className="min-h-screen w-full bg-[#000000] flex flex-col font-sans overflow-hidden text-white selection:bg-white selection:text-[#000000]">
      
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 z-10 w-full shrink-0">
        <div className="flex items-center gap-1 font-black text-xl tracking-tight leading-none bg-white text-[#000000] px-2 py-1 rounded-sm select-none">
          G
        </div>
        
        <div className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wide">
          <span className="cursor-pointer flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            Coverage Options
          </span>
          <span className="cursor-pointer flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            Trigger Network 
          </span>
          <span className="cursor-pointer flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            Gig Platforms 
          </span>
          <Link to="/dashboard" className="cursor-pointer hover:opacity-80 transition-opacity">
            Worker Dashboard
          </Link>
          <Link to="/admin" className="cursor-pointer hover:opacity-80 transition-opacity">
            Admin Portal
          </Link>
        </div>
        
        <Link 
          to="/onboarding" 
          className="bg-white text-black font-semibold text-sm px-6 py-2.5 rounded hover:bg-gray-100 transition-colors"
        >
          Activate Coverage
        </Link>
      </nav>

      {/* Main Graphic Layer */}
      <main className="flex-1 w-full relative flex items-center justify-center py-2 px-8 lg:px-16 shrink-0 z-0">
        
        <div className="w-full h-[65vh] xl:h-[75vh] max-w-[1400px] mx-auto relative rounded-3xl overflow-hidden">
            {/* Interactive Spline 3D Integration */}
         <div className="w-full h-full relative spline-container">
           {/* Hiding the spline logo/watermark overlay */}
           <style>{`
             .spline-container a { display: none !important; opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; }
           `}</style>
           <Spline scene="https://prod.spline.design/Cj0g56C3a624cvuV/scene.splinecode" />
         </div>
        </div>

      </main>

      {/* Footer Text */}
      <footer className="w-full flex justify-between items-end px-6 pb-6 pt-4 shrink-0 relative z-10">
        <h1 className="text-3xl font-bold tracking-tighter leading-none select-none flex items-center gap-2">
           GigShield
        </h1>
        <p className="text-xl md:text-2xl font-serif tracking-tight select-none opacity-90">
          Smart Parametric Coverage
        </p>
      </footer>
    </div>
  );
}
