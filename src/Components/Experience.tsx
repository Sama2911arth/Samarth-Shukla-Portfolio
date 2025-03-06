import React from 'react';

function Experience() {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold mb-8">Experience</h2>
                <p className="text-gray-400 mb-6">
                    Here is my professional background, highlighting roles, responsibilities, and achievements.
                </p>

                <div className="w-full min-h-[200px] bg-gray-800 border-2 border-blue-500 rounded-lg hover:shadow-lg transition-shadow p-6 mb-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-2">Zummit Infolabs (Feb 2025 - Present)</h3>
                    <p className="text-gray-300">Full Stack Development Intern </p>
                    <ul className="list-disc list-inside mt-2 text-gray-400">
                        <li>Participating in team meetings and code reviews to understand agile development workflows.</li>
                        <li>Assisting in developing and maintaining web applications using React.js, Node.js, and MongoDB.</li>
                    </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-500">
                    <div className="absolute top-0 -left-[7px] w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="ml-4 p-6 bg-gray-800 border-2 border-blue-500 rounded-lg hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-semibold mb-2">TechOctanet Services Pvt ltd. (June 2023 - July 2023)</h3>
                        <p className="text-gray-300">Web Development Intern</p>
                        <ul className="list-disc list-inside mt-2 text-gray-400">
                            <li>During my internship, I built multiple projects using diverse frameworks, enhancing my overall development skills.</li>
                            <li>I enhanced my skills in building and debugging complex features, from UI design to API integration.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
