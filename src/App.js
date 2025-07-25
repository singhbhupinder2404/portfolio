import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen text-white font-sans">
      {/* Header Section with Profile Picture */}
      <header className="p-10 text-center flex flex-col items-center justify-center">
        <motion.img
          src="/PIC.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bhupinder Singh
        </motion.h1>
        <p className="text-xl mt-2 text-gray-400">Experienced HR & Administrative Strategist</p>
        <a
          href="./BHUPINDER_SINGH.pdf"
          className="mt-5 inline-block px-6 py-2 bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-200 transition"
          download
        >
          Download Resume
        </a>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto p-10">
        <motion.div
          className="glass p-8 rounded-2xl shadow-2xl border border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p>
            A results-driven and detail-oriented Human Resources and Administrative Leader with over two decades of experience in personnel management, operations coordination, and compliance oversight within the Indian Air Force. Expert in aligning HR strategies with organizational goals to enhance productivity, morale, and long-term workforce planning. Highly adept in payroll administration, grievance resolution, legal coordination, and strategic communication. Passionate about cultivating efficient HR environments and improving administrative frameworks through modern tools and hands-on leadership.
          </p>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto p-10">
        <motion.div
          className="glass p-8 rounded-2xl shadow-2xl border border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Professional Experience</h2>
          <h3 className="text-xl font-bold">Indian Air Force | HRM / Admin Executive (2005–2024)</h3>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
            <li>Led end-to-end HR operations for a workforce of over 1,500 personnel, ensuring efficient staffing, onboarding, and organizational structuring.</li>
            <li>Directed comprehensive employee training programs, performance reviews, and succession planning initiatives to drive development and retention.</li>
            <li>Implemented modern HRMS tools for performance tracking and compliance audits aligned with national standards.</li>
            <li>Acted as liaison with legal departments for handling disciplinary proceedings and conflict resolution.</li>
            <li>Maintained strict adherence to labor regulations, health and safety codes, and internal governance policies.</li>
          </ul>
        </motion.div>
      </section>

      {/* Education & Certifications - Apple-style card */}
      <section className="max-w-4xl mx-auto p-10">
        <motion.div
          className="glass p-10 rounded-2xl shadow-2xl border border-gray-700 bg-opacity-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Education & Certifications</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-lg">
            <li>Master of Arts in Sociology – IGNOU, 2016</li>
            <li>Bachelor of Arts – Bangalore University, 2010</li>
            <li>Diploma in Office Administration & Hotel Management – Vocational Training Institute</li>
            <li>Certified in Security of Strategic Installations - IAF/IGNOU </li>
            <li>Certified in Cyber Security Literacy – Government Cyber Awareness Program</li>
            <li>Advanced Officer Training – Ethereum & Blockchain Technologies</li>
            <li>Certified Registration Authority Professional – Digital Signature Governance</li>
          </ul>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto p-10">
        <motion.div
          className="glass p-8 rounded-2xl shadow-2xl border border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Key Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <ul className="list-disc pl-5 space-y-1">
              <li>Strategic Human Resource Management</li>
              <li>Administration and Office Management</li>
              <li>Payroll & Compensation Structuring</li>
              <li>Secretarial Functions/Management, Team management</li>
              <li>Government Recruitment, Talent Acquisition & Development</li>
              <li>Policy Formulation & Labor Law Compliance</li>
              <li>Hostel management, Hotel management, Security management</li>
              <li>Logistics system and documentation, Cost control and Improvement</li>
              <li>Warehouse and storage optimisation, Vendor relationship management </li>
              <li>e-Office, IMMOLS, IAF POR Systems</li>
              <li>Python, MySQL,Javascript,MongoDB</li>
              <li>Advanced Excel, PowerPoint, Power BI</li>
              <li>Digital Signature Infrastructure Management</li>
              <li>Computer Hardware & Network Maintenance</li>
              </ul>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto p-10 pb-20">
        <motion.div
          className="glass p-8 rounded-2xl shadow-2xl border border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          <p>Email: <a href="mailto:singhbhupinderchahal@gmail.com" className="text-green-400">singhbhupinderchahal@gmail.com</a></p>
          <p>Phone: <a href="tel:+919419219866" className="text-blue-400">+91-9419219866</a></p>
          <p>Location: Bangalore, India</p>
        </motion.div>
        
      </section>
       {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6">
        © {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  );
}

export default App;
