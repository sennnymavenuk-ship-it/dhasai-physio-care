import React, { useState } from 'react';
import { PageTab } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { Menu, X, Phone, Calendar, HeartPulse, Award } from 'lucide-react';
import clinicLogo from '../assets/images/dhasai_physio_logo_1785516521041.jpg';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'exercises', label: 'Exercises' },
    { id: 'booking', label: 'Booking' },
    { id: 'doctor', label: 'Doctor Profile' },
    { id: 'tips', label: 'Tips' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E0DCCF] shadow-2xs">
      {/* Top Bar for Direct Helpline */}
      <div className="bg-[#2D332F] text-slate-200 text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <HeartPulse className="w-3.5 h-3.5 text-[#73A089]" />
              {CLINIC_INFO.name} — Expert Muscle & Joint Rehabilitation
            </span>
            <span className="hidden md:inline-block text-slate-500">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-[#A3C7B5] font-medium">
              <Award className="w-3.5 h-3.5" /> Led by {CLINIC_INFO.doctor.name} ({CLINIC_INFO.doctor.qualifications})
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.doctor.directPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-[#A3C7B5] hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              Direct Line: {CLINIC_INFO.doctor.directPhone}
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">{CLINIC_INFO.doctor.workingHours}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-[#5B8A72]/30 shadow-xs group-hover:scale-105 transition-transform shrink-0 bg-white p-0.5">
            <img
              src={clinicLogo}
              alt={CLINIC_INFO.name}
              className="w-full h-full object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-[#2D332F] group-hover:text-[#5B8A72] transition-colors leading-tight">
              {CLINIC_INFO.name}
            </h1>
            <p className="text-[11px] font-medium text-[#5C635E] tracking-wide leading-tight">
              {CLINIC_INFO.tagline}
            </p>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#EAE6DA] p-1.5 rounded-full border border-[#E0DCCF]">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#5B8A72] text-white shadow-xs font-semibold'
                    : 'text-[#5C635E] hover:text-[#2D332F] hover:bg-[#E0DCCF]/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Call to Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => {
              onBookClick();
              handleNavClick('booking');
            }}
            className="flex items-center gap-2 bg-[#5B8A72] hover:bg-[#486F5C] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md shadow-[#5B8A72]/20 hover:shadow-lg transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            Book Consultation
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#2D332F] hover:bg-[#EAE6DA] transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F5F0] border-b border-[#E0DCCF] px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#EBF2EE] text-[#2D332F] font-semibold border-l-4 border-[#5B8A72]'
                      : 'text-[#5C635E] hover:bg-[#EAE6DA]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E0DCCF] flex flex-col gap-2">
            <button
              onClick={() => {
                onBookClick();
                handleNavClick('booking');
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#5B8A72] text-white py-3 rounded-xl font-semibold shadow-md cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              Book Consultation
            </button>

            <a
              href={`tel:${CLINIC_INFO.doctor.directPhone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 bg-[#EAE6DA] text-[#2D332F] py-2.5 rounded-xl text-sm font-medium hover:bg-[#E0DCCF] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#5B8A72]" />
              Call Dr. Dhanush PT ({CLINIC_INFO.doctor.directPhone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
