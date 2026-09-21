import React from 'react';
import { MapPin, Briefcase, Users, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Person } from '../data/types';

interface PersonCardProps {
  person: Person;
}

export default function PersonCard({ person }: PersonCardProps) {
  return (
    <Link
      to={`/people/${person.id}`}
      className="block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-200 p-5 group"
    >
      <div className="flex items-start gap-4">
        <div className="text-4xl w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full group-hover:from-indigo-100 group-hover:to-purple-100 transition-colors">
          {person.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {person.name}
              </h3>
              <p className="text-sm text-gray-600 mt-0.5 truncate">{person.title}</p>
              <p className="text-xs text-gray-500">{person.company}</p>
            </div>
            {person.openToWork && (
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full whitespace-nowrap">
                Open to Work
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {person.location}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase size={14} />
              {person.experience} yrs exp
            </span>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {person.skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full"
              >
                {skill}
              </span>
            ))}
            {person.skills.length > 4 && (
              <span className="text-xs text-gray-400 px-1">+{person.skills.length - 4}</span>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-50">
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Users size={12} />
              {person.connections} connections
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <ThumbsUp size={12} />
              {person.endorsements} endorsements
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
