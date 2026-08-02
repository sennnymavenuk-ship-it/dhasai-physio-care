import React, { useState } from 'react';
import { CLINIC_INFO, WELLNESS_TIPS } from '../data/clinicData';
import { PageTab } from '../types';
import {
  User,
  Droplet,
  Activity,
  Moon,
  Bookmark,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Lightbulb
} from 'lucide-react';

interface TipsSectionProps {
  setActiveTab: (tab: PageTab) => void;
  onBookClick: () => void;
}

export const TipsSection: React.FC<TipsSectionProps> = ({ setActiveTab, onBookClick }) => {
  const [savedTips, setSavedTips] = useState<Record<string, boolean>>({});
  const [expandedTipId, setExpandedTipId] = useState<string | null>('tip-1');

  const toggleBookmark = (id: string) => {
    setSavedTips((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
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
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-[#EBF2EE] text-[#2D332F] border border-[#5B8A72]/30 px-3 py-1 rounded-full text-xs font-semibold">
          <Lightbulb className="w-3.5 h-3.5 text-[#5B8A72]" />
          Evidence-Based Patient Education
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D332F] tracking-tight">
          Daily Wellness & Ergonomic Tips
        </h1>

        <p className="text-base text-[#5C635E] leading-relaxed">
          Practical muscle care guidelines curated by <strong className="text-[#2D332F]">{CLINIC_INFO.doctor.name}</strong> to prevent repetitive strain and maintain joint flexibility throughout your day.
        </p>
      </div>

      {/* Grid of Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {WELLNESS_TIPS.map((tip) => {
          const isSaved = !!savedTips[tip.id];
          const isExpanded = expandedTipId === tip.id;

          return (
            <div
              key={tip.id}
              className={`bg-white rounded-3xl border transition-all p-6 space-y-4 ${
                isSaved ? 'border-[#5B8A72] shadow-md bg-[#EBF2EE]/30' : 'border-[#E0DCCF] shadow-2xs hover:shadow-md'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#F2EDE4] border border-[#E0DCCF] flex items-center justify-center shrink-0">
                    {getTipIcon(tip.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B8A72] bg-[#EBF2EE] px-2 py-0.5 rounded-md border border-[#5B8A72]/20">
                      {tip.category}
                    </span>
                    <h2 className="text-lg font-bold text-[#2D332F] mt-0.5">
                      {tip.title}
                    </h2>
                  </div>
                </div>

                <button
                  onClick={() => toggleBookmark(tip.id)}
                  className={`p-2 rounded-xl transition-colors cursor-pointer ${
                    isSaved ? 'bg-[#EBF2EE] text-[#5B8A72]' : 'bg-[#F2EDE4] text-[#8E928F] hover:text-[#2D332F]'
                  }`}
                  title={isSaved ? 'Remove bookmark' : 'Bookmark tip'}
                >
                  <Bookmark className="w-4 h-4 fill-current" />
                </button>
              </div>

              <p className="text-sm text-[#5C635E] leading-relaxed font-normal">
                {tip.shortDesc}
              </p>

              {/* Full Guide Accordion */}
              {isExpanded ? (
                <div className="pt-3 border-t border-[#E0DCCF] space-y-2 text-xs sm:text-sm text-[#2D332F] bg-[#F7F5F0] p-4 rounded-2xl border border-[#E0DCCF] animate-in fade-in">
                  <h4 className="font-bold text-[#2D332F] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5B8A72]" />
                    Clinical Recommendation:
                  </h4>
                  <p className="leading-relaxed text-[#5C635E]">{tip.fullGuide}</p>
                  
                  <button
                    onClick={() => setExpandedTipId(null)}
                    className="text-xs font-semibold text-[#5B8A72] hover:underline pt-1 inline-block cursor-pointer"
                  >
                    Collapse Guide
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setExpandedTipId(tip.id)}
                  className="text-xs font-semibold text-[#5B8A72] hover:text-[#486F5C] flex items-center gap-1 cursor-pointer pt-1"
                >
                  Read Full Clinical Guide
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Additional Clinical Advice Card */}
      <div className="bg-[#2D332F] text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#3F4842]">
        <div className="space-y-2 text-center md:text-left max-w-2xl">
          <h3 className="text-xl font-bold">Experiencing Persistent Muscle Strains or Back Stiffness?</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            While daily ergonomics help prevent strain, chronic joint pain requires a formal physical assessment by {CLINIC_INFO.doctor.name} at {CLINIC_INFO.name}.
          </p>
        </div>

        <button
          onClick={() => {
            onBookClick();
            setActiveTab('booking');
          }}
          className="bg-[#5B8A72] hover:bg-[#486F5C] text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap text-sm shrink-0 flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          Book Physical Assessment
        </button>
      </div>

    </div>
  );
};
