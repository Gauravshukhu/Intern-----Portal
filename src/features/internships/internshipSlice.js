import { createSlice } from "@reduxjs/toolkit";
//Mock Data for listing purpose

const initialState = {
  list: [
    {
      id: "d1",
      title: "Frontend Developer Intern",
      company: "TechSpark",
      location: "Remote",
      category: "Technology",
      stipend: "₹10,000/month",
      duration: "3 Months",
      type: "Remote",
      skills: ["React", "Tailwind CSS"],
      postedDate: new Date().toISOString(),
    },
    {
      id: "d2",
      title: "Graphic Design Intern",
      company: "PixelCraft",
      location: "Bangalore",
      category: "Design",
      stipend: "₹8,000/month",
      duration: "2 Months",
      type: "In-office",
      skills: ["Figma", "Adobe XD"],
      postedDate: new Date().toISOString(),
    },
    {
      id: "d3",
      title: "Content Writing Intern",
      company: "WriteNow",
      location: "Remote",
      category: "Writing",
      stipend: "₹6,000/month",
      duration: "1 Month",
      type: "Remote",
      skills: ["SEO", "Blog Writing"],
      postedDate: new Date().toISOString(),
    },
    {
      id: "d4",
      title: "Backend Developer Intern",
      company: "DataCore",
      location: "Hyderabad",
      category: "Technology",
      stipend: "₹12,000/month",
      duration: "4 Months",
      type: "In-office",
      skills: ["Node.js", "MongoDB"],
      postedDate: new Date().toISOString(),
    },
    {
      id: "d5",
      title: "Marketing Intern",
      company: "BrandBuzz",
      location: "Delhi",
      category: "Marketing",
      stipend: "₹7,000/month",
      duration: "2 Months",
      type: "Hybrid",
      skills: ["Social Media", "Analytics"],
      postedDate: new Date().toISOString(),
    },
    {
      id: "d6",
      title: "UI/UX Research Intern",
      company: "UserMind",
      location: "Pune",
      category: "Design",
      stipend: "₹9,000/month",
      duration: "6 Weeks",
      type: "Remote",
      skills: ["UX Research", "Wireframing"],
      postedDate: new Date().toISOString(),
    },
  ],
  filter: "",
  filters: {
    workFromHome: false,
    partTime: false,
    minStipend: 0,
  },
};

const internshipSlice = createSlice({
  name: "internships",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
  },
});

export const { setFilter, setFilters } = internshipSlice.actions;
export default internshipSlice.reducer;
