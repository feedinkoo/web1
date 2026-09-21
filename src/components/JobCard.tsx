import React from 'react';
import { MapPin, Clock, DollarSign, Briefcase, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Job } from '../data/types';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const daysAgo = Math.floor(
    (new Date().getTime() - new Date(job.postedDate).getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <Link
      to={`/jobs/${job.id}`}
      className="block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-200 p-5 group"
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
          {job.logo}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600 mt-0.5">{job.company}</p>
            </div>
            {job.urgent && (
              <span className="flex items-center gap-1 text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full whitespace-nowrap">
                <Zap size={12} />
                Urgent
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase size={14} />
              {job.type}
            </span>
            <span className="flex items-center gap-1">
              <DollarSign size={14} />
              {job.salary}
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
              {job.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock size={12} />
              {daysAgo === 0 ? 'Today' : `${daysAgo}d ago`}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
