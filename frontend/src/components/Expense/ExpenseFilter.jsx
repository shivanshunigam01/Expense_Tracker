import React, { useState, useEffect } from "react";
import { format, isAfter, parseISO } from "date-fns";
import { API_PATHS } from "../../utils/apiPaths";
import axiosInstence from "../../utils/axiosInstance";
const ExpenseFilter = ({ onApplyFilters }) => {
    const defaultFilters = {
        category: "",
        fromDate: format(new Date().setDate(1), "yyyy-MM-dd"),
        toDate: format(new Date(), "yyyy-MM-dd"),
    };

    const [filters, setFilters] = useState(defaultFilters);
    const [isOpen, setIsOpen] = useState(false);
    const [dateError, setDateError] = useState("");
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");


    useEffect(() => {
        const fetchCategories = async () => {
            setIsLoading(true);
            setError("");

            try {
                const response = await axiosInstence.get(API_PATHS.EXPENSE.GET_CATEGORY);

                if (response.data && response.data.success) {

                    const fetchedCategories = response.data.data.map(item => item.category);
                    setCategories(fetchedCategories);
                } else {
                    setError("Failed to fetch categories");
                }
            } catch (err) {
                setError("Error fetching categories: " + (err.message || "Unknown error"));
                console.error("Error fetching categories:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === "fromDate" || name === "toDate") {
            setDateError("");
        }
    };

    const validateDates = () => {
        if (!filters.fromDate || !filters.toDate) {
            setDateError("Both dates are required");
            return false;
        }

        const fromDate = parseISO(filters.fromDate);
        const toDate = parseISO(filters.toDate);

        if (isAfter(fromDate, toDate)) {
            setDateError("End date must be after start date");
            return false;
        }

        return true;
    };

    const handleApply = () => {
        if (!validateDates()) {
            return;
        }

        onApplyFilters(filters);
        setIsOpen(false);
    };

    const handleReset = () => {
        setFilters(defaultFilters);
        setDateError("");
        onApplyFilters(defaultFilters);
    };

    return (
        <div className="relative mb-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Expense Filters</h3>
                <div className="flex space-x-2">
                    <button
                        onClick={handleReset}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Reset Filters
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="px-3 py-2 bg-blue-600 text-white rounded-md flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                            />
                        </svg>
                        {isOpen ? "Hide Filters" : "Show Filters"}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="bg-white shadow-md rounded-lg p-4 mb-5 border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Category
                            </label>
                            {isLoading ? (
                                <div className="mt-1 px-3 py-2 text-gray-500">Loading categories...</div>
                            ) : error ? (
                                <div className="mt-1 px-3 py-2 text-red-500 text-sm">{error}</div>
                            ) : (
                                <select
                                    name="category"
                                    value={filters.category}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">All Categories</option>
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                From Date
                            </label>
                            <input
                                type="date"
                                name="fromDate"
                                value={filters.fromDate}
                                onChange={handleChange}
                                max={filters.toDate}
                                className={`mt-1 block w-full px-3 py-2 border ${dateError ? "border-red-500" : "border-gray-300"
                                    } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                To Date
                            </label>
                            <input
                                type="date"
                                name="toDate"
                                value={filters.toDate}
                                onChange={handleChange}
                                min={filters.fromDate}
                                className={`mt-1 block w-full px-3 py-2 border ${dateError ? "border-red-500" : "border-gray-300"
                                    } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                            />
                        </div>
                    </div>

                    {dateError && (
                        <div className="text-red-500 text-sm mt-2">{dateError}</div>
                    )}

                    <div className="flex justify-end space-x-2 mt-4">
                        <button
                            onClick={handleApply}
                            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExpenseFilter;