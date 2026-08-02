import React, { useState } from 'react';
import { CLINIC_INFO, EXERCISES } from '../data/clinicData';
import { ExerciseItem } from '../types';
import {
  CheckCircle,
  Circle,
  Search,
  Printer,
  Download,
  Info,
  ShieldAlert,
  Play,
  RotateCcw,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const ExercisesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [completedExercises, setCompletedExercises] = useState<Record<string, boolean>>({});
  const [expandedExerciseId, setExpandedExerciseId] = useState<string | null>('ex-1');

  const categories = ['All', 'RA Management', 'Nerve Rehab', 'Mobility', 'Post-Surgery', 'Back & Neck'];

  const filteredExercises = EXERCISES.filter((ex) => {
    const matchesCategory = categoryFilter === 'All' || ex.category === categoryFilter;
    const matchesSearch =
      ex.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ex.targetMuscle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleComplete = (id: string) => {
    setCompletedExercises((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(completedExercises).filter(Boolean).length;
  const totalCount = EXERCISES.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E0DCCF] pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-[#EBF2EE] text-[#2D332F] border border-[#5B8A72]/30 px-3 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#5B8A72]" />
            Patient Digital Exercise Routine
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D332F] tracking-tight">
            Guided Daily Exercise Charts
          </h1>
          <p className="text-sm sm:text-base text-[#5C635E]">
            Interactive step-by-step muscle routines prescribed by <strong className="text-[#2D332F]">{CLINIC_INFO.doctor.name}</strong>. Complete your daily set and track recovery progress.
          </p>
        </div>

        {/* Print / Download Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-white hover:bg-[#F2EDE4] text-[#2D332F] border border-[#E0DCCF] px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-2xs transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-[#5B8A72]" />
            Print Chart
          </button>
        </div>
      </div>

      {/* Daily Progress Tracker Card */}
      <div className="bg-[#2D332F] text-white p-6 rounded-3xl shadow-xl border border-[#3F4842] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h2 className="text-xl font-bold">Today's Rehabilitation Progress</h2>
          <p className="text-xs text-[#A3C7B5]">
            {completedCount} of {totalCount} daily routines marked completed
          </p>
        </div>

        <div className="w-full md:w-1/2 space-y-2">
          <div className="flex justify-between text-xs font-bold text-[#A3C7B5]">
            <span>Progress: {progressPercent}%</span>
            <span>{completedCount === totalCount ? '🎉 Daily Goal Completed!' : 'Keep Moving'}</span>
          </div>
          <div className="w-full bg-[#1F2421] h-3 rounded-full overflow-hidden p-0.5 border border-[#3F4842]">
            <div
              className="bg-[#5B8A72] h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {completedCount > 0 && (
          <button
            onClick={() => setCompletedExercises({})}
            className="text-xs text-slate-400 hover:text-white underline flex items-center gap-1 cursor-pointer shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Checklist
          </button>
        )}
      </div>

      {/* Search and Category Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                categoryFilter === cat
                  ? 'bg-[#5B8A72] text-white shadow-2xs'
                  : 'bg-[#EAE6DA] text-[#5C635E] hover:bg-[#E0DCCF] hover:text-[#2D332F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-[#8E928F] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search exercises or muscles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#E0DCCF] text-xs focus:outline-none focus:border-[#5B8A72] bg-[#F7F5F0]"
          />
        </div>
      </div>

      {/* Exercises List Accordion / Cards */}
      <div className="space-y-4">
        {filteredExercises.length === 0 ? (
          <div className="bg-[#F2EDE4] border border-[#E0DCCF] p-8 rounded-2xl text-center text-[#5C635E] text-sm">
            No exercises match your filter. Try clearing the search query or category filter.
          </div>
        ) : (
          filteredExercises.map((ex) => {
            const isCompleted = !!completedExercises[ex.id];
            const isExpanded = expandedExerciseId === ex.id;

            return (
              <div
                key={ex.id}
                className={`bg-white rounded-2xl border transition-all ${
                  isCompleted
                    ? 'border-[#5B8A72] bg-[#EBF2EE]/40 shadow-2xs'
                    : 'border-[#E0DCCF] shadow-2xs hover:border-[#5B8A72]'
                }`}
              >
                {/* Header bar of exercise card */}
                <div className="p-5 flex items-center justify-between gap-4">
                  
                  {/* Left: Checkbox + Title */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleComplete(ex.id)}
                      className="text-[#5B8A72] hover:scale-110 transition-transform cursor-pointer shrink-0"
                      title={isCompleted ? 'Mark incomplete' : 'Mark complete'}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6 text-[#5B8A72] fill-[#EBF2EE]" />
                      ) : (
                        <Circle className="w-6 h-6 text-[#C2BCAC] hover:text-[#8E928F]" />
                      )}
                    </button>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`text-base font-bold ${isCompleted ? 'line-through text-[#8E928F]' : 'text-[#2D332F]'}`}>
                          {ex.name}
                        </h3>
                        <span className="bg-[#EBF2EE] text-[#2D332F] text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#5B8A72]/20">
                          {ex.category}
                        </span>
                      </div>
                      <p className="text-xs text-[#5C635E] mt-0.5">
                        Target: <span className="font-semibold text-[#2D332F]">{ex.targetMuscle}</span> • {ex.repsSets}
                      </p>
                    </div>
                  </div>

                  {/* Right: Difficulty + Expand toggle */}
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F2EDE4] text-[#2D332F]">
                      {ex.duration}
                    </span>

                    <button
                      onClick={() => setExpandedExerciseId(isExpanded ? null : ex.id)}
                      className="p-2 text-[#8E928F] hover:text-[#2D332F] rounded-lg hover:bg-[#F2EDE4] transition-colors cursor-pointer"
                      aria-label="Expand exercise details"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-[#E0DCCF] space-y-4 text-xs sm:text-sm text-[#2D332F]">
                    <div>
                      <h4 className="font-bold text-[#2D332F] mb-2 flex items-center gap-1.5">
                        <Info className="w-4 h-4 text-[#5B8A72]" />
                        Step-by-Step Instructions:
                      </h4>
                      <ol className="list-decimal list-inside space-y-1.5 text-[#5C635E] pl-1">
                        {ex.instructions.map((step, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {ex.safetyNotes && (
                      <div className="bg-[#F5EAD6] border border-[#E0C9A6] p-3 rounded-xl flex items-start gap-2.5 text-[#6B4E26] text-xs">
                        <ShieldAlert className="w-4 h-4 text-[#B87214] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold">Safety & Clinical Precaution:</span> {ex.safetyNotes}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs text-[#5C635E] pt-2 border-t border-[#E0DCCF]">
                      <span>Prescribed by {CLINIC_INFO.doctor.name} ({CLINIC_INFO.name})</span>
                      <button
                        onClick={() => toggleComplete(ex.id)}
                        className="text-xs font-semibold text-[#5B8A72] hover:underline cursor-pointer"
                      >
                        {isCompleted ? 'Mark as Pending' : 'Mark Exercise Completed'}
                      </button>
                    </div>
                  </div>
                )}

              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
