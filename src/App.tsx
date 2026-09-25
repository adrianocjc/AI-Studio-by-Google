import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NisiaBiography } from './components/NisiaBiography';
import { HeritageCatalog } from './components/HeritageCatalog';
import { RoutesSection } from './components/RoutesSection';
import { InteractiveMap } from './components/InteractiveMap';
import { LivingCulture } from './components/LivingCulture';
import { StrategicPlan } from './components/StrategicPlan';
import { ItineraryPlanner } from './components/ItineraryPlanner';
import { Footer } from './components/Footer';
import { SiteModal } from './components/SiteModal';
import { VisitorGuideModal } from './components/VisitorGuideModal';
import { HeritageSite, TouristRoute } from './types';
import { HERITAGE_SITES } from './data/heritageData';

export default function App() {
  const [selectedSite, setSelectedSite] = useState<HeritageSite | null>(null);
  const [plannerSiteIds, setPlannerSiteIds] = useState<string[]>([
    'matriz-senhora-do-o',
    'baoba-centenario',
    'museu-mausoleu-nisia',
    'rendas-labirinto-alcacuz'
  ]);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // Add/remove site from user's custom trip planner
  const handleTogglePlannerSite = (siteId: string) => {
    setPlannerSiteIds((prev) =>
      prev.includes(siteId) ? prev.filter((id) => id !== siteId) : [...prev, siteId]
    );
  };

  // Pre-load an entire curated route into the planner and scroll down
  const handleLoadRouteToPlanner = (route: TouristRoute) => {
    const routeSiteIds = route.stops
      .map((s) => s.siteId)
      .filter((id): id is string => Boolean(id));
    
    setPlannerSiteIds((prev) => Array.from(new Set([...prev, ...routeSiteIds])));
    
    // Smooth scroll to planner
    const plannerEl = document.getElementById('planejador-roteiro');
    if (plannerEl) {
      plannerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPlanner = () => {
    const plannerEl = document.getElementById('planejador-roteiro');
    if (plannerEl) {
      plannerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreRoutes = () => {
    const routesEl = document.getElementById('rotas-turisticas');
    if (routesEl) {
      routesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-stone-900 selection:bg-amber-900 selection:text-white">
      {/* 3-Zone Header Contract */}
      <Header
        onOpenPlanner={handleOpenPlanner}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreRoutes={handleExploreRoutes}
          onOpenPlanner={handleOpenPlanner}
        />

        {/* Nísia Floresta Biography & Memorial with Audio Narrator */}
        <NisiaBiography />

        {/* Heritage Catalog (Architecture, Nature, Ruins, Immaterial) */}
        <HeritageCatalog
          onSelectSite={(site) => setSelectedSite(site)}
          plannerSiteIds={plannerSiteIds}
          onTogglePlannerSite={handleTogglePlannerSite}
        />

        {/* 4 Strategic Tourist Routes */}
        <RoutesSection onLoadRouteToPlanner={handleLoadRouteToPlanner} />

        {/* Territory Vector Interactive Map */}
        <InteractiveMap onSelectSite={(site) => setSelectedSite(site)} />

        {/* Living Culture: Labirinto Embroidery, Gastronomy, Folklore */}
        <LivingCulture />

        {/* Strategic Development Plan for Cultural Tourism */}
        <StrategicPlan />

        {/* Interactive Custom Itinerary Planner */}
        <ItineraryPlanner
          selectedSiteIds={plannerSiteIds}
          onToggleSite={handleTogglePlannerSite}
          onClearPlanner={() => setPlannerSiteIds([])}
        />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Detailed Monument Accession Modal */}
      <SiteModal
        site={selectedSite}
        onClose={() => setSelectedSite(null)}
        onAddToPlanner={handleTogglePlannerSite}
        isAddedToPlanner={Boolean(selectedSite && plannerSiteIds.includes(selectedSite.id))}
      />

      {/* Practical Visitor Guide Modal */}
      <VisitorGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
