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
        GET_ALL_INCOME: "income/all",
        DELETE_INCOME: (incomeid) => `income/delete/${incomeid}`
    },
    EXPENSE: {
        ADD_EXPENSE: "expenses/add",
        GET_ALL_EXPENSE: "expenses/all",
        DELETE_EXPENSE: (id) => `/expenses/${id}`,
        GET_CATEGORY: "expenses/getCategory",
        GET_STATISTICS: "expenses/getStatistics",
        GET_PERCENTAGE: "expenses/getChangePercentage"


    },
    IMAGE: {
        UPLOAD_IMAGE: "auth/upload-image",
    },
};
