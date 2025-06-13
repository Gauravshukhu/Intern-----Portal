import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  const internship = useSelector((state) =>
    state.internships.list.find((i) => i.id === id)
  );

  if (!internship) {
    return (
      <div className="p-6 text-center text-gray-600">Internship not found</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Half: Company Banner Section */}
      <div className="relative h-[50vh] w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-4xl font-bold mb-2">{internship.company}</h1>
          <p className="text-lg mb-4">
            {internship.category || "Company Category"} - {internship.location}
          </p>
          <p className="text-sm text-gray-200">
            We are a leading company in the {internship.category?.toLowerCase()}{" "}
            industry, focusing on innovation and impactful internships to
            nurture talent.
          </p>
        </div>
      </div>

      {/* Bottom Half: Internship Details */}
      <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md -mt-12 relative z-20 space-y-8">
        {/* Title & Info */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {internship.title}
          </h2>
          <div className="text-gray-600 space-y-2">
            <p>
              <strong>Type:</strong> {internship.type}
            </p>
            <p>
              <strong>Duration:</strong> {internship.duration}
            </p>
            <p>
              <strong>Stipend:</strong> {internship.stipend}
            </p>
            <p>
              <strong>Skills Required:</strong> {internship.skills.join(", ")}
            </p>
          </div>
        </div>

        {/* Key Responsibilities */}
        <div>
          <h3 className="text-xl font-bold text-indigo-600 mb-2">
            Key Responsibilities
          </h3>
          <ol className="list-decimal ml-6 text-gray-700 space-y-1">
            <li>Conduct market research and competitor analysis</li>
            <li>
              Take client feedback, testimonials, and reviews to improve service
              quality
            </li>
            <li>
              Follow up with clients to ensure satisfaction and maintain
              relationships
            </li>
            <li>
              Remind clients about upcoming webinars or sessions and encourage
              participation
            </li>
            <li>
              Solve basic technical issues during webinars and online
              communities
            </li>
            <li>
              Support the sales team in preparing and delivering presentations
            </li>
            <li>Update the CRM system with client information</li>
            <li>Participate in meetings, webinars, and training sessions</li>
            <li>Assist in preparing reports on sales performance</li>
          </ol>
        </div>

        {/* Requirements */}
        <div>
          <h3 className="text-xl font-bold text-indigo-600 mb-2">
            Requirements
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Only graduates can apply</li>
            <li>Strong communication and interpersonal skills</li>
            <li>
              Basic understanding of sales principles and customer service
            </li>
            <li>Comfortable with feedback and solving technical issues</li>
            <li>Ability to work independently and in a team</li>
            <li>Eagerness to learn and adapt</li>
          </ul>
        </div>

        {/* Who Can Apply */}
        <div>
          <h3 className="text-xl font-bold text-indigo-600 mb-2">
            Who Can Apply
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Have relevant skills and interest</li>
          </ul>
        </div>

        {/* Perks */}
        <div>
          <h3 className="text-xl font-bold text-indigo-600 mb-2">Perks</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Certificate</li>
            <li>Flexible work hours</li>
          </ul>
        </div>

        {/* About Company */}
        <div>
          <h3 className="text-xl font-bold text-indigo-600 mb-2">
            About {internship.company}
          </h3>
          <p className="text-gray-700">
            We have been in the digital marketing industry for more than 5 years
            and have helped small businesses scale their revenue 7 times by
            consulting and strategizing for them. The most updated knowledge of
            this industry, accompanied by the most diverse experience, helps us
            build and execute an analytical strategy that hits the desired
            number with ease for all our clients.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-6">
          <Link
            to={`/apply/${internship.id}`}
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-medium transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
