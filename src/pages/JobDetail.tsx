import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Briefcase, ArrowLeft, CheckCircle, Zap, Building } from 'lucide-react';
import { jobs } from '../data/jobs';

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-5xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Job Not Found</h2>
          <p className="text-gray-600 mb-4">The job you're looking for doesn't exist.</p>
          <Link to="/jobs" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  const daysAgo = Math.floor(
    (new Date().getTime() - new Date(job.postedDate).getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/jobs" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-4">
            <ArrowLeft size={16} /> Back to Jobs
          </Link>

          <div className="flex items-start gap-4">
            <div className="text-4xl w-16 h-16 flex items-center justify-center bg-gray-50 rounded-xl">
              {job.logo}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <Building size={16} className="text-gray-400" />
                    <span className="text-gray-600">{job.company}</span>
                  </div>
                </div>
                {job.urgent && (
                  <span className="flex items-center gap-1 text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full">
                    <Zap size={14} /> Urgent Hire
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={16} /> {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase size={16} /> {job.type}
                </span>
                <span className="flex items-center gap-1.5">
                  <DollarSign size={16} /> {job.salary}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={16} /> Posted {daysAgo === 0 ? 'today' : `${daysAgo} days ago`}
                </span>
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <div className="mt-6 flex gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-lg">
              Apply Now
            </button>
            <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium px-6 py-3 rounded-xl transition-colors">
              Save Job
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Job Description</h2>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h2>
              <ul className="space-y-2">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Benefits & Perks</h2>
              <div className="flex flex-wrap gap-2">
                {job.benefits.map((benefit, i) => (
                  <span
                    key={i}
                    className="bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Job Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Category</span>
                  <span className="font-medium text-gray-900">{job.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Job Type</span>
                  <span className="font-medium text-gray-900">{job.type}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Location</span>
                  <span className="font-medium text-gray-900">{job.location}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Salary</span>
                  <span className="font-medium text-gray-900">{job.salary}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Posted</span>
                  <span className="font-medium text-gray-900">{daysAgo === 0 ? 'Today' : `${daysAgo}d ago`}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">About {job.company}</h3>
              <p className="text-sm text-gray-600">
                {job.company} is a leading technology company committed to innovation and excellence.
                Join our team and be part of something amazing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
