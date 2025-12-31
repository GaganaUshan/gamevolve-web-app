import { Gamepad2, Target, Heart, Zap } from 'lucide-react';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e161e] to-[#472b3f] py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#e18cc5] to-[#ba5c93]">
            About GameVolve
          </h1>
          <p className="text-xl text-gray-400">
            Your trusted source for gaming news and updates
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-[#472b3f] to-[#1e161e] rounded-2xl border border-[#80496c] shadow-2xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#e18cc5]/10 rounded-lg">
                <Gamepad2 className="size-8 text-[#e18cc5]" />
              </div>
              <h2 className="text-3xl text-[#e18cc5]">Our Mission</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              GameVolve is dedicated to bringing you the latest and most accurate gaming news from around the world. 
              We cover everything from AAA titles to indie gems, esports tournaments to industry developments, 
              ensuring you're always in the loop with what's happening in the gaming community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ValueCard
              icon={<Target className="size-8 text-[#ba5c93]" />}
              title="Accuracy"
              description="We verify our sources and deliver factual, reliable news"
            />
            <ValueCard
              icon={<Zap className="size-8 text-[#e18cc5]" />}
              title="Speed"
              description="Breaking news delivered as it happens"
            />
            <ValueCard
              icon={<Heart className="size-8 text-[#80496c]" />}
              title="Passion"
              description="Made by gamers, for gamers"
            />
          </div>

          <div className="bg-gradient-to-br from-[#472b3f] to-[#1e161e] rounded-2xl border border-[#80496c] shadow-2xl p-10">
            <h2 className="text-3xl text-[#e18cc5] mb-6">What We Cover</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Breaking Gaming News',
                'Game Reviews & Previews',
                'Esports Coverage',
                'Industry Analysis',
                'Hardware & Technology',
                'Indie Game Spotlights',
                'Gaming Events',
                'Developer Interviews'
              ].map((topic, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300">
                  <div className="size-2 bg-[#e18cc5] rounded-full"></div>
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#ba5c93]/30 to-[#80496c]/30 rounded-2xl border border-[#e18cc5]/30 p-10 text-center">
            <h2 className="text-3xl text-[#e18cc5] mb-4">Join Our Community</h2>
            <p className="text-gray-300 mb-6">
              Stay updated with the latest gaming news and be part of our growing community
            </p>
            <div className="text-[#e18cc5]">
              More features coming soon!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#472b3f] to-[#1e161e] rounded-xl border border-[#80496c] p-6 hover:border-[#e18cc5]/30 transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl text-[#e18cc5] mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}