import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">About Sarah Liu</h1>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start mb-16">
        {/* Image Column */}
        <div className="md:col-span-1 flex justify-center">
          <img
            // Using a placeholder image URL from Unsplash
            src="/images/sarahliu.png"
            alt="Sarah Liu"
            className="rounded-lg w-full max-w-xs object-cover shadow-md"
          />
        </div>

        {/* Text Column */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Summary</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            A results-driven Digital Marketing Expert with over 15 years of experience managing impactful campaigns across social media, SEO/SEM, and content marketing. Specializing in bridging New Zealand businesses with the Chinese market. Currently based in Auckland, leveraging extensive international experience to craft and execute tailored, data-driven marketing strategies that deliver measurable results across e-commerce, retail, tourism, and education sectors.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Known for exceptional communication, cross-functional leadership, and analytical problem-solving skills, consistently driving brand growth and customer engagement for businesses expanding between New Zealand and China.
          </p>
        </div>
      </div>

      {/* Core Competencies */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Core Competencies</h2>
        <div className="space-y-4">
          <CompetencyItem title="Digital Marketing Strategy:" description="Strategic campaign planning, execution, and performance analysis." />
          <CompetencyItem title="Social Media Management:" description="Targeted marketing in WeChat, ReNote, Douyin (TikTok), Facebook and Instagram." />
          <CompetencyItem title="SEO & SEM Optimization:" description="Expert in keyword research, on-page/off-page SEO strategies, and paid search management." />
          <CompetencyItem title="Content Creation & Localization:" description="Producing bilingual (English & Mandarin) content that resonates with targeted audiences." />
          <CompetencyItem title="Digital Media Production:" description="Skilled in creating engaging videos and high-conversion landing pages." />
          <CompetencyItem title="Data-Driven Analysis:" description="Proficient in Google Analytics, KPI tracking, and advanced Excel reporting." />
          <CompetencyItem title="Cross-Functional Collaboration:" description="Effective experience collaborating with creative, technical, and business teams." />
          <CompetencyItem title="Project Management:" description="Effective in scheduling, resource allocation, and stakeholder communications." />
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Education</h2>
        <div className="relative pl-6 border-l-2 border-pink-300 space-y-6">
           <EducationItem
             degree="New Zealand Certificate in English Language (Level 5)"
             institution=""
             years=""
           />
           <EducationItem
             degree="Diploma in Advertising and Promotion"
             institution="Chongqing University of Technology"
             years="2003 – 2006"
           />
        </div>
      </section>

      {/* Personal Attributes */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Personal Attributes</h2>
        <ul className="list-none space-y-3">
          <AttributeItem text="Detail-oriented execution and analytical mindset" />
          <AttributeItem text="Strong team collaboration and positive attitude" />
          <AttributeItem text="Highly adaptable in fast-paced, multicultural environments" />
          <AttributeItem text="Solution-focused approach to problem-solving" />
        </ul>
      </section>
    </div>
  );
};

// Helper components for styling list items
const CompetencyItem = ({ title, description }: { title: string; description: string }) => (
  <div className="grid md:grid-cols-3 gap-2">
    <strong className="md:col-span-1 text-gray-700">{title}</strong>
    <p className="md:col-span-2 text-gray-600">{description}</p>
  </div>
);

const EducationItem = ({ degree, institution, years }: { degree: string; institution: string; years: string }) => (
  <div className="relative">
     <span className="absolute -left-[34px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-400 ring-4 ring-white"></span>
     <h3 className="font-semibold text-gray-800">{degree}</h3>
     {institution && <p className="text-sm text-gray-600">{institution} {years && `(${years})`}</p>}
  </div>
);

const AttributeItem = ({ text }: { text: string }) => (
   <li className="flex items-start">
     <span className="flex-shrink-0 w-2 h-2 mt-[9px] mr-3 bg-pink-400 rounded-full"></span>
     <span className="text-gray-600">{text}</span>
   </li>
);


export default AboutPage;
