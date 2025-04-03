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
      dates: "2016 - 2022",
      role: "Project Manager",
      company: "Beijing Ruiyousi Information Technology Co., Ltd.",
      location: "Beijing",
      responsibilities: [
        "Oversaw the development and promotion of multiple websites and mobile apps, maintaining a customer satisfaction rate above 90%. Coordinated technical, design, and operations teams to ensure timely, high-quality, and on-budget deliveries.",
        "Monitored key metrics via Google Analytics, Baidu, and third-party tools. Analyzed cost vs. revenue across channels, identifying highest ROI platforms. Used A/B testing and audience segmentation to raise CTR by 20% and cut acquisition costs by 15%.",
        "Focused on producing high-value content for WeChat and other new media platforms, driving a 60% increase in online sales for clients.",
        "Applied strategies like emotional marketing and scarcity marketing, boosting brand awareness and product visibility by 45%.",
        "Handled multi-channel online sales of New Zealand health supplements, gaining extensive product knowledge and cross-border marketing experience."
      ]
    },
    {
      dates: "2014 - 2016",
      role: "Online Marketing Manager",
      company: "Beijing Shenghanmei Aesthetic Hospital",
      location: "Beijing",
      responsibilities: [
        "Redesigned the hospital's main website around user experience, increasing overall traffic and consultation conversions by 40%.",
        "Crafted engaging content across major online platforms, achieving a 35% rise in inquiries for cosmetic procedures.",
        "Grew WeChat account to 200,000 followers in three months. Through community and Moments campaigns, drove daily visits to 20-30 new patients, increasing net profit by CNY 100K-300K per day.",
        "Managed both Google Ads and Baidu SEM, improving overall ROI by 50%, delivering significant profitability for the hospital."
      ]
    },
    {
      dates: "2011 - 2014",
      role: "Editorial Department Manager",
      company: "Beijing Baidecheng Technology Co., Ltd.",
      location: "Beijing",
      responsibilities: [
        "Led daily operations of the marketing team, improving landing page design and copywriting. Increased website click-through rates by 50% and boosted inquiry/conversion rates by 30%.",
        "Built multiple websites targeting different product keywords, leveraging 'site cluster' effects and search engine crawlers, driving daily organic searches into hundreds of millions.",
        "Oversaw both Google Ads and Baidu PPC, implementing precise bidding and audience targeting strategies, improving overall ROI by 30%.",
        "Spearheaded website redesign focused on clear structure and user-friendly interfaces, reducing bounce rates by 18%.",
        "Utilized TV interviews, promotional videos, magazines, newspapers, online forums, and blogs to broaden brand reach."
      ]
    },
    {
      dates: "2007 - 2010",
      role: "Website Planning & Design Specialist",
      company: "Beijing Lianchuang Network Technology Co., Ltd.",
      location: "Beijing",
      responsibilities: [
        "Devised keyword strategies and optimized article titles, increasing daily organic traffic from 100 to 20,000 within 3-6 months, focusing on sustainable growth.",
        "Used Microsoft Visio to map out website content and structure, optimizing layouts and information architecture, resulting in 30% boost in user engagement and 20% increase in online transactions.",
        "Leveraged various channels—friend links, forums, blogs, and Baidu Tieba—to build brand exposure and user loyalty.",
        "Managed over 30 website projects on time and within budget, leading to follow-up contracts worth approximately NZD 2 million."
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
