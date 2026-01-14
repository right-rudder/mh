import React, { useState, useMemo } from 'react';
import { FaChevronDown, FaSearch } from "react-icons/fa";

const FAQSearchable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...data.map(item => item.category)];
  const filteredFAQs = useMemo(() => {
    let allQuestions = data.flatMap(cat => 
      cat.questions.map(q => ({ ...q, category: cat.category }))
    );

    if (selectedCategory !== "All") {
      allQuestions = allQuestions.filter(q => q.category === selectedCategory);
    }

    if (searchTerm.trim() !== "") {
      const lowerTerm = searchTerm.toLowerCase();
      allQuestions = allQuestions.filter(q => 
        q.question.toLowerCase().includes(lowerTerm) || 
        q.answer.toLowerCase().includes(lowerTerm)
      );
    }

    return allQuestions;
  }, [searchTerm, selectedCategory, data]);

  return (
    <section className="py-20 bg-white min-h-[600px]">
      <div className="max-w-4xl mx-auto px-5">
        
        <div className="text-center mb-12 space-y-8">
          <div>
            <span className="text-ochre-600 font-bold uppercase tracking-widest text-sm block">
              Support Center
            </span>
            <h2 className="text-3xl md:text-4xl !font-main-header text-ink-950 uppercase tracking-wide">
              Frequently Asked<br/> Questions
            </h2>
          </div>

          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaSearch className="text-ink-400" />
            </div>
            <input
              type="text"
              placeholder="Search for answers (e.g., 'fuel', 'pricing', 'Part 145')..."
              className="w-full pl-12 pr-4 py-4 bg-ink-50 border border-ink-100 rounded-sm text-ink-900 focus:outline-none focus:border-ochre-600 transition-colors shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                  selectedCategory === cat
                    ? "bg-ochre-600 text-white border-ochre-600 shadow-md"
                    : "bg-white text-ink-600 border-ink-200 hover:border-ochre-600 hover:text-ochre-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item, index) => (
              <details 
                key={index} 
                className="group bg-ink-50 rounded-sm border border-ink-100 open:border-ochre-600/30 transition-colors"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-ink-900 hover:text-ochre-700 transition-colors">
                  <div className="flex items-center gap-4 text-left">
                    {selectedCategory === "All" && (
                      <span className="hidden md:inline-block text-[10px] bg-ink-200 text-ink-600 px-2 py-1 rounded-sm uppercase tracking-widest">
                        {item.category}
                      </span>
                    )}
                    <span>{item.question}</span>
                  </div>
                  <FaChevronDown className="text-ochre-600 transform transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-ink-600 leading-relaxed">
                  <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              </details>
            ))
          ) : (
            <div className="text-center py-12 text-ink-400">
              <p>No results found matching your search.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default FAQSearchable;