import React from 'react'
import Navigation from '../components/Navigation'

const AboutPage = () => {
return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Us</h1>
            <p className="text-gray-600 dark:text-gray-300">Welcome to our about page.</p>
        </div>
    </main>
)
}

export default AboutPage