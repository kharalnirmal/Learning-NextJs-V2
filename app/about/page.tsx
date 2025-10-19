export default function About() {
    return (
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
            <div className="mx-auto px-4 py-16 container">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    <h1 className="mb-4 font-bold text-gray-800 text-5xl">
                        About Us
                    </h1>
                    <p className="mx-auto max-w-2xl text-gray-600 text-xl">
                        We are passionate about building amazing web experiences
                    </p>
                </div>

                {/* Content Grid */}
                <div className="gap-8 grid md:grid-cols-2 mb-16">
                    {/* Mission Card */}
                    <div className="bg-white shadow-lg hover:shadow-xl p-8 rounded-lg transition-shadow">
                        <div className="mb-4 text-4xl">🎯</div>
                        <h2 className="mb-4 font-bold text-gray-800 text-2xl">Our Mission</h2>
                        <p className="text-gray-600">
                            To deliver cutting-edge solutions that empower businesses and 
                            delight users with seamless digital experiences.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-white shadow-lg hover:shadow-xl p-8 rounded-lg transition-shadow">
                        <div className="mb-4 text-4xl">🚀</div>
                        <h2 className="mb-4 font-bold text-gray-800 text-2xl">Our Vision</h2>
                        <p className="text-gray-600">
                            To be the leading innovators in web technology, creating 
                            products that make a lasting impact on the world.
                        </p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="gap-6 grid grid-cols-2 md:grid-cols-4 mb-16">
                    <div className="bg-white shadow-md p-6 rounded-lg text-center">
                        <div className="mb-2 font-bold text-purple-600 text-3xl">500+</div>
                        <div className="text-gray-600">Projects</div>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg text-center">
                        <div className="mb-2 font-bold text-blue-600 text-3xl">100+</div>
                        <div className="text-gray-600">Clients</div>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg text-center">
                        <div className="mb-2 font-bold text-green-600 text-3xl">50+</div>
                        <div className="text-gray-600">Team Members</div>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg text-center">
                        <div className="mb-2 font-bold text-orange-600 text-3xl">5+</div>
                        <div className="text-gray-600">Years</div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-12 rounded-lg text-white text-center">
                    <h2 className="mb-4 font-bold text-3xl">Ready to work with us?</h2>
                    <p className="mb-6 text-lg">Lets build something amazing together</p>
                    <button className="bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-purple-600 transition-colors">
                        Get in Touch
                    </button>
                </div>
            </div>
        </div>
    );
}