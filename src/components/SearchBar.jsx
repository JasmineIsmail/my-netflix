import React from "react";
import { useRef } from "react";
import client from "../utils/geminiai";
import ai from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSearchResult } from "../utils/AISearchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const systemPrompt = `
        You are a highly advanced cinematic recommendation engine built into a Netflix clone.
        Analyze the user's request and suggest upto 9 real movie titles that match perfectly.
        
        CRITICAL REQUIREMENT: Your entire response must be a valid JSON array of strings containing ONLY the movie titles and the language, like this:
        [{"title":"Movie Title 1",
        "language":"language code"}, 
        {"title":"Movie Title 2",
        "language":"language code"},
        {"title":"Movie Title 3",
        "language":"language code"}]
         Do not include markdown formatting, backticks (\`\`\`), or extra conversational text. Just the raw array.
      `;
      const handleAISearch = async () => {
        try {
          const AISearchResult = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `${systemPrompt}\n\nUser request: "${searchText.current.value}"`,
          });
          const cleanText = AISearchResult.text.replace(/```json|```/g, "").trim();
          const recommendedTitles = JSON.parse(cleanText);
          const tmdbOutput = recommendedTitles.map(async ({ title, language }) => {
      // Wrap each separate fetch in its own try/catch block
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(title)}&include_adult=false&page=1`,
          API_OPTIONS
        );

        if (!res.ok) {
          console.error(`TMDB Server Error for ${title}: Status ${res.status}`);
          return null;
        }

        const data = await res.json();
        // Fallback safety if results are empty or missing
        if (!data.results || data.results.length === 0) return null;

        const exactMovie = data.results.find((movie) => {
          const tmdbTitleClean = movie.title?.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
          const aiTitleClean = title.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
          
          return tmdbTitleClean === aiTitleClean && movie.original_language === language;
        });

        // If strict language match fails, return the first result as a fallback
        return exactMovie || data.results[0]; 

      } catch (fetchError) {
        // This will capture the exact point where ERR_CONNECTION_CLOSED hits
        console.error(`Network pipeline failed for title: "${title}"`, fetchError);
        return null;
      }
    });

    const tmdbResult = await Promise.all(tmdbOutput);
    
    // Clean out null objects from failed network requests before dispatching to Redux
    const cleanTmdbResult = tmdbResult.filter(movie => movie !== null);
   
    
    dispatch(addSearchResult(cleanTmdbResult));

  } catch (error) {
    console.error("Critical failure in handleAISearch processing:", error);
  }
};
    return (
    <div className="mt-[35%] md:mt-[10%] flex justify-center">
      <form
        className="bg-black w-3/4 md:w-1/2 grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="rounded-lg m-4 p-2 text-white col-span-9 "
          type="text"
          placeholder="What would you like to watch today?"
        ></input>
        <button
          className="bg-red-700 text-white font-bold pt-1.5 px-2 col-span-3 rounded-lg m-2"
          onClick={handleAISearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
