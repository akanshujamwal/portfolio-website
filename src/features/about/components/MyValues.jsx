// MyValues — 4 value cards explaining the developer's approach and philosophy.

import { aboutData } from "../../home/data/mockData";
import SectionHeader from "../../../shared/components/SectionHeader";

export default function MyValues() {
  return (
    <section className="bg-gray-950 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="How I Work"
          title="My Approach"
          subtitle="The principles that guide every project I take on."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.values.map((value, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 hover:border-indigo-500/40 rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/5 group"
            >
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-2xl group-hover:bg-indigo-500/20 transition-colors">
                {value.icon}
              </div>
              <h3 className="text-white font-semibold text-base group-hover:text-indigo-400 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}