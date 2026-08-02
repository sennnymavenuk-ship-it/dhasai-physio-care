import React, { useState } from 'react';
import { PageTab } from '../types';
import { CLINIC_INFO, EXERCISES, TREATMENTS } from '../data/clinicData';
import { Calendar, ChevronRight, Activity, Zap, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

interface TreatmentsSectionProps {
  setActiveTab: (tab: PageTab) => void;
  onBookClick: () => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ setActiveTab, onBookClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'RA Management',
    'Nerve Rehab',
    'Mobility & Joint Control',
    'Post-Surgery Recovery',
    'Back & Neck Pain'
  ];

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return <span className="bg-[#EBF2EE] text-[#2D332F] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#5B8A72]/30">Beginner</span>;
      case 'Intermediate':
        return <span className="bg-[#EAE6DA] text-[#2D332F] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#E0DCCF]">Intermediate</span>;
      default:
        return <span className="bg-[#F5EAD6] text-[#6B4E26] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#E0C9A6]">High Caution</span>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-[#EBF2EE] text-[#2D332F] border border-[#5B8A72]/30 px-3 py-1 rounded-full text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#5B8A72]" />
          Guided Muscle Rehabilitation Pathways
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D332F] tracking-tight">
          Recovery & Resilience
        </h1>

        <p className="text-base text-[#5C635E] leading-relaxed">
          Explore our specialized rehabilitation pathways and guided daily exercise programs designed by <strong className="text-[#2D332F]">{CLINIC_INFO.doctor.name}</strong> to restore your muscle strength, mobility, and physical comfort.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#E0DCCF]">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#5B8A72] text-white shadow-2xs'
                  : 'bg-[#EAE6DA] text-[#5C635E] hover:bg-[#E0DCCF] hover:text-[#2D332F]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>


      {/* CATEGORY 1: RA MANAGEMENT */}
      {(selectedCategory === 'All' || selectedCategory === 'RA Management') && (
        <section className="bg-white rounded-3xl border border-[#E0DCCF] shadow-2xs p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-[#E0DCCF] pb-6">
            <div className="md:col-span-4 rounded-2xl overflow-hidden bg-[#F2EDE4] h-44 border border-[#E0DCCF]">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                alt="RA Management therapy at Dhasai Physio Care"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5B8A72] bg-[#EBF2EE] px-2.5 py-1 rounded-md border border-[#5B8A72]/20">
                Chronic Care
              </span>
              <h2 className="text-2xl font-bold text-[#2D332F]">
                Rheumatoid Arthritis (RA) Management
              </h2>
              <p className="text-sm text-[#5C635E] leading-relaxed">
                Focusing on reducing joint inflammation, building muscular endurance around small joints, and maintaining flexibility through gentle low-impact movements specifically designed for RA patients by {CLINIC_INFO.doctor.name}.
              </p>
            </div>
          </div>

          {/* Exercise Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#E0DCCF] text-[#5C635E] font-semibold text-xs uppercase tracking-wider bg-[#F2EDE4]/60">
                  <th className="py-3 px-4">Exercise Name</th>
                  <th className="py-3 px-4">Reps / Sets</th>
                  <th className="py-3 px-4">Duration</th>
                  <th className="py-3 px-4">Difficulty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E0DCCF]">
                {EXERCISES.filter(ex => ex.category === 'RA Management').map((ex) => (
                  <tr key={ex.id} className="hover:bg-[#F7F5F0] transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#2D332F] flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#5B8A72] shrink-0" />
                      {ex.name}
                    </td>
                    <td className="py-3.5 px-4 text-[#5C635E]">{ex.repsSets}</td>
                    <td className="py-3.5 px-4 text-[#5C635E]">{ex.duration}</td>
                    <td className="py-3.5 px-4">{getDifficultyBadge(ex.difficulty)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}


      {/* CATEGORY 2: NERVE REHAB */}
      {(selectedCategory === 'All' || selectedCategory === 'Nerve Rehab') && (
        <section className="space-y-6">
          <div className="border-l-4 border-[#5B8A72] pl-4">
            <h2 className="text-2xl font-bold text-[#2D332F]">Nerve Disorder Rehab</h2>
            <p className="text-sm text-[#5C635E]">Neurological rehab programs designed to restore nerve function and relieve sciatica/impingement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXERCISES.filter(ex => ex.category === 'Nerve Rehab').map((ex) => (
              <div key={ex.id} className="bg-white p-6 rounded-2xl border border-[#E0DCCF] shadow-2xs hover:shadow-md transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF2EE] text-[#5B8A72] flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  {getDifficultyBadge(ex.difficulty)}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#2D332F]">{ex.name}</h3>
                  <p className="text-xs text-[#5C635E] mt-1">{ex.targetMuscle}</p>
                </div>

                <div className="pt-3 border-t border-[#E0DCCF] grid grid-cols-2 gap-2 text-xs text-[#5C635E]">
                  <div>
                    <span className="block text-[#8E928F] text-[10px] uppercase font-bold">Reps/Sets</span>
                    <span className="font-semibold text-[#2D332F]">{ex.repsSets}</span>
                  </div>
                  <div>
                    <span className="block text-[#8E928F] text-[10px] uppercase font-bold">Duration</span>
                    <span className="font-semibold text-[#2D332F]">{ex.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}


      {/* CATEGORY 3: MOBILITY & JOINT CONTROL */}
      {(selectedCategory === 'All' || selectedCategory === 'Mobility & Joint Control' || selectedCategory === 'Mobility') && (
        <section className="bg-[#F2EDE4] rounded-3xl p-6 sm:p-8 border border-[#E0DCCF] space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl font-bold text-[#2D332F]">Mobility & Joint Control</h2>
              <p className="text-sm text-[#5C635E] leading-relaxed">
                Improving the dynamic stability of major joints (hips, shoulders, ankles) to prevent future injury and enhance everyday active performance under Dr. Dhanush PT's clinical guidance.
              </p>

              <div className="space-y-3 pt-2">
                {EXERCISES.filter(ex => ex.category === 'Mobility').map((ex) => (
                  <div key={ex.id} className="bg-white p-4 rounded-xl border border-[#E0DCCF] shadow-2xs flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[#2D332F]">{ex.name}</h4>
                      <span className="text-xs text-[#5C635E]">{ex.repsSets} • {ex.targetMuscle}</span>
                    </div>
                    {getDifficultyBadge(ex.difficulty)}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg border-2 border-white h-64 lg:h-80 bg-[#EAE6DA]">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800"
                alt="Mobility and Joint control session"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      )}


      {/* CATEGORY 4: POST-SURGERY RECOVERY */}
      {(selectedCategory === 'All' || selectedCategory === 'Post-Surgery Recovery') && (
        <section className="space-y-6">
          <div className="border-l-4 border-[#5B8A72] pl-4">
            <h2 className="text-2xl font-bold text-[#2D332F]">Post-Surgery Recovery</h2>
            <p className="text-sm text-[#5C635E]">Safe post-operative muscle activation and vascular flow pathways.</p>
          </div>

          <div className="bg-white rounded-3xl border border-[#E0DCCF] shadow-2xs p-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#E0DCCF] text-[#5C635E] font-semibold text-xs uppercase tracking-wider">
                  <th className="py-3 px-4">Exercise</th>
                  <th className="py-3 px-4">Volume</th>
                  <th className="py-3 px-4">Focus Area</th>
                  <th className="py-3 px-4">Safety Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E0DCCF]">
                {EXERCISES.filter(ex => ex.category === 'Post-Surgery').map((ex) => (
                  <tr key={ex.id} className="hover:bg-[#F7F5F0]">
                    <td className="py-3.5 px-4 font-bold text-[#2D332F]">{ex.name}</td>
                    <td className="py-3.5 px-4 text-[#5C635E]">{ex.repsSets}</td>
                    <td className="py-3.5 px-4 text-[#5C635E] font-medium">{ex.focusArea || ex.targetMuscle}</td>
                    <td className="py-3.5 px-4">{getDifficultyBadge(ex.difficulty)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}


      {/* CATEGORY 5: BACK & NECK PAIN RELIEF */}
      {(selectedCategory === 'All' || selectedCategory === 'Back & Neck Pain') && (
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E0DCCF] shadow-2xs space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl font-bold text-[#2D332F]">Back & Neck Pain Relief</h2>
              <p className="text-sm text-[#5C635E] leading-relaxed">
                Relieve tension from sedentary desk work, cervical spine compression, or postural imbalances with these daily targeted routines carefully prescribed by Dr. Dhanush PT.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {EXERCISES.filter(ex => ex.category === 'Back & Neck').map((ex) => (
                  <div key={ex.id} className="bg-[#F7F5F0] p-4 rounded-xl border border-[#E0DCCF] space-y-2">
                    <h4 className="text-sm font-bold text-[#2D332F]">{ex.name}</h4>
                    <p className="text-xs text-[#5C635E]">{ex.repsSets}</p>
                    <p className="text-xs text-[#5C635E]">{ex.targetMuscle}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden h-64 border border-[#E0DCCF]">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
                alt="Posture and Back Ergonomics stretch"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      )}


      {/* BOTTOM BOOKING PROMPT */}
      <div className="bg-[#2D332F] text-white p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold">Need a Personalized Rehabilitation Routine?</h3>
          <p className="text-sm text-slate-300">Schedule a 1-on-1 physical examination with {CLINIC_INFO.doctor.name} at Mylapore, Chennai.</p>
        </div>

        <button
          onClick={() => {
            onBookClick();
            setActiveTab('booking');
          }}
          className="bg-[#5B8A72] hover:bg-[#486F5C] text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          Book Consultation
        </button>
      </div>

    </div>
  );
};
