import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Briefcase, Users, ThumbsUp, ArrowLeft, GraduationCap, Mail, ExternalLink } from 'lucide-react';
import { people } from '../data/people';

export default function Profile() {
  const { id } = useParams();
  const person = people.find((p) => p.id === id);

  if (!person) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-5xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Not Found</h2>
          <p className="text-gray-600 mb-4">The profile you're looking for doesn't exist.</p>
          <Link to="/people" className="text-indigo-600 hover:text-indigo-700 font-medium">
            ← Back to People
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/people" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-4">
            <ArrowLeft size={16} /> Back to People
          </Link>

          <div className="flex items-start gap-5">
            <div className="text-5xl w-20 h-20 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full">
              {person.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold text-gray-900">{person.name}</h1>
                    {person.openToWork && (
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                        Open to Work
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 font-medium mt-1">{person.title}</p>
                  <p className="text-gray-500 text-sm">{person.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={16} /> {person.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase size={16} /> {person.experience} years experience
                </span>
                <span className="flex items-center gap-1.5">
                  <Users size={16} /> {person.connections} connections
                </span>
                <span className="flex items-center gap-1.5">
                  <ThumbsUp size={16} /> {person.endorsements} endorsements
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex gap-3">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors shadow-lg text-sm">
                  <span className="flex items-center gap-2">
                    <Mail size={16} /> Send Message
                  </span>
                </button>
                <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium px-5 py-2.5 rounded-xl transition-colors text-sm">
                  Connect
                </button>
                <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium px-5 py-2.5 rounded-xl transition-colors text-sm">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">About</h2>
              <p className="text-gray-600 leading-relaxed">{person.bio}</p>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {person.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium border border-indigo-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Experience</h2>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                  {person.avatar}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{person.title}</h3>
                  <p className="text-gray-600 text-sm">{person.company}</p>
                  <p className="text-gray-400 text-xs mt-1">{person.experience} years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Profile Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Location</span>
                  <span className="font-medium text-gray-900">{person.location}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Experience</span>
                  <span className="font-medium text-gray-900">{person.experience} years</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Connections</span>
                  <span className="font-medium text-gray-900">{person.connections}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Endorsements</span>
                  <span className="font-medium text-gray-900">{person.endorsements}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Status</span>
                  <span className={`font-medium ${person.openToWork ? 'text-green-600' : 'text-gray-900'}`}>
                    {person.openToWork ? 'Open to Work' : 'Not Looking'}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <GraduationCap size={18} /> Education
              </h3>
              <p className="text-sm text-gray-600">{person.education}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
