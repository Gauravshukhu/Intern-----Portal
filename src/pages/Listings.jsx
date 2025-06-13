import { useSelector, useDispatch } from "react-redux";
import { setFilter, setFilters } from "../features/internships/internshipSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Slider } from "@mui/material";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

// Mock header info (optional: pull from store if dynamic)
const internship = {
  company: "OpenAI Tech",
  category: "Software Engineering",
  location: "Remote",
};

const Listings = () => {
  const dispatch = useDispatch();
  const { list, filter, filters } = useSelector((state) => state.internships);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = list.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(filter.toLowerCase());
    const matchesWFH =
      !filters.workFromHome || job.location.toLowerCase() === "remote";
    const matchesPartTime =
      !filters.partTime || job.type.toLowerCase() === "part-time";
    const stipend = parseInt(job.stipend?.replace(/[^\d]/g, "")) || 0;
    const matchesStipend = stipend >= filters.minStipend;

    return matchesSearch && matchesWFH && matchesPartTime && matchesStipend;
  });

  useEffect(() => {
    const anyFilterApplied =
      filter.trim() !== "" ||
      filters.workFromHome ||
      filters.partTime ||
      filters.minStipend > 0;

    if (filtered.length === 0 && anyFilterApplied) {
      toast.dismiss("no-data-toast");
      toast.warning("No data found!", {
        toastId: "no-data-toast",
        autoClose: 2000,
      });
    }
  }, [filtered, filter, filters]);

  return (
    <div className="w-full">
      {/* Header Banner */}
      <div className="relative h-[50vh] w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-4xl font-bold mb-2">Grab the opportunities</h1>
          <p className="text-lg mb-4">Start your Carrer - Intern</p>
          <p className="text-sm text-gray-200">
            Best company are listed here for internship .
          </p>
        </div>
      </div>

      {/* Listings Section overlapping header */}
      <div className="w-full flex justify-center -mt-24 relative z-20">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-4 px-2 md:px-4 py-6">
          {/* Mobile Filter Toggle */}
          <div className="block md:hidden mb-4 px-2">
            <button
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Filter Sidebar */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } md:block col-span-1 bg-white border border-gray-200 rounded-xl shadow-md p-4 md:p-6 h-[600px] overflow-y-auto sticky top-10 z-10`}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">🎯 Filters</h2>

            <form className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1 mt-6">
                  Search by Profile
                </label>
                <input
                  type="text"
                  placeholder="e.g. Marketing"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={filter}
                  onChange={(e) => dispatch(setFilter(e.target.value))}
                />
              </div>

              <div className="border-t pt-4">
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="accent-indigo-500"
                    checked={filters.workFromHome}
                    onChange={(e) =>
                      dispatch(setFilters({ workFromHome: e.target.checked }))
                    }
                  />
                  <span className="text-sm text-gray-700">Work From Home</span>
                </label>
              </div>

              <div>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="accent-indigo-500"
                    checked={filters.partTime}
                    onChange={(e) =>
                      dispatch(setFilters({ partTime: e.target.checked }))
                    }
                  />
                  <span className="text-sm text-gray-700">Part-time</span>
                </label>
              </div>

              <div className="border-t pt-4">
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  Minimum Stipend: ₹{filters.minStipend}
                </label>
                <Slider
                  value={filters.minStipend}
                  min={0}
                  max={20000}
                  step={1000}
                  marks
                  onChange={(_, value) =>
                    dispatch(setFilters({ minStipend: value }))
                  }
                  valueLabelDisplay="auto"
                  sx={{ color: "#4f46e5" }}
                />
              </div>

              <button
                type="button"
                onClick={() => setShowFilters(false)}
                className="flex justify-end mt-4 px-4 py-2 w-full text-indigo-600 font-semibold"
              >
                Apply Filters
              </button>

              <button
                type="button"
                onClick={() => {
                  dispatch(setFilter(""));
                  dispatch(
                    setFilters({
                      workFromHome: false,
                      partTime: false,
                      minStipend: 0,
                    })
                  );
                }}
                className="px-4 py-2 w-full flex justify-end text-indigo-600 font-semibold"
              >
                Clear All
              </button>
            </form>
          </div>

          {/* Cards Section */}
          <div className="col-span-1 md:col-span-3 grid gap-4 grid-cols-1 sm:grid-cols-2">
            {filtered.length === 0 ? (
              <p className="text-center text-gray-500 col-span-full text-lg font-semibold bg-white py-6 rounded-xl shadow">
                🚫 No internships match your criteria.
              </p>
            ) : (
              filtered.map((job) => (
                <motion.div
                  key={job.id}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg overflow-hidden flex flex-col justify-between h-full"
                >
                  <div className="p-5 flex flex-col h-full">
                    <span className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs font-semibold rounded-full w-fit">
                      {job.category || "Internship"}
                    </span>

                    <h2 className="text-lg font-bold text-gray-800 mb-1">
                      {job.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-1">
                      {job.company} — {job.location}
                    </p>
                    <p className="text-sm text-gray-500 mb-1">
                      {job.type} | {job.duration}
                    </p>
                    <p className="text-sm text-green-600 font-semibold mb-2">
                      Stipend: {job.stipend}
                    </p>

                    <p className="text-xs text-gray-400 mb-4 mt-auto">
                      Posted on:{" "}
                      {new Date(job.postedDate).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>

                    <Link
                      to={`/detail/${job.id}`}
                      className="text-indigo-600 text-sm font-medium hover:underline"
                    >
                      View Details →
                    </Link>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
