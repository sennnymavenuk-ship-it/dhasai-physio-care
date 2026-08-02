import React from 'react';
import { PageTab } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, Mail, MapPin, Instagram, ShieldCheck, Clock } from 'lucide-react';
import clinicLogo from '../assets/images/dhasai_physio_logo_1785516521041.jpg';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleNav = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D332F] text-slate-300 pt-16 pb-8 border-t border-[#3F4842]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#3F4842]">
          
          {/* Brand & Mission Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl overflow-hidden border border-[#5B8A72]/40 shadow-xs shrink-0 bg-white p-0.5">
                <img
                  src={clinicLogo}
                  alt={CLINIC_INFO.name}
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight block">
                  {CLINIC_INFO.name}
                </span>
                <span className="text-[11px] font-medium text-[#A3C7B5] tracking-wide block">
                  {CLINIC_INFO.tagline}
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering movement and restoring muscle vitality through evidence-based physiotherapy care led by <strong className="text-slate-200">{CLINIC_INFO.doctor.name}</strong>. Dedicated care for every muscle and joint.
            </p>

            <div className="bg-[#1F2421] p-3 rounded-xl border border-[#3F4842] text-xs text-slate-300">
              <p className="font-semibold text-[#A3C7B5] mb-0.5">Tamil Heritage & Meaning:</p>
              <p className="italic text-slate-400">{CLINIC_INFO.tamilMeaningNote}</p>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-100">
              Contact & Clinic
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-[#A3C7B5] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">Appointments & Enquiries</span>
                  <a href={`tel:${CLINIC_INFO.doctor.clinicPhone.replace(/\s+/g, '')}`} className="font-medium text-white hover:text-[#A3C7B5] transition-colors">
                    {CLINIC_INFO.doctor.clinicPhone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-[#73A089] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">Doctor's Direct Line</span>
                  <a href={`tel:${CLINIC_INFO.doctor.directPhone.replace(/\s+/g, '')}`} className="font-medium text-white hover:text-[#73A089] transition-colors">
                    {CLINIC_INFO.doctor.directPhone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-[#A3C7B5] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">Email Address</span>
                  <a href={`mailto:${CLINIC_INFO.doctor.email}`} className="font-medium text-white hover:text-[#A3C7B5] transition-colors">
                    {CLINIC_INFO.doctor.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-[#E5A894] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">Clinic Location</span>
                  <span className="text-slate-300 font-medium">
                    {CLINIC_INFO.doctor.address}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-100">
              Quick Navigation
            </h3>

            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#A3C7B5] transition-colors cursor-pointer">
                  Home & Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('treatments')} className="hover:text-[#A3C7B5] transition-colors cursor-pointer">
                  Specialized Treatments
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('exercises')} className="hover:text-[#A3C7B5] transition-colors cursor-pointer">
                  Guided Exercise Charts
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('doctor')} className="hover:text-[#A3C7B5] transition-colors cursor-pointer">
                  About {CLINIC_INFO.doctor.name}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('booking')} className="hover:text-[#A3C7B5] transition-colors cursor-pointer">
                  Book Consultation Slot
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tips')} className="hover:text-[#A3C7B5] transition-colors cursor-pointer">
                  Daily Wellness & Posture Tips
                </button>
              </li>
            </ul>
          </div>

          {/* Timings & Social Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-100">
              Clinic Working Hours
            </h3>

            <div className="bg-[#1F2421] p-4 rounded-xl border border-[#3F4842] space-y-2 text-sm">
              <div className="flex items-center gap-2 text-[#A3C7B5] font-medium">
                <Clock className="w-4 h-4" />
                <span>Monday – Saturday</span>
              </div>
              <p className="text-slate-300 text-xs pl-6">08:00 AM – 06:00 PM</p>
              
              <div className="pt-2 border-t border-[#3F4842] text-slate-400 text-xs">
                Sunday: Emergency & Pre-Booked Post-Op Sessions Only
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-xs font-semibold uppercase text-slate-400 mb-2">Connect With Us</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1F2421] hover:bg-[#161A18] text-slate-200 px-3 py-1.5 rounded-lg text-xs transition-colors border border-[#3F4842]"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>{CLINIC_INFO.social.instagram}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 {CLINIC_INFO.name}. All rights reserved. Registered Physiotherapy Practice in Tamil Nadu, India.</p>
          
          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Policy: All patient medical records and booking details at Dhasai Physio Care are handled strictly in accordance with clinical confidentiality standards.'); }} className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service: Consultation bookings are confirmed upon verification. Please provide at least 4 hours notice for cancellations.'); }} className="hover:text-slate-200 transition-colors">
              Terms of Service
            </a>
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A3C7B5]" />
              Verified Healthcare Facility
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
