export const userAuthApis = {
  LOGIN_USER: "/user",
  SIGNUP_USER: "/user",
  LOGOUT_USER: "/user/logout",
  SENDOTP_USER: "/user/sendotp",
  PASSWORD_CHANGE_USER: "/user/password-change",
  PASSWORD_TOKEN_USER: "/user/password-token",
  PASSWORD_RESET_USER: "/user/password-reset",
};

export const courseApis = {
  GET_ALL_COURSE: "/course",
  GET_COURSE_DETAIL: "/course/:courseId",
  DELETE_COURSE: "/course/:courseId",
  UPDATE_COURSE: "/course",
  CREATE_COURSE: "/course",
};

export const sectionApis = {
  GET_ALL_SECTION: "/course/section/:courseId",
  CREATE_SECTION: "/course/section/:courseId",
  UPDATE_SECTION: "/course/section/:sectionId",
  DELETE_SECTION: "/course/section/:courseId",
};

export const subSectionApis = {
  UPDATE_SUBSECTION_TEXT: "/course/subsection",
  DELETE_SUBSECTION: "/course/subsection/:sectionId",
  CREATE_SUBSECTION: "/course/subsection/:sectionId",
  UPDATE_SUBsECTION_VIDEO: "/course/subsection/:subSectionId",
};

export const profileApis = {
  GET_USER_DETAIL: "/profile",
  UPDATE_PROFILE: "/profile",
  USER_COURSE_ENROLLED: "/profile/course-enrolled",
  UPDATE_PROFILE_PICTURE: "/profile/pp",
};

export const categoryApis = {
  CREATE_CATEGORY: "/category",
  GET_ALL_CATEGORY: "/category",
  GET_CATEGORY_DETAIL: "/category/:categoryId",
  UPDATE_CATEGORY: "/category/:categoryId",
};

export const commentApis = {
  CREATE_COMMENT: "/comment/:courseId",
  GET_AVERAGE_RATING: "/comment/avg-rating/:courseId",
  GET_ALL_COURSE_COMMENT: "/comment/:courseId",
  GET_ALL_COMMENT: "/comment",
  UPDATE_COMMENT: "/comment/:commentId",
  DELETE_COMMENT: "/comment/:commentId",
};
