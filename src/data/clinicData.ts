import { TreatmentItem, ExerciseItem, WellnessTip } from '../types';

export const CLINIC_INFO = {
  name: "Dhasai Physio Care",
  tagline: "Empowering Muscle & Movement Recovery, Every Day",
  tamilMeaningNote: "The name 'Dhasai' (தசை) represents muscle and vital tissue health, symbolizing our commitment to deep muscle rehabilitation and mobility.",
  doctor: {
    name: "Dr. Dhanush PT",
    title: "Chief Physiotherapist & Rehabilitation Specialist",
    qualifications: "PT, BPT, MPT (Orthopedics & Sports)",
    experience: "3+ Years Experience",
    rating: "4.9 / 5.0",
    reviewCount: 248,
    specialties: ["Orthopedic Rehabilitation", "Neurological Muscle Care", "Myofascial Release", "Post-Surgical Care"],
    education: "Bachelor of Physiotherapy (BPT), Master of Physiotherapy (MPT), Certified Manual Therapist",
    directPhone: "+91 63697 17957",
    clinicPhone: "+91 98765 43210",
    email: "drdhanush@dhasaiphysio.care",
    workingHours: "Mon - Sat: 08:00 - 18:00 (Sunday Closed)",
    address: "No. 2, Mylapore High Road, Mylapore, Chennai, Tamil Nadu 600004",
    bio: "Dr. Dhanush PT is a renowned physiotherapy practitioner specializing in muscle recovery, chronic joint pain, and post-operative mobility. Dedicated to clinical precision and patient comfort, he combines evidence-based manual therapy with daily home exercise routines to restore pain-free movement."
  },
  social: {
    instagram: "@dhasaiphysio.care",
    followers: "12k Followers",
    tag: "Daily Muscle & Mobility Tips"
  }
};

export const TREATMENTS: TreatmentItem[] = [
  {
    id: "ra-management",
    title: "RA Management",
    category: "Chronic Care",
    description: "Comprehensive strategies for managing Rheumatoid Arthritis through low-impact movement and muscle therapy.",
    iconName: "Activity",
    exercisesCount: 8,
    badge: "Popular"
  },
  {
    id: "nerve-rehab",
    title: "Nerve Rehab",
    category: "Neurological Care",
    description: "Neurological rehabilitation programs designed to restore muscle function, relieve trapped nerves, and reduce pain.",
    iconName: "Zap",
    exercisesCount: 6,
    badge: "Specialized"
  },
  {
    id: "mobility",
    title: "Mobility & Joint Control",
    category: "Functional Training",
    description: "Regain your freedom of movement and prevent muscle stiffness with dynamic joint stability routines.",
    iconName: "UserCheck",
    exercisesCount: 12
  },
  {
    id: "post-surgery",
    title: "Post-Surgery Recovery",
    category: "Surgical Rehab",
    description: "Safe, structured post-operative muscle recovery pathways guided carefully step-by-step.",
    iconName: "PlusSquare",
    exercisesCount: 10,
    badge: "High Care"
  },
  {
    id: "pain-relief",
    title: "Back & Neck Pain Relief",
    category: "Spinal Wellness",
    description: "Targeted myofascial therapies and posture correction for chronic back, neck, and shoulder strain.",
    iconName: "ShieldAlert",
    exercisesCount: 15
  }
];

export const EXERCISES: ExerciseItem[] = [
  {
    id: "ex-1",
    name: "Finger Tendon Glides",
    category: "RA Management",
    repsSets: "3 Sets x 10 Reps",
    duration: "5 Minutes",
    difficulty: "Beginner",
    targetMuscle: "Hand & Wrist Tendons",
    instructions: [
      "Start with hand open, fingers straight.",
      "Make a hook fist by bending the finger tips down.",
      "Make a full fist, wrapping thumb over fingers.",
      "Return to straight position slowly and repeat."
    ],
    safetyNotes: "Perform gently without forcing joints beyond comfortable pain-free limits."
  },
  {
    id: "ex-2",
    name: "Wrist Extension Circles",
    category: "RA Management",
    repsSets: "2 Sets x 15 Reps",
    duration: "4 Minutes",
    difficulty: "Beginner",
    targetMuscle: "Wrist Flexors & Forearm Muscles",
    instructions: [
      "Extend your right arm forward with palm facing down.",
      "Use left hand to gently pull fingers back toward torso.",
      "Hold for 15 seconds, then rotate wrist in smooth clockwise circles.",
      "Switch arms and repeat."
    ]
  },
  {
    id: "ex-3",
    name: "Sciatic Nerve Flossing",
    category: "Nerve Rehab",
    repsSets: "2 Sets x 12 Reps",
    duration: "6 Minutes",
    difficulty: "Intermediate",
    targetMuscle: "Sciatic Nerve & Hamstrings",
    instructions: [
      "Sit upright on a stable chair with hands resting on lower back.",
      "Extend one leg out straight while gently flexing your foot upward.",
      "As leg extends, tilt head slightly back; lower leg as head returns forward.",
      "Perform fluid motion without holding static strain."
    ],
    safetyNotes: "Do not hold at the end range if sharp tingling occurs."
  },
  {
    id: "ex-4",
    name: "Median Nerve Glide",
    category: "Nerve Rehab",
    repsSets: "3 Sets x 8 Reps",
    duration: "4 Minutes",
    difficulty: "Beginner",
    targetMuscle: "Median Nerve & Carpal Tunnel",
    instructions: [
      "Make a soft fist with thumb resting outside fingers.",
      "Extend fingers straight while keeping thumb against side.",
      "Bend wrist backward toward forearm.",
      "Extend thumb out to the side gently."
    ]
  },
  {
    id: "ex-5",
    name: "Cervical Retraction",
    category: "Nerve Rehab",
    repsSets: "2 Sets x 10 Reps",
    duration: "5 Minutes",
    difficulty: "Beginner",
    targetMuscle: "Deep Neck Flexors & Cervical Spine",
    instructions: [
      "Sit upright looking straight ahead with shoulders relaxed.",
      "Gently pull chin straight backward as if making a double chin.",
      "Hold for 3-5 seconds, feeling a gentle stretch at back of neck.",
      "Release slowly."
    ]
  },
  {
    id: "ex-6",
    name: "Hip CARs (Controlled Articular Rotations)",
    category: "Mobility",
    repsSets: "2 Sets x 5 Reps/Side",
    duration: "8 Minutes",
    difficulty: "Intermediate",
    targetMuscle: "Hip Rotators & Gluteal Muscles",
    instructions: [
      "Stand tall holding a sturdy wall or rail for balance.",
      "Lift active knee up toward chest.",
      "Rotate knee outward away from body while keeping pelvis square.",
      "Rotate thigh backward and complete controlled circle back to start."
    ]
  },
  {
    id: "ex-7",
    name: "Scapular Wall Slides",
    category: "Mobility",
    repsSets: "3 Sets x 12 Reps",
    duration: "6 Minutes",
    difficulty: "Beginner",
    targetMuscle: "Upper Back, Trapezius & Rotator Cuff",
    instructions: [
      "Stand with back, head, and hips flat against a wall.",
      "Raise arms into a 'cactus' position with elbows and back of wrists touching wall.",
      "Slide arms upward overhead without letting back arch away from wall.",
      "Lower slowly back to starting angle."
    ]
  },
  {
    id: "ex-8",
    name: "Quadriceps Sets",
    category: "Post-Surgery",
    repsSets: "3 Sets x 15 Reps",
    duration: "5 Minutes",
    difficulty: "High Caution",
    targetMuscle: "Quadriceps & Knee Joint Stability",
    instructions: [
      "Lie flat or sit with leg extended straight on a firm surface.",
      "Tighten thigh muscle by pressing back of knee flat against the surface.",
      "Hold muscle contraction firmly for 5 seconds.",
      "Relax completely for 2 seconds before next rep."
    ],
    focusArea: "Knee Stability & Post-Operative Muscle Activation"
  },
  {
    id: "ex-9",
    name: "Ankle Pumps",
    category: "Post-Surgery",
    repsSets: "5 Sets x 20 Reps",
    duration: "5 Minutes",
    difficulty: "High Caution",
    targetMuscle: "Calf Muscles & Vascular Circulation",
    instructions: [
      "Lie comfortably with legs elevated or resting extended.",
      "Point toes straight down away from body.",
      "Pull toes backward towards shins as far as comfortably possible.",
      "Repeat in smooth continuous rhythm to promote circulation."
    ],
    focusArea: "Vascular Health & Swelling Reduction"
  },
  {
    id: "ex-10",
    name: "Cat-Cow Stretch",
    category: "Back & Neck",
    repsSets: "3 Sets x 10 Cycles",
    duration: "5 Minutes",
    difficulty: "Beginner",
    targetMuscle: "Spinal Erector Muscles & Core",
    instructions: [
      "Start on all fours with hands under shoulders and knees under hips.",
      "Inhale, arch lower back down, lifting head and chest toward ceiling (Cow).",
      "Exhale, round spine upward toward ceiling, tucking chin to chest (Cat).",
      "Flow smoothly between positions with deep rhythmic breaths."
    ]
  },
  {
    id: "ex-11",
    name: "Thoracic Extension",
    category: "Back & Neck",
    repsSets: "2 Sets x 12 Reps",
    duration: "6 Minutes",
    difficulty: "Beginner",
    targetMuscle: "Mid-Back & Thoracic Spine",
    instructions: [
      "Sit upright on a chair with hands gently behind head.",
      "Lean upper back gently backward over backrest of chair.",
      "Focus extension on mid-back, avoiding excessive lower back arching.",
      "Hold for 3 seconds and return upright."
    ]
  }
];

export const WELLNESS_TIPS: WellnessTip[] = [
  {
    id: "tip-1",
    title: "Posture & Ergonomics",
    category: "Posture",
    shortDesc: "Keep your workstation ergonomic to prevent neck and shoulder muscle strain.",
    fullGuide: "Position your monitor at eye level approximately an arm's length away. Ensure feet rest flat on the floor with knees bent at a 90-degree angle. Take a 2-minute micro-stretch break every 45 minutes.",
    iconName: "User"
  },
  {
    id: "tip-2",
    title: "Joint Elasticity & Hydration",
    category: "Hydration",
    shortDesc: "Muscles and joint cartilage require adequate hydration to maintain flexibility and cushion movement.",
    fullGuide: "Muscle tissue is nearly 75% water. Drinking at least 2.5 to 3 liters of water daily helps lubricate synovial joints, reduces muscle cramps, and accelerates recovery after therapy sessions.",
    iconName: "Droplet"
  },
  {
    id: "tip-3",
    title: "Daily Dynamic Stretching",
    category: "Stretching",
    shortDesc: "Perform 5 minutes of dynamic muscle stretching every morning before strenuous activity.",
    fullGuide: "Prioritize multi-planar movements like arm circles, leg swings, and gentle torso twists. Dynamic stretching warms up muscle temperature and boosts blood circulation without weakening muscle fibers.",
    iconName: "Activity"
  },
  {
    id: "tip-4",
    title: "Sleep & Muscle Repair",
    category: "Sleep",
    shortDesc: "Deep restorative sleep is the primary window for muscle tissue repair and pain reduction.",
    fullGuide: "During slow-wave deep sleep, growth hormone is released to rebuild micro-tears in muscle tissue. Maintain a consistent sleep schedule of 7-8 hours and use a supportive cervical pillow for spinal alignment.",
    iconName: "Moon"
  }
];
