import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import FooterNotice from './components/FooterNotice';
import './index.css';

// Wrapper for inner app pages that applies the previous dark theme styling
function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-dark text-light font-sans flex flex-col justify-between selection:bg-teal selection:text-dark">
      <main className="flex-1 w-full relative antialiased px-4 py-8">
        {children}
      </main>
      <FooterNotice />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        {/* Wrapped Dashboard/Internal Routes */}
        <Route path="/onboarding" element={<AppLayout><Onboarding /></AppLayout>} />
        <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
        <Route path="/admin" element={<AppLayout><Admin /></AppLayout>} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
