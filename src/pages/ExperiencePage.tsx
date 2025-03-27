import React from 'react';

const ExperienceItem: React.FC<{
  dates: string;
  role: string;
  company: string;
  location: string;
  responsibilities: string[];
}> = ({ dates, role, company, location, responsibilities }) => (
  <div className="relative pl-8 py-6 border-l-2 border-pink-300 group">
    {/* Dot on the timeline */}
    <span className="absolute -left-[9px] top-8 flex h-4 w-4 items-center justify-center rounded-full bg-pink-400 ring-4 ring-white transition-all duration-300 group-hover:bg-pink-500 group-hover:ring-pink-100"></span>

    {/* Content */}
    <p className="text-sm text-gray-500 mb-1">{dates}</p>
    <h3 className="text-xl font-semibold text-gray-800 mb-1">{role}</h3>
    <p className="text-md font-medium text-gray-700 mb-3">{company}, <span className="text-gray-600 font-normal">{location}</span></p>
    <ul className="list-disc list-outside pl-5 space-y-2 text-gray-600 text-sm leading-relaxed">
      {responsibilities.map((resp, index) => (
        <li key={index}>{resp}</li>
      ))}
    </ul>
  </div>
);


const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      dates: "2020 - Present",
      role: "Senior Digital Marketing Specialist",
      company: "Global Reach Marketing",
      location: "Auckland",
      responsibilities: [
        "Lead digital strategy development and implementation for international clients seeking to enter the NZ and Australian markets, with specialized expertise in Chinese digital platforms.",
        "Developed and executed cross-platform marketing strategies resulting in 45% average increase in brand engagement and 30% growth in conversion rates.",
        "Managed social media presence across WeChat, Douyin, Facebook and Instagram with combined following of 150K+.",
        "Optimized SEO/SEM campaigns, achieving first-page Google rankings for 85% of client target keywords.",
        "Created and localized bilingual content strategies for tourism, education, and retail clients."
      ]
    },
    {
      dates: "2016 - 2020",
      role: "Digital Marketing Manager",
      company: "East-West Connect",
      location: "Shanghai",
      responsibilities: [
        "Managed digital marketing initiatives for Western brands entering the Chinese market, with focus on strategy, content localization, and performance optimization.",
        "Led digital strategy for 10+ international brands, achieving average 38% increase in Chinese market digital engagement.",
        "Developed and executed WeChat and Douyin marketing plans, including influencer collaborations that generated 250K+ impressions per campaign.",
        "Implemented data analytics systems for reporting, increasing operational efficiency by 25%.",
        "Supervised team of 5 content creators and social media specialists."
      ]
    },
    {
      dates: "2012 - 2016",
      role: "Content Marketing Specialist",
      company: "Digital Bridge Agency",
      location: "Beijing",
      responsibilities: [
        "Created and managed bilingual content strategies for international educational institutions and tourism brands targeting the Chinese market.",
        "Developed content strategy and localization guidelines for 8 educational clients, supporting 40% average growth in Chinese student applications.",
        "Created and managed content calendars for Chinese social media platforms, achieving 65% increase in engagement.",
        "Collaborated with design and development teams to create culturally appropriate landing pages with improved conversion rates."
      ]
    },
    {
      dates: "2008 - 2012",
      role: "Marketing Coordinator",
      company: "China Tourism Group",
      location: "Chongqing",
      responsibilities: [
        "Coordinated marketing activities for domestic and international tourism campaigns, including digital content, event planning and partnership management.",
        "Assisted in launching the company's first social media presence, gaining 50K+ followers in first year.",
        "Coordinated content production for digital campaigns promoting Chinese destinations to international tourists.",
        "Supported marketing events and promotional activities with international tourism boards."
      ]
    }
  ];

  return (
   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {/* Added padding */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Professional Experience</h1>
      <p className="text-center text-gray-600 text-lg mb-16 md:mb-20 leading-relaxed max-w-3xl mx-auto"> {/* Adjusted margin and max-width */}
        Over the past 15+ years, I've built expertise in managing digital marketing campaigns, focusing on social media, SEO/SEM, and content creation, particularly for the Chinese market. Based in Auckland, I leverage my international experience to deliver data-driven marketing results across various sectors.
      </p>

      {/* Experience Timeline */}
      <div className="space-y-8 max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            dates={exp.dates}
            role={exp.role}
            company={exp.company}
            location={exp.location}
            responsibilities={exp.responsibilities}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
