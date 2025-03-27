import React from 'react';
import { CheckCircle } from 'lucide-react'; // Using an icon for transferable skills

interface PortfolioItemProps {
  title: string;
  dates: string;
  platforms: string;
  description: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  transferableSkills: string[];
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  dates,
  platforms,
  description,
  challenges,
  solutions,
  results,
  transferableSkills,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="p-6 md:p-8">
        <p className="text-sm text-pink-600 font-medium mb-1">{dates}</p>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-6 font-medium">Platforms: {platforms}</p>

        <p className="text-gray-700 leading-relaxed mb-6">{description}</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-1">Challenges</h4>
            <ul className="list-disc list-outside pl-5 space-y-1 text-gray-600 text-sm">
              {challenges.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-1">Solutions</h4>
            <ul className="list-disc list-outside pl-5 space-y-1 text-gray-600 text-sm">
              {solutions.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-1">Results</h4>
          <ul className="list-disc list-outside pl-5 space-y-1 text-gray-600 text-sm">
            {results.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-1">Transferable Skills to NZ Market</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            {transferableSkills.map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


const PortfolioPage: React.FC = () => {
  const portfolioItems: PortfolioItemProps[] = [
    {
      title: "E-commerce Social Media Campaign",
      dates: "2020 - 2021",
      platforms: "WeChat & Douyin",
      description: "Led a comprehensive digital marketing campaign for a major fashion retailer, combining social media engagement with influencer partnerships.",
      challenges: [
        "Highly competitive market with multiple established brands",
        "Need to differentiate brand identity across platforms",
        "Complex coordination between offline and online channels"
      ],
      solutions: [
        "Developed platform-specific content strategies",
        "Established partnerships with targeted KOLs (Key Opinion Leaders)",
        "Implemented data-driven campaign optimization"
      ],
      results: [
        "40% increase in social media engagement",
        "25% growth in online sales",
        "Expanded follower base by 100,000+"
      ],
      transferableSkills: [
        "Social media campaign management translatable to Facebook/Instagram",
        "Influencer collaboration strategies applicable to any market",
        "Data analytics and performance optimization"
      ]
    },
    {
      title: "Tourism Industry Digital Marketing",
      dates: "2018 - 2019",
      platforms: "WeChat, Weibo & SEO",
      description: "Managed digital presence for a luxury hotel chain, focusing on both domestic and international traveler segments.",
      challenges: [
        "Multi-language content requirements",
        "Seasonal booking fluctuations",
        "Competition from international hotel brands"
      ],
      solutions: [
        "Created bilingual content strategy",
        "Implemented targeted seasonal campaigns",
        "Optimized search presence across platforms"
      ],
      results: [
        "35% increase in direct bookings",
        "50% improvement in search visibility",
        "200% growth in social media engagement"
      ],
      transferableSkills: [
        "Multi-language content strategy applicable to NZ market",
        "Tourism industry expertise relevant to Auckland",
        "Cross-cultural marketing experience"
      ]
    }
    // Add more portfolio items here if needed
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Removed py-12, padding handled by App.tsx main */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Portfolio</h1>
      <p className="text-center text-gray-600 text-lg mb-16 md:mb-20 leading-relaxed max-w-3xl mx-auto">
        Showcasing key digital marketing projects with demonstrated results and transferable strategies for the New Zealand market.
      </p>

       {/* Portfolio Items Grid */}
       <div className="space-y-12 md:space-y-16">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
       </div>
    </div>
  );
};

export default PortfolioPage;
