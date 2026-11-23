import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import CommandCenter from './components/CommandCenter';
import AIWarRoom from './components/AIWarRoom';
import DriverHub from './components/DriverHub';
import TechTracker from './components/TechTracker';
import SponsorshipMachine from './components/SponsorshipMachine';
import BudgetTracker from './components/BudgetTracker';
import WeekendPlan from './components/WeekendPlan';

import { AuthProvider } from './components/AuthProvider';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<CommandCenter />} />
            <Route path="/ai" element={<AIWarRoom />} />
            <Route path="/drivers" element={<DriverHub />} />
            <Route path="/tech" element={<TechTracker />} />
            <Route path="/sponsorship" element={<SponsorshipMachine />} />
            <Route path="/budget" element={<BudgetTracker />} />
            <Route path="/weekend" element={<WeekendPlan />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}
