// export const BASE_URL = "https://expense-tracker-api-kt3k.onrender.com";
export const BASE_URL = "http://localhost:5000";

export const API_PATHS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "auth/signup",
    GET_USER_INFO: "auth/profile",
  },
  DASHBOARD: {
    GET_DATA: "dashboard/getDashboard",
  },
  INCOME: {
    ADD_INCOME: "income/add",
    GET_ALL_INCOME: "income/get",
    DELETE_INCOME: (incomeid) => `income/delete/${incomeid}`,
    DOWNLOAD_INCOME: "income/downloadexcel",
  },
  EXPENSE: {
    ADD_EXPENSE: "expenses/add",
    GET_ALL_EXPENSE: "expenses/all",
    DELETE_EXPENSE: (id) => `/expenses/${id}`,
    DOWNLOAD_EXPENSE: "expense/downloadexcel",
  },
  IMAGE: {
    UPLOAD_IMAGE: "auth/upload-image",
  },
};
