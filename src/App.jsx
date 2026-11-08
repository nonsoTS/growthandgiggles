import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ProgramsPage from '@/pages/ProgramsPage';
import AIForMarketersPage from '@/pages/AIForMarketersPage';
import IncubatorPage from '@/pages/IncubatorPage';
import CommunityPage from '@/pages/CommunityPage';
import ForOrganisationsPage from '@/pages/ForOrganisationsPage';
import AboutPage from '@/pages/AboutPage';
import ResourcesPage from '@/pages/ResourcesPage';
import ContactPage from '@/pages/ContactPage';
import { usePageTracking } from '@/lib/utils'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    // Force dark mode globally
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground flex flex-col relative font-sans">
      <ScrollToTop />
      {usePageTracking()}
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/ai-for-marketers" element={<AIForMarketersPage />} />
          <Route path="/incubator" element={<IncubatorPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/for-organisations" element={<ForOrganisationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all route to redirect to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;