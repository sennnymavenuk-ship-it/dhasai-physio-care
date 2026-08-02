import React, { useState } from 'react';
import { PageTab } from '../types';
import { CLINIC_INFO, TREATMENTS, WELLNESS_TIPS } from '../data/clinicData';
import drDhanushHeadshot from '../assets/images/dr_dhanush_portrait_1785516506764.jpg';
import clinicBanner from '../assets/images/clinicBanner.jpg';
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Send,
  Activity,
  Zap,
  UserCheck,
  PlusSquare,
  ShieldAlert,
  User,
  Droplet,
  Moon,
  Instagram,
  HeartPulse,
  Award,
  Sparkles
} from 'lucide-react';

interface HomeSectionProps {
  setActiveTab: (tab: PageTab) => void;
  onBookClick: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ setActiveTab, onBookClick }) => {
  // Enquiry Form State
  const [enquiryForm, setEnquiryForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [enquiryErrors, setEnquiryErrors] = useState<Record<string, string>>({});
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!enquiryForm.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    if (!enquiryForm.email.trim() || !/\S+@\S+\.\S+/.test(enquiryForm.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!enquiryForm.phone.trim()) {
      errors.phone = 'Phone number is required (+91 XXXXX XXXXX)';
    } else if (!/^\+91\s?[6-9]\d{4}\s?\d{5}$|^\+91\d{10}$|^[6-9]\d{9}$/.test(enquiryForm.phone.trim())) {
      errors.phone = 'Enter valid 10-digit Indian mobile number (e.g., +91 98765 43210)';
    }
    if (!enquiryForm.message.trim()) {
      errors.message = 'Please type a short message or query';
    }

    if (Object.keys(errors).length > 0) {
      setEnquiryErrors(errors);
      return;
    }

    setEnquiryErrors({});
    setEnquirySubmitted(true);
  };

  const getTreatmentIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6 text-[#5B8A72]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#5B8A72]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#5B8A72]" />;
      case 'PlusSquare': return <PlusSquare className="w-6 h-6 text-[#5B8A72]" />;
      default: return <ShieldAlert className="w-6 h-6 text-[#5B8A72]" />;
    }
  };

  const getTipIcon = (iconName: string) => {
    switch (iconName) {
      case 'User': return <User className="w-5 h-5 text-[#5B8A72]" />;
      case 'Droplet': return <Droplet className="w-5 h-5 text-[#5B8A72]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#5B8A72]" />;
      default: return <Moon className="w-5 h-5 text-[#5B8A72]" />;
    }
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      
      {/* 1. HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F2EDE4]/80 via-[#F7F5F0] to-[#F7F5F0] pt-8 lg:pt-16 pb-12 lg:pb-20 border-b border-[#E0DCCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-[#EBF2EE] text-[#2D332F] border border-[#5B8A72]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#5B8A72]" />
                Expert Physiotherapy Clinic in Chennai
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1F1C] tracking-tight leading-[1.15]">
                Guided Physio Care, <br />
                <span className="font-serif italic text-[#5B8A72] underline decoration-[#5B8A72]/30 decoration-4 underline-offset-8">
                  Every Day
                </span>
              </h1>

              <p className="text-lg text-[#5C635E] leading-relaxed max-w-2xl font-normal">
                Empowering your recovery through evidence-based practice and personalized care led by <strong className="text-[#2D332F] font-semibold">{CLINIC_INFO.doctor.name}</strong>. We guide you back to full muscle strength and joint mobility with daily continuous support.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    onBookClick();
                    setActiveTab('booking');
                  }}
                  className="flex items-center justify-center gap-2.5 bg-[#5B8A72] hover:bg-[#486F5C] text-white px-7 py-3.5 rounded-full font-bold text-base shadow-md shadow-[#5B8A72]/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </button>

                <button
                  onClick={() => setActiveTab('treatments')}
                  className="flex items-center justify-center gap-2 bg-white hover:bg-[#EBF2EE] text-[#2D332F] border-2 border-[#5B8A72]/40 hover:border-[#5B8A72] px-6 py-3.5 rounded-full font-semibold text-base transition-all cursor-pointer"
                >
                  Explore Treatments
                  <ArrowRight className="w-4 h-4 text-[#5B8A72]" />
                </button>
              </div>

              {/* Highlights & Trust badges */}
              <div className="pt-6 border-t border-[#E0DCCF] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-[#5C635E]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#5B8A72] shrink-0" />
                  <span>Verified Clinical Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#5B8A72] shrink-0" />
                  <span>{CLINIC_INFO.doctor.experience}</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <HeartPulse className="w-4 h-4 text-[#5B8A72] shrink-0" />
                  <span>Daily Digital Exercise Charts</span>
                </div>
              </div>
            </div>

            {/* Right Column Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#F2EDE4] group">
                <img
                  /*src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"*/
                  /*src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"*/
                  src={clinicBanner}
                  alt="Physiotherapy treatment session at Dhasai Physio Care"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F1C]/60 via-transparent to-transparent"></div>

                {/* Overlaid Doctor Callout Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E0DCCF] shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#5B8A72] bg-[#F2EDE4] shrink-0">
                      <img
                        src={drDhanushHeadshot}
                        alt={CLINIC_INFO.doctor.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#2D332F]">{CLINIC_INFO.doctor.name}</h4>
                      <p className="text-xs text-[#5C635E]">{CLINIC_INFO.doctor.qualifications}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('doctor')}
                    className="text-xs font-semibold text-[#5B8A72] hover:text-[#486F5C] underline cursor-pointer"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. PATIENT-CENTERED APPROACH SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2D332F] tracking-tight">
          Our Patient-Centered Approach
        </h2>
        <div className="bg-[#F2EDE4] p-6 sm:p-10 rounded-3xl border border-[#E0DCCF] shadow-2xs max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-[#2D332F] leading-relaxed font-normal">
            At <strong className="font-semibold">{CLINIC_INFO.name}</strong>, we believe that recovery happens beyond the clinic walls. Our approach combines intensive in-person sessions with a comprehensive daily digital guidance system, ensuring you have the exact support needed to achieve your physical mobility goals, every single day.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#5C635E]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#5B8A72]" /> Clinical Assessment
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#5B8A72]" /> Customized Muscle Plans
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#5B8A72]" /> Daily Exercise Tracking
            </span>
          </div>
        </div>
      </section>


      {/* 3. SPECIALIZED TREATMENTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E0DCCF] pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D332F] tracking-tight">
              Specialized Treatments
            </h2>
            <p className="text-sm sm:text-base text-[#5C635E] mt-1">
              Expert muscle and joint care tailored to your specific recovery needs.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('treatments')}
            className="inline-flex items-center gap-1.5 text-[#5B8A72] hover:text-[#486F5C] font-semibold text-sm transition-colors cursor-pointer group"
          >
            View All Treatments
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Treatments Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-[#E0DCCF] shadow-2xs hover:shadow-md hover:border-[#5B8A72] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF2EE] flex items-center justify-center border border-[#5B8A72]/20 group-hover:bg-[#5B8A72] group-hover:text-white transition-colors">
                    {getTreatmentIcon(item.iconName)}
                  </div>
                  {item.badge && (
                    <span className="bg-[#EBF2EE] text-[#2D332F] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#5B8A72]/30">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#2D332F] group-hover:text-[#5B8A72] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5C635E] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[#E0DCCF] flex items-center justify-between">
                <span className="text-xs text-[#5C635E] font-medium">
                  {item.exercisesCount} Guided Routines
                </span>
                <button
                  onClick={() => setActiveTab('treatments')}
                  className="px-3.5 py-1.5 rounded-lg border border-[#5B8A72]/30 text-[#5B8A72] hover:bg-[#EBF2EE] text-xs font-semibold transition-colors cursor-pointer"
                >
                  View Exercises
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 4. DAILY WELLNESS TIPS PREVIEW */}
      <section className="bg-[#F2EDE4]/60 py-12 border-y border-[#E0DCCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D332F] tracking-tight">
              Daily Wellness Tips
            </h2>
            <p className="text-sm text-[#5C635E] mt-1">
              Simple everyday habits recommended by {CLINIC_INFO.doctor.name} for optimal muscle health.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WELLNESS_TIPS.map((tip) => (
              <div
                key={tip.id}
                className="bg-white p-6 rounded-2xl border border-[#E0DCCF] shadow-2xs hover:shadow-xs space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EBF2EE] flex items-center justify-center">
                  {getTipIcon(tip.iconName)}
                </div>
                <h3 className="text-base font-bold text-[#2D332F]">
                  {tip.title}
                </h3>
                <p className="text-xs text-[#5C635E] leading-relaxed">
                  {tip.shortDesc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => setActiveTab('tips')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#5B8A72] hover:text-[#486F5C] underline cursor-pointer"
            >
              Read Complete Ergonomics & Wellness Guides
            </button>
          </div>
        </div>
      </section>


      {/* 5. STAY CONNECTED & ENQUIRE NOW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Social & Clinic Overview */}
          <div className="lg:col-span-5 bg-[#2D332F] text-white p-8 rounded-3xl flex flex-col justify-between shadow-xl space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A3C7B5]">
                Community & Enquiries
              </span>

              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                Stay Connected
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Join our community on social media for daily muscle movement inspiration, ergonomic advice, and clinical updates directly from <strong className="text-white">{CLINIC_INFO.doctor.name}</strong>.
              </p>

              {/* Instagram Card */}
              <div className="bg-[#1F2421] border border-[#3F4842] p-4 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-yellow-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{CLINIC_INFO.social.instagram}</h4>
                  <p className="text-xs text-slate-400">{CLINIC_INFO.social.followers} • {CLINIC_INFO.social.tag}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#3F4842] space-y-2 text-xs text-slate-400">
              <p className="font-semibold text-slate-200">Clinic Address:</p>
              <p>{CLINIC_INFO.doctor.address}</p>
              <p className="pt-1 text-[#A3C7B5] font-medium">Doctor Direct: {CLINIC_INFO.doctor.directPhone}</p>
            </div>
          </div>

          {/* Right: Enquire Now Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#E0DCCF] shadow-md space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#2D332F] tracking-tight">
                Enquire Now
              </h3>
              <p className="text-sm text-[#5C635E] mt-1">
                Have a question about a muscle condition, therapy charges, or treatment plans? Send us a message.
              </p>
            </div>

            {enquirySubmitted ? (
              <div className="bg-[#EBF2EE] border border-[#5B8A72]/30 p-6 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 bg-[#5B8A72] text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-[#2D332F]">Enquiry Received!</h4>
                <p className="text-sm text-[#2D332F] max-w-md mx-auto">
                  Thank you, <strong>{enquiryForm.fullName}</strong>. Our clinical team led by {CLINIC_INFO.doctor.name} will reach out to you shortly at <strong>{enquiryForm.phone}</strong>.
                </p>
                <button
                  onClick={() => {
                    setEnquirySubmitted(false);
                    setEnquiryForm({ fullName: '', email: '', phone: '', message: '' });
                  }}
                  className="mt-2 text-xs font-semibold text-[#5B8A72] hover:underline cursor-pointer"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-[#2D332F] mb-1">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="e.g. John Doe"
                    value={enquiryForm.fullName}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, fullName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      enquiryErrors.fullName ? 'border-rose-500 bg-rose-50/50' : 'border-[#E0DCCF] focus:border-[#5B8A72] bg-[#F7F5F0]'
                    }`}
                  />
                  {enquiryErrors.fullName && (
                    <p className="text-xs text-rose-600 mt-1">{enquiryErrors.fullName}</p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#2D332F] mb-1">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        enquiryErrors.email ? 'border-rose-500 bg-rose-50/50' : 'border-[#E0DCCF] focus:border-[#5B8A72] bg-[#F7F5F0]'
                      }`}
                    />
                    {enquiryErrors.email && (
                      <p className="text-xs text-rose-600 mt-1">{enquiryErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#2D332F] mb-1">
                      Phone Number (+91 format) *
                    </label>
                    <input
                      id="phone"
                      type="text"
                      placeholder="+91 98765 43210"
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        enquiryErrors.phone ? 'border-rose-500 bg-rose-50/50' : 'border-[#E0DCCF] focus:border-[#5B8A72] bg-[#F7F5F0]'
                      }`}
                    />
                    {enquiryErrors.phone && (
                      <p className="text-xs text-rose-600 mt-1">{enquiryErrors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#2D332F] mb-1">Message / Condition Query *</label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="How can we help you with your recovery?"
                    value={enquiryForm.message}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      enquiryErrors.message ? 'border-rose-500 bg-rose-50/50' : 'border-[#E0DCCF] focus:border-[#5B8A72] bg-[#F7F5F0]'
                    }`}
                  ></textarea>
                  {enquiryErrors.message && (
                    <p className="text-xs text-rose-600 mt-1">{enquiryErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#5B8A72] hover:bg-[#486F5C] text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
