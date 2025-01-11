import { sendOtp, signupUser, loginUser, changePassword } from './auth.controller.js';
import { createComment, deleteComment, getAllComment, getAllCommentCourse, getAverageRating, updateComment } from './comment.controller.js';
import { createCourse, getAllCourses, getCourseDetail, updateCourse } from './course.controller.js';
import { resetPasswordToken, resetPassword } from './password.controller.js';
import { getStudentEnrolledCourse, getUserDetails, updateProfile, updateProfilePicture } from './profile.controller.js';

// auth.controller.js
export { sendOtp, signupUser, loginUser, changePassword };

// comment.controller.js
export { createComment, getAverageRating, getAllComment, getAllCommentCourse, updateComment, deleteComment };

// course.controller.js
export { createCourse, getAllCourses, getCourseDetail, updateCourse };

// password.controller.js
export { resetPasswordToken, resetPassword };

// payment.controller.js
export { };

// profile.controller.js
export { updateProfile, getUserDetails, getStudentEnrolledCourse, updateProfilePicture };

// section.controller.js
export { };

// subsection.controller.js
export { };