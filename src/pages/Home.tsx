import React from 'react';
import Hero from '../components/Hero';
import JobCard from '../components/JobCard';
import PersonCard from '../components/PersonCard';
import { jobs } from '../data/jobs';
import { people } from '../data/people';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Globe } from 'lucide-react';

export default function Home() {
  const recentJobs = jobs.slice(0, 4);
  const featuredPeople = people.filter((p) => p.openToWork).slice(0, 4);

  return (
    <div>
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Job Search</h3>
              <p className="text-gray-600 text-sm">
                Find the perfect job with our advanced search. Filter by location, salary, job type, and more.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discover Talent</h3>
              <p className="text-gray-600 text-sm">
                Search for professionals by skills, job title, or keywords. Connect with top talent worldwide.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Profiles</h3>
              <p className="text-gray-600 text-sm">
                All profiles and job listings are verified. Find trustworthy opportunities and candidates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Jobs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Recent Job Openings</h2>
              <p className="text-gray-600 mt-1">Explore the latest opportunities from top companies</p>
            </div>
            <Link
              to="/jobs"
              className="hidden sm:flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              View All Jobs <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recentJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              View All Jobs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured People */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Talent Available Now</h2>
              <p className="text-gray-600 mt-1">Top professionals actively looking for opportunities</p>
            </div>
            <Link
              to="/people"
              className="hidden sm:flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium text-sm"
            >
              Discover More <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredPeople.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link
              to="/people"
              className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium text-sm"
            >
              Discover More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Take the Next Step?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Whether you're looking for your next role or seeking top talent, JobHub has you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/jobs"
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Browse Jobs
            </Link>
            <Link
              to="/post-job"
              className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-400 transition-colors border border-blue-400"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">JobHub</h4>
              <p className="text-sm">The modern job board for finding jobs and discovering talent.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/jobs" className="hover:text-white">Browse Jobs</Link></li>
                <li><Link to="/people" className="hover:text-white">Network</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/post-job" className="hover:text-white">Post a Job</Link></li>
                <li><Link to="/people" className="hover:text-white">Find Talent</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© 2024 JobHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
