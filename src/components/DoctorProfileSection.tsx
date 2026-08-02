import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { PageTab } from '../types';
import drDhanushHeadshot from '../assets/images/dr_dhanush_portrait_1785516506764.jpg';
import {
  Award,
  Star,
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Building,
  GraduationCap,
  Activity,
  HeartPulse
} from 'lucide-react';

interface DoctorProfileSectionProps {
  setActiveTab: (tab: PageTab) => void;
  onBookClick: () => void;
}

export const DoctorProfileSection: React.FC<DoctorProfileSectionProps> = ({ setActiveTab, onBookClick }) => {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-[#5C635E]">
        <button onClick={() => setActiveTab('home')} className="hover:text-[#5B8A72] transition-colors cursor-pointer">Home</button>
        <ChevronRight className="w-3.5 h-3.5 text-[#8E928F]" />
        <span>Our Team</span>
        <ChevronRight className="w-3.5 h-3.5 text-[#8E928F]" />
        <span className="font-semibold text-[#2D332F]">{CLINIC_INFO.doctor.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Doctor Avatar & Availability Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-[#E0DCCF] shadow-2xs text-center space-y-6">
            
            {/* Avatar Headshot */}
            <div className="relative inline-block">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#5B8A72]/40 mx-auto bg-[#F2EDE4] shadow-md">
                <img
                  src={drDhanushHeadshot}
                  alt={CLINIC_INFO.doctor.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="absolute bottom-1 right-2 bg-[#5B8A72] text-white p-1.5 rounded-full shadow-md" title="Active Practice">
                <ShieldCheck className="w-4 h-4" />
              </span>
            </div>

            <div>
              <h1 className="text-2xl font-bold text-[#2D332F]">
                {CLINIC_INFO.doctor.name}
              </h1>
              <p className="text-xs font-semibold text-[#5B8A72] mt-1 uppercase tracking-wider">
                {CLINIC_INFO.doctor.qualifications}
              </p>
              <p className="text-xs text-[#5C635E] mt-1">
                Chief Physiotherapy Director
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E0DCCF]">
              <div className="bg-[#F7F5F0] p-3 rounded-2xl border border-[#E0DCCF]">
                <span className="block text-xs text-[#8E928F] uppercase font-semibold">Experience</span>
                <span className="text-base font-extrabold text-[#2D332F]">{CLINIC_INFO.doctor.experience}</span>
              </div>
              <div className="bg-[#F7F5F0] p-3 rounded-2xl border border-[#E0DCCF]">
                <span className="block text-xs text-[#8E928F] uppercase font-semibold">Patient Rating</span>
                <span className="text-base font-extrabold text-[#B87214] flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 fill-[#F5C26B] text-[#B87214]" />
                  {CLINIC_INFO.doctor.rating}
                </span>
              </div>
            </div>

            {/* Availability Box */}
            <div className="bg-[#F2EDE4] p-4 rounded-2xl border border-[#E0DCCF] text-left space-y-3 text-xs">
              <h3 className="font-bold text-[#2D332F] border-b border-[#E0DCCF] pb-2 flex items-center justify-between">
                <span>Availability</span>
                <span className="text-[#5B8A72] text-[10px] bg-[#EBF2EE] px-2 py-0.5 rounded-full font-semibold border border-[#5B8A72]/20">Open Mon-Sat</span>
              </h3>

              <div className="space-y-2 text-[#5C635E]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#5B8A72] shrink-0" />
                  <span>{CLINIC_INFO.doctor.workingHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#5B8A72] shrink-0" />
                  <span>Direct: <strong className="text-[#2D332F]">{CLINIC_INFO.doctor.directPhone}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#5B8A72] shrink-0" />
                  <span className="truncate">{CLINIC_INFO.doctor.email}</span>
                </div>
              </div>

              <button
                onClick={() => setScheduleModalOpen(true)}
                className="w-full bg-white hover:bg-[#F7F5F0] text-[#2D332F] border border-[#E0DCCF] font-semibold py-2 rounded-xl transition-colors cursor-pointer text-xs"
              >
                View Full Schedule
              </button>
            </div>

            <button
              onClick={() => {
                onBookClick();
                setActiveTab('booking');
              }}
              className="w-full bg-[#5B8A72] hover:bg-[#486F5C] text-white font-bold py-3.5 rounded-xl shadow-md transition-all cursor-pointer text-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>
        </div>


        {/* RIGHT COLUMN: Bio, Specializations, Expertise & Practice Location */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* About Header Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E0DCCF] shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="bg-[#EBF2EE] text-[#2D332F] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-[#5B8A72]/30">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5B8A72]" />
                Verified Specialist
              </span>
              <span className="text-xs text-[#8E928F] font-medium">Chennai, Tamil Nadu</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D332F]">
              About {CLINIC_INFO.doctor.name}
            </h2>

            <p className="text-[#5C635E] leading-relaxed text-sm sm:text-base">
              {CLINIC_INFO.doctor.bio}
            </p>

            <div className="bg-[#EBF2EE]/60 border border-[#5B8A72]/20 p-4 rounded-2xl text-xs text-[#2D332F] leading-relaxed">
              <strong className="text-[#2D332F]">Clinical Philosophy & Tamil Heritage:</strong> "The word 'Dhasai' (தசை) stands for muscle tissue and movement health. Our mission at {CLINIC_INFO.name} is to combine clinical excellence with warm, accessible patient care so everyone can regain physical independence."
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#F7F5F0] p-4 rounded-2xl border border-[#E0DCCF]">
                <div className="flex items-center gap-2 text-[#5B8A72] font-bold text-xs uppercase mb-1">
                  <Activity className="w-4 h-4" />
                  Specialization
                </div>
                <p className="text-sm font-semibold text-[#2D332F]">
                  Orthopedic & Neurological Muscle Rehabilitation
                </p>
              </div>

              <div className="bg-[#F7F5F0] p-4 rounded-2xl border border-[#E0DCCF]">
                <div className="flex items-center gap-2 text-[#5B8A72] font-bold text-xs uppercase mb-1">
                  <GraduationCap className="w-4 h-4" />
                  Education
                </div>
                <p className="text-sm font-semibold text-[#2D332F]">
                  {CLINIC_INFO.doctor.education}
                </p>
              </div>
            </div>
          </div>


          {/* Clinical Expertise Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-[#E0DCCF] shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF2EE] text-[#5B8A72] flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#2D332F]">Manual Therapy</h3>
              <p className="text-xs text-[#5C635E] leading-relaxed">
                Soft tissue mobilization and joint manipulation techniques to reduce chronic muscle pain and restore full range of motion.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="bg-[#F2EDE4] text-[#2D332F] text-[10px] font-semibold px-2 py-0.5 rounded-md">Hands-on</span>
                <span className="bg-[#F2EDE4] text-[#2D332F] text-[10px] font-semibold px-2 py-0.5 rounded-md">Non-invasive</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E0DCCF] shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF2EE] text-[#5B8A72] flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#2D332F]">Neurological Care</h3>
              <p className="text-xs text-[#5C635E] leading-relaxed">
                Specialized protocols for recovery from spinal nerve impingements, sciatica, stroke, and motor balance disorders.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="bg-[#F2EDE4] text-[#2D332F] text-[10px] font-semibold px-2 py-0.5 rounded-md">Nerve Care</span>
                <span className="bg-[#F2EDE4] text-[#2D332F] text-[10px] font-semibold px-2 py-0.5 rounded-md">Balance</span>
              </div>
            </div>
          </div>


          {/* Primary Practice Location Map View */}
          <div className="bg-white rounded-3xl border border-[#E0DCCF] shadow-2xs overflow-hidden">
            <div className="p-6 bg-[#2D332F] text-white flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 text-[#A3C7B5] font-bold text-xs uppercase">
                  <MapPin className="w-4 h-4" />
                  Primary Practice Location
                </div>
                <h3 className="text-xl font-bold mt-1 text-white">
                  {CLINIC_INFO.name} — Mylapore Clinic
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  {CLINIC_INFO.doctor.address}
                </p>
              </div>

              <button
                onClick={() => {
                  onBookClick();
                  setActiveTab('booking');
                }}
                className="bg-[#5B8A72] hover:bg-[#486F5C] text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors shrink-0 cursor-pointer"
              >
                Book Session Here
              </button>
            </div>

            {/* Map Placeholder Visual */}
            <div className="relative bg-[#EAE6DA] h-52 flex items-center justify-center overflow-hidden border-t border-[#E0DCCF]">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
                alt="Mylapore Chennai location map overview"
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#2D332F]/30"></div>
              <div className="relative bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E0DCCF] shadow-xl text-center space-y-1">
                <MapPin className="w-6 h-6 text-[#5B8A72] mx-auto animate-bounce" />
                <h4 className="font-bold text-[#2D332F] text-sm">{CLINIC_INFO.name}</h4>
                <p className="text-xs text-[#5C635E]">No. 2, Mylapore High Road, Chennai</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* SCHEDULE MODAL */}
      {scheduleModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">Dr. Dhanush PT — Weekly Clinical Hours</h3>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="font-semibold text-slate-700">Monday – Friday:</span>
                <span className="text-teal-800 font-bold">08:00 AM – 06:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="font-semibold text-slate-700">Saturday:</span>
                <span className="text-teal-800 font-bold">08:00 AM – 04:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100 text-slate-400">
                <span className="font-semibold">Sunday:</span>
                <span>Emergency / Post-Op Only</span>
              </div>
            </div>

            <button
              onClick={() => setScheduleModalOpen(false)}
              className="w-full bg-slate-900 text-white font-semibold py-2.5 rounded-xl cursor-pointer text-xs"
            >
              Close Schedule
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
