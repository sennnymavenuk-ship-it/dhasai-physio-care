import React, { useState } from 'react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeSection } from './components/HomeSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { ExercisesSection } from './components/ExercisesSection';
import { BookingSection } from './components/BookingSection';
import { DoctorProfileSection } from './components/DoctorProfileSection';
import { TipsSection } from './components/TipsSection';
import { SupportStaffSection } from './components/SupportStaffSection';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string>('');

  const handleBookClick = (treatmentTitle?: string) => {
    if (treatmentTitle) {
      setSelectedTreatmentForBooking(treatmentTitle);
    }
    setActiveTab('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#2D332F] font-sans antialiased selection:bg-[#5B8A72]/20 selection:text-[#2D332F]">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onBookClick={() => handleBookClick()}
      />

      {/* Main Screen Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeSection
            setActiveTab={setActiveTab}
            onBookClick={() => handleBookClick()}
          />
        )}

        {activeTab === 'treatments' && (
          <TreatmentsSection
            setActiveTab={setActiveTab}
            onBookClick={() => handleBookClick()}
          />
        )}

        {activeTab === 'exercises' && <ExercisesSection />}

        {activeTab === 'booking' && (
          <BookingSection initialTreatment={selectedTreatmentForBooking} />
        )}

        {activeTab === 'doctor' && (
          <DoctorProfileSection
            setActiveTab={setActiveTab}
            onBookClick={() => handleBookClick()}
          />
        )}

        {activeTab === 'support' && (
          <SupportStaffSection 
            setActiveTab={setActiveTab} />
        )}

        {activeTab === 'tips' && (
          <TipsSection
            setActiveTab={setActiveTab}
            onBookClick={() => handleBookClick()}
          />
        )}
      </main>

      {/* Clinic Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
