import { useState } from "react";
import { useParams } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
// import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

// Mock Data: Replace with actual data or fetch from store/context
const internship = {
  company: "OpenAI Tech",
  category: "Software Engineering",
  location: "Remote",
};

const ApplyForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [availability, setAvailability] = useState("");
  const [customAvailability, setCustomAvailability] = useState("");
  const [customResume, setCustomResume] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };

  return (
    <>
      {/* Header Banner */}
      <div className="relative h-[45vh] w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-4xl font-bold mb-2">Apply for the Internship</h1>
          <p className="text-lg mb-4">for Better Future</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md -mt-20 relative z-20 space-y-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-bold text-indigo-600 text-center">
            Apply for Internship #{id}
          </h2>

          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Why Hire You Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Why should we hire you?
            </label>
            <textarea
              placeholder="Share your skills, experience or goals..."
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              rows={5}
            ></textarea>
          </div>

          {/* Resume Info */}

          {/* Availability */}
          <div>
            <p className="font-semibold text-gray-700 mb-2">
              Confirm your availability
            </p>
            <div className="space-y-2">
              {[
                "Yes, I am available to join immediately",
                "No, I am currently on notice period",
                "No, I will have to serve notice period",
                "Other",
              ].map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-2 text-sm"
                >
                  <input
                    type="radio"
                    name="availability"
                    value={option}
                    checked={availability === option}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="accent-indigo-500"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {availability === "Other" && (
              <input
                type="text"
                placeholder="Please specify your availability"
                value={customAvailability}
                onChange={(e) => setCustomAvailability(e.target.value)}
                className="mt-3 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            )}
          </div>

          {/* Custom Resume Upload */}
          <div>
            <label className="block font-medium text-sm text-gray-700 mb-1">
              Upload Custom Resume (Optional)
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setCustomResume(e.target.files[0])}
              className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:font-medium file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200"
            />
            {customResume && (
              <p className="text-sm text-gray-600 mt-2">
                Uploaded: <strong>{customResume.name}</strong> (
                {(customResume.size / 1024).toFixed(1)} KB)
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className=" w-1/2 text-sm bg-indigo-100 text-indigo-700 hover:bg-indigo-200  py-3 rounded-xl font-semibold shadow hover:shadow-lg transition"
          >
            Submit Now
          </button>
        </form>
      </div>

      {/* Success Dialog */}
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl text-center">
            <CheckCircleIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <Dialog.Title className="text-xl font-bold text-gray-800">
              Application Submitted!
            </Dialog.Title>
            <Dialog.Description className="text-gray-600 mt-2 mb-4">
              Thank you for applying. The recruiter will contact you shortly.
            </Dialog.Description>
            <button
              className="mt-2 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
              onClick={() => navigate("/listings")}
            >
              OK
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ApplyForm;
