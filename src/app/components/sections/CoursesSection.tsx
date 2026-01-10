'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const assessmentFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSdiNK8yfJiIa5btk4QPr2D1mo40nb8V_xN_IF4695QJVY8J3A/viewform?usp=publish-editor';

const coursesData = {
  Mathematics: [
    { level: 'Grade 9 & 10', desc: 'Foundation building in algebra, geometry, and trigonometry' },
    { level: 'Grade 11 & 12', desc: 'Advanced topics: Calculus, Vectors, Probability' },
    { level: 'JEE Main', desc: 'Comprehensive prep for JEE Main with high-yield problems' },
    { level: 'JEE Advanced', desc: 'Intensive training for JEE Advanced qualifiers' },
    { level: 'AP Calculus', desc: 'AP Calculus AB & BC aligned with US curriculum' },
    { level: 'SAT & International', desc: 'SAT Math + International curricula support' },
  ],
  Biology: [
    { level: 'Grade 9 & 10', desc: 'Cell biology, genetics, ecology foundations' },
    { level: 'Grade 11 & 12', desc: 'Advanced anatomy, physiology, genetics' },
    { level: 'NEET (UG)', desc: 'Complete NEET Biology + organic chemistry prep' },
    { level: 'International', desc: 'International curricula support (Australia, UK, US)' },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const tabVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: 10, transition: { duration: 0.2 } },
};

const courseVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState<'Mathematics' | 'Biology'>('Mathematics');

  return (
    <section className="courses-section">
      <div className="courses-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Our Courses</h2>
          <p>Tailored pathways for every student and curriculum</p>
        </motion.div>

        <motion.div
          className="course-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {(Object.keys(coursesData) as Array<keyof typeof coursesData>).map((subject) => (
            <button
              key={subject}
              onClick={() => setActiveTab(subject)}
              className={`tab-button ${activeTab === subject ? 'active' : ''}`}
            >
              <span className="tab-icon">{subject === 'Mathematics' ? '📐' : '🔬'}</span>
              {subject}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="courses-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          >
            {coursesData[activeTab].map((course, index) => (
              <motion.div
                key={course.level}
                className="course-card"
                variants={courseVariants}
                whileHover={{ y: -8 }}
              >
                <div className="course-number">{index + 1}</div>
                <h3 className="course-level">{course.level}</h3>
                <p className="course-desc">{course.desc}</p>
                <div className="course-accent"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="courses-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p>Not sure which course is right for you?</p>
          <a
            className="btn-primary"
            href={assessmentFormUrl}
            target="_blank"
            rel="noreferrer"
          >
            Schedule Your Assessment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
