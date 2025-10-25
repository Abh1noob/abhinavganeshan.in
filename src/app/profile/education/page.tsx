import React from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookCopy,
} from "lucide-react";
import { education } from "@/config/education";

const EducationPage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <BookCopy className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Education</h1>
            <p className="text-muted-foreground">
              My academic journey and educational background
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {edu.institution}
                  </p>
                </div>
              </div>

              {edu.marks && (
                <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full">
                  <Award className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    {edu.marks}
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{edu.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{edu.location}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Key Highlights:
              </h4>
              <ul className="space-y-1">
                {edu.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                  >
                    <span className="text-blue-500 mr-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
