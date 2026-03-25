import rawCoursesData from '@/data/courses.json';
import rawTracksData from '@/data/tracks.json';
import rawCurriculumStructure from '@/data/curriculum-structure.json';

export type CurriculumUnit = {
  title: string;
  content: string;
};

export type CurriculumCourse = {
  id: string;
  code: string;
  title: string;
  semester: number;
  availabilitySemesters: number[];
  credits: string;
  type: string;
  description: string;
  units: CurriculumUnit[];
  labs: string[];
  skills: string[];
  majorTracks: string[];
  minorTracks: string[];
  sourcePath?: string;
};

export type CurriculumTrack = {
  id: string;
  title: string;
  description: string;
  type: 'major' | 'minor';
  requiredCourseCodes: string[];
  electiveCourseCodes: string[];
};

export type CurriculumSemesterItem = {
  code: string;
  title: string;
  credits: string;
  ltp: string;
  itemType: 'course' | 'major_requirement' | 'minor_requirement' | 'open_elective';
  courseId: string | null;
  courseType: string | null;
};

export type CurriculumSemesterPlan = {
  semester: number;
  title: string;
  description: string;
  totalCredits: string;
  items: CurriculumSemesterItem[];
};

const coursesData = rawCoursesData as CurriculumCourse[];
const tracksData = rawTracksData as CurriculumTrack[];
const curriculumStructure = rawCurriculumStructure as { semesters: CurriculumSemesterPlan[] };

export { coursesData, tracksData, curriculumStructure };

export function getCourseById(courseId: string) {
  return coursesData.find((course) => course.id === courseId);
}

export function getCourseByCode(courseCode: string) {
  return coursesData.find((course) => course.code === courseCode);
}

export function getTrackById(trackId: string) {
  return tracksData.find((track) => track.id === trackId);
}

export function getTrackCourses(trackId: string, trackType: CurriculumTrack['type']) {
  return coursesData.filter((course) =>
    trackType === 'major' ? course.majorTracks.includes(trackId) : course.minorTracks.includes(trackId)
  );
}

export function getInnovationLabs() {
  return coursesData.filter((course) => course.type === 'Innovation Lab');
}

export function getMajorTracks() {
  return tracksData.filter((track) => track.type === 'major');
}

export function getMinorTracks() {
  return tracksData.filter((track) => track.type === 'minor');
}

export function getSemesterPlan(semester: number) {
  return curriculumStructure.semesters.find((item) => item.semester === semester);
}
