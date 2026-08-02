import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { PageTab } from '../types';
import { Phone, Mail, Clock, ChevronRight, UserCheck } from 'lucide-react';
// import staffPhoto from '../assets/images/priya_support_photo.jpg'; // add once you have a photo


interface SupportStaffSectionProps {
  setActiveTab: (tab: PageTab) => void;
}

export const SupportStaffSection: React.FC<SupportStaffSectionProps> = ({ setActiveTab }) => {
  // List both staff members here
  const staffMembers = [CLINIC_INFO.supportStaff, CLINIC_INFO.hospStaff];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">

      <div className="flex items-center gap-2 text-xs text-[#5C635E]">
        <button onClick={() => setActiveTab('home')} className="hover:text-[#5B8A72] cursor-pointer">Home</button>
        <ChevronRight className="w-3.5 h-3.5 text-[#8E928F]" />
        <span className="font-semibold text-[#2D332F]">Support Team</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2D332F]">Our Support Team</h1>

      {staffMembers.map((staff, index) => (
        <div key={index} className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E0DCCF] shadow-2xs space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-[#EBF2EE] flex items-center justify-center text-[#5B8A72] shrink-0">
              <UserCheck className="w-8 h-8" />
              {/* Replace with <img src={...} className="w-full h-full object-cover rounded-full" /> once you have photos */}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#2D332F]">{staff.name}</h2>
              <p className="text-sm font-semibold text-[#5B8A72]">{staff.role}</p>
            </div>
          </div>

          <p className="text-[#5C635E] leading-relaxed text-sm sm:text-base">{staff.bio}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {staff.responsibilities.map((item, i) => (
              <div key={i} className="bg-[#F7F5F0] p-3 rounded-xl border border-[#E0DCCF] text-sm text-[#2D332F]">
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-[#E0DCCF] text-sm text-[#5C635E]">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#5B8A72]" /> {staff.directPhone}</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#5B8A72]" /> {staff.email}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#5B8A72]" /> {staff.workingHours}</span>
          </div>
        </div>
      ))}

    </div>
  );
};