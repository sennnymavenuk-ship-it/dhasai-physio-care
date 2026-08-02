import React, { useState } from 'react';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';
import { BookingFormData, BookingConfirmation } from '../types';
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  CheckCircle2,
  ShieldCheck,
  Award,
  Sparkles,
  MapPin,
  Printer,
  X,
  FileText
} from 'lucide-react';

interface BookingSectionProps {
  initialTreatment?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialTreatment = '' }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '+91 ',
    preferredDate: '',
    preferredTime: 'Morning (09:00 - 12:00)',
    treatmentType: initialTreatment || 'General Consultation & Assessment',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);

  const validatePhone = (phoneStr: string): boolean => {
    const cleaned = phoneStr.replace(/\s+/g, '').replace(/-/g, '');
    // Must match +91XXXXXXXXXX (10 digits after +91) or 10 digits starting with 6-9
    return /^(\+91)?[6-9]\d{9}$/.test(cleaned);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters)';
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address for appointment confirmation';
    }

    if (!formData.phone.trim() || !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number in format: +91 98765 43210';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred appointment date';
    } else {
      const selected = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = 'Appointment date cannot be in the past';
      }
    }

    if (!formData.treatmentType) {
      newErrors.treatmentType = 'Please select a treatment category';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Generate Confirmation
    const randomId = `DPC-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmation({
      appointmentId: randomId,
      patientName: formData.fullName,
      date: formData.preferredDate,
      time: formData.preferredTime,
      treatmentType: formData.treatmentType,
      doctorName: CLINIC_INFO.doctor.name,
      clinicAddress: CLINIC_INFO.doctor.address
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      
      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Benefits & Value proposition */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#EBF2EE] text-[#2D332F] border border-[#5B8A72]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#5B8A72]" />
            Expert Clinical Guidance
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D332F] tracking-tight leading-tight">
            Start Your Recovery Journey Today.
          </h1>

          <p className="text-base text-[#5C635E] leading-relaxed">
            Our specialized physiotherapists led by <strong className="text-[#2D332F]">{CLINIC_INFO.doctor.name}</strong> are ready to help you regain your mobility and live pain-free. Book your session in minutes.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-[#E0DCCF] shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-[#EBF2EE] text-[#5B8A72] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#2D332F]">Personalized Muscle Plans</h4>
                <p className="text-xs text-[#5C635E] mt-0.5">
                  Tailored physical treatments specifically for your joint, spine, or post-surgical condition.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-[#E0DCCF] shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-[#EBF2EE] text-[#5B8A72] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#2D332F]">Flexible Timing Slots</h4>
                <p className="text-xs text-[#5C635E] mt-0.5">
                  Morning, afternoon, and evening slots available Monday through Saturday.
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof badge */}
          <div className="bg-[#2D332F] text-white p-5 rounded-3xl shadow-xl flex items-center gap-4">
            <div className="flex -space-x-2 shrink-0">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#5B8A72] flex items-center justify-center text-xs font-bold text-white">S</div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#486F5C] flex items-center justify-center text-xs font-bold text-white">R</div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#375446] flex items-center justify-center text-xs font-bold text-white">K</div>
            </div>
            <div>
              <p className="text-sm font-semibold">Join 2,400+ patients</p>
              <p className="text-xs text-[#A3C7B5]">who recovered full mobility with us in Chennai.</p>
            </div>
          </div>
        </div>


        {/* Right Column: Interactive Booking Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#E0DCCF] shadow-xl space-y-6">
          <div className="border-b border-[#E0DCCF] pb-4">
            <h2 className="text-2xl font-bold text-[#2D332F]">Consultation Booking Form</h2>
            <p className="text-xs text-[#5C635E] mt-1">
              Please enter your contact details and preferred appointment slot below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="booking-fullName" className="block text-xs font-bold uppercase tracking-wider text-[#2D332F] mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#8E928F] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="booking-fullName"
                  type="text"
                  placeholder="e.g. John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                    errors.fullName ? 'border-rose-500 bg-rose-50/50' : 'border-[#E0DCCF] focus:border-[#5B8A72] bg-[#F7F5F0]'
                  }`}
                />
              </div>
              {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-email" className="block text-xs font-bold uppercase tracking-wider text-[#2D332F] mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8E928F] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="booking-email"
                    type="email"
                    placeholder="senthil@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500 bg-rose-50/50' : 'border-[#E0DCCF] focus:border-[#5B8A72] bg-[#F7F5F0]'
                    }`}
                  />
                </div>
                {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="booking-phone" className="block text-xs font-bold uppercase tracking-wider text-[#2D332F] mb-1.5">
                  Phone Number (+91 format) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#8E928F] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="booking-phone"
                    type="text"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.phone ? 'border-rose-500 bg-rose-50/50' : 'border-[#E0DCCF] focus:border-[#5B8A72] bg-[#F7F5F0]'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Preferred Date & Preferred Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-date" className="block text-xs font-bold uppercase tracking-wider text-[#2D332F] mb-1.5">
                  Preferred Date *
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#8E928F] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="booking-date"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.preferredDate ? 'border-rose-500 bg-rose-50/50' : 'border-[#E0DCCF] focus:border-[#5B8A72] bg-[#F7F5F0]'
                    }`}
                  />
                </div>
                {errors.preferredDate && <p className="text-xs text-rose-600 mt-1">{errors.preferredDate}</p>}
              </div>

              <div>
                <label htmlFor="booking-time" className="block text-xs font-bold uppercase tracking-wider text-[#2D332F] mb-1.5">
                  Preferred Time Slot *
                </label>
                <select
                  id="booking-time"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E0DCCF] text-sm focus:outline-none focus:border-[#5B8A72] bg-[#F7F5F0] text-[#2D332F]"
                >
                  <option value="Morning (08:00 - 11:00)">Morning Slot (08:00 AM - 11:00 AM)</option>
                  <option value="Mid-day (11:00 - 14:00)">Mid-day Slot (11:00 AM - 02:00 PM)</option>
                  <option value="Evening (14:00 - 18:00)">Evening Slot (02:00 PM - 06:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Treatment Type */}
            <div>
              <label htmlFor="booking-treatment" className="block text-xs font-bold uppercase tracking-wider text-[#2D332F] mb-1.5">
                Treatment / Specialization *
              </label>
              <select
                id="booking-treatment"
                value={formData.treatmentType}
                onChange={(e) => setFormData({ ...formData, treatmentType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#E0DCCF] text-sm focus:outline-none focus:border-[#5B8A72] bg-[#F7F5F0] text-[#2D332F]"
              >
                <option value="General Consultation & Assessment">General Physical Consultation & Assessment</option>
                {TREATMENTS.map((t) => (
                  <option key={t.id} value={t.title}>
                    {t.title} ({t.category})
                  </option>
                ))}
              </select>
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="booking-notes" className="block text-xs font-bold uppercase tracking-wider text-[#2D332F] mb-1.5">
                Additional Notes / Pain Area (Optional)
              </label>
              <textarea
                id="booking-notes"
                rows={3}
                placeholder="Briefly describe your pain, injury history, or specific treatment requirements..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#E0DCCF] text-sm focus:outline-none focus:border-[#5B8A72] bg-[#F7F5F0] text-[#2D332F]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#5B8A72] hover:bg-[#486F5C] text-white font-bold py-4 rounded-xl shadow-lg transition-all cursor-pointer text-base"
            >
              <Calendar className="w-5 h-5" />
              Book Now
            </button>

            <p className="text-center text-xs text-[#5C635E] flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5B8A72]" />
              We'll confirm your appointment details via SMS / Call within 24 hours.
            </p>
          </form>
        </div>

      </div>


      {/* APPOINTMENT CONFIRMATION MODAL */}
      {confirmation && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-100 relative">
            
            <button
              onClick={() => setConfirmation(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Appointment Confirmed!</h3>
              <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 py-1 px-3 rounded-full inline-block">
                Reference ID: {confirmation.appointmentId}
              </p>
            </div>

            {/* Confirmation Pass */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 text-xs">Patient Name:</span>
                <span className="font-bold text-slate-900">{confirmation.patientName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 text-xs">Attending Doctor:</span>
                <span className="font-bold text-teal-800">{confirmation.doctorName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 text-xs">Treatment Category:</span>
                <span className="font-semibold text-slate-800">{confirmation.treatmentType}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 text-xs">Date & Time:</span>
                <span className="font-semibold text-slate-900">{confirmation.date} ({confirmation.time})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 text-xs">Clinic Address:</span>
                <span className="text-slate-700 text-xs font-medium text-right max-w-[200px]">{confirmation.clinicAddress}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => window.print()}
                className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                Print Pass
              </button>
              <button
                onClick={() => {
                  setConfirmation(null);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '+91 ',
                    preferredDate: '',
                    preferredTime: 'Morning (08:00 - 11:00)',
                    treatmentType: 'General Consultation & Assessment',
                    notes: ''
                  });
                }}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
