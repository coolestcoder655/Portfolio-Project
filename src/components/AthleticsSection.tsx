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
                        <Trophy className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                        <h2 className="text-3xl font-bold transition-colors duration-300 text-slate-800 dark:text-white">
                            Athletics & Competitions
                        </h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="p-6 transition-colors duration-300 bg-white shadow-lg dark:bg-slate-800 rounded-2xl">
                            <h3 className="mb-4 text-xl font-semibold transition-colors duration-300 text-slate-800 dark:text-white">
                                Competitive Programming
                            </h3>
                            <ul className="space-y-2 transition-colors duration-300 text-slate-700 dark:text-slate-200">
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                                    <span className="text-sm">
                                        ACM ICPC World Finals - Top 20
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-gray-400 dark:text-gray-300" />
                                    <span className="text-sm">
                                        Google Code Jam - Round 3 Qualifier
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-orange-400 dark:text-orange-300" />
                                    <span className="text-sm">
                                        Facebook Hacker Cup - Top 100
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 transition-colors duration-300 bg-white shadow-lg dark:bg-slate-800 rounded-2xl">
                            <h3 className="mb-4 text-xl font-semibold transition-colors duration-300 text-slate-800 dark:text-white">
                                Hackathons
                            </h3>
                            <ul className="space-y-2 transition-colors duration-300 text-slate-700 dark:text-slate-200">
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                                    <span className="text-sm">
                                        TechCrunch Disrupt - 1st Place
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                                    <span className="text-sm">MIT HackMIT - Winner</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-gray-400 dark:text-gray-300" />
                                    <span className="text-sm">
                                        Stanford TreeHacks - 2nd Place
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 transition-colors duration-300 bg-white shadow-lg dark:bg-slate-800 rounded-2xl">
                            <h3 className="mb-4 text-xl font-semibold transition-colors duration-300 text-slate-800 dark:text-white">
                                Athletic Achievements
                            </h3>
                            <ul className="space-y-2 transition-colors duration-300 text-slate-700 dark:text-slate-200">
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                                    <span className="text-sm">
                                        Varsity Tennis - Team Captain
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-gray-400 dark:text-gray-300" />
                                    <span className="text-sm">
                                        Marathon Finisher - Sub 3:30
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-orange-400 dark:text-orange-300" />
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