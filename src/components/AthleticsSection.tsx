import { Trophy } from 'lucide-react';

interface AthleticSectionProps {
    isOutOfCollege?: boolean;
}

const AthleticSection: React.FC<AthleticSectionProps> = ({ isOutOfCollege = false }) => {
    return (
        <>
            {isOutOfCollege && (
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <Trophy className="w-8 h-8 text-indigo-600" />
                        <h2 className="text-3xl font-bold text-slate-800">
                            Athletics & Competitions
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">
                                Competitive Programming
                            </h3>
                            <ul className="space-y-2 text-slate-700">
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-gold-500" />
                                    <span className="text-sm">
                                        ACM ICPC World Finals - Top 20
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-silver-400" />
                                    <span className="text-sm">
                                        Google Code Jam - Round 3 Qualifier
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-bronze-400" />
                                    <span className="text-sm">
                                        Facebook Hacker Cup - Top 100
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">
                                Hackathons
                            </h3>
                            <ul className="space-y-2 text-slate-700">
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-gold-500" />
                                    <span className="text-sm">
                                        TechCrunch Disrupt - 1st Place
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-gold-500" />
                                    <span className="text-sm">MIT HackMIT - Winner</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-silver-400" />
                                    <span className="text-sm">
                                        Stanford TreeHacks - 2nd Place
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">
                                Athletic Achievements
                            </h3>
                            <ul className="space-y-2 text-slate-700">
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-gold-500" />
                                    <span className="text-sm">
                                        Varsity Tennis - Team Captain
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-silver-400" />
                                    <span className="text-sm">
                                        Marathon Finisher - Sub 3:30
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-bronze-400" />
                                    <span className="text-sm">
                                        Rock Climbing - Advanced Level
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default AthleticSection;