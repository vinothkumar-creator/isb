// Course Service - handles business logic and data operations
import type { Course } from '@api/types';

class CourseService {
  /**
   * Fetch all courses
   * In production, this would make an API call
   */
  async getCourses(): Promise<Course[]> {
    // Simulate API call
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: '1',
            title: 'Introduction to React Native',
            instructor: 'John Doe',
            duration: '8 weeks',
            level: 'Beginner',
          },
          {
            id: '2',
            title: 'Advanced JavaScript Concepts',
            instructor: 'Jane Smith',
            duration: '6 weeks',
            level: 'Intermediate',
          },
          {
            id: '3',
            title: 'Mobile App Development',
            instructor: 'Mike Johnson',
            duration: '10 weeks',
            level: 'Advanced',
          },
        ]);
      }, 500);
    });
  }

  /**
   * Search courses by query
   */
  async searchCourses(query: string): Promise<Course[]> {
    const courses = await this.getCourses();
    return courses.filter(
      course =>
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.instructor.toLowerCase().includes(query.toLowerCase()),
    );
  }

  /**
   * Get course by ID
   */
  async getCourseById(id: string): Promise<Course | null> {
    const courses = await this.getCourses();
    return courses.find(course => course.id === id) || null;
  }
}

export default new CourseService();

