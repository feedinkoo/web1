import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, MapPin, Filter, X } from 'lucide-react';
import PersonCard from '../components/PersonCard';
import { people, skillFilters } from '../data/people';

export default function People() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('q') || '');
  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [selectedSkill, setSelectedSkill] = useState('All');
  const [openToWorkOnly, setOpenToWorkOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filteredPeople = useMemo(() => {
    return people.filter((person) => {
      const matchesKeyword =
        !keyword ||
        person.name.toLowerCase().includes(keyword.toLowerCase()) ||
        person.title.toLowerCase().includes(keyword.toLowerCase()) ||
        person.company.toLowerCase().includes(keyword.toLowerCase()) ||
        person.skills.some((s) => s.toLowerCase().includes(keyword.toLowerCase())) ||
        person.bio.toLowerCase().includes(keyword.toLowerCase());
      const matchesLocation =
        !location || person.location.toLowerCase().includes(location.toLowerCase());
      const matchesSkill =
        selectedSkill === 'All' || person.skills.includes(selectedSkill);
      const matchesOpenToWork = !openToWorkOnly || person.openToWork;
      return matchesKeyword && matchesLocation && matchesSkill && matchesOpenToWork;
    });
  }, [keyword, location, selectedSkill, openToWorkOnly]);

  const clearFilters = () => {
    setKeyword('');
    setLocation('');
    setSelectedSkill('All');
    setOpenToWorkOnly(false);
    setSearchParams({});
  };

  const hasActiveFilters = keyword || location || selectedSkill !== 'All' || openToWorkOnly;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Discover People</h1>
          <p className="text-gray-600 text-sm mb-4">Find talented professionals by job title, skills, or keywords</p>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Name, job title, skills, or keywords..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700"
            >
              <Filter size={16} />
              Filters
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Filter by Skill</label>
                  <div className="flex flex-wrap gap-2">
                    {skillFilters.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => setSelectedSkill(skill)}
                        className={`px-3 py-1.5 text-xs rounded-full font-medium transition-colors ${
                          selectedSkill === skill
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={openToWorkOnly}
                      onChange={(e) => setOpenToWorkOnly(e.target.checked)}
                      className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Only show people open to work</span>
                  </label>
                </div>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="mt-3 flex items-center gap-1 text-sm text-red-600 hover:text-red-700"
                >
                  <X size={14} /> Clear all filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredPeople.length}</span> professionals
          </p>
        </div>

        {filteredPeople.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPeople.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No people found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            <button
              onClick={clearFilters}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
