import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";
import axiosInstence from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { LuHandCoins, LuWalletMinimal, LuArrowUpRight, LuArrowDownRight, LuCalendar } from "react-icons/lu";
import { addThousandsSeparator } from "../../utils/helper";
import RecentTransactions from "../../components/Dashboard/RecentTransactions";
import FinanceOverview from "../../components/Dashboard/FinanceOverview";
import ExpenseTransactions from "../../components/Dashboard/ExpenseTransactions";
import Last30DaysExpenses from "../../components/Dashboard/Last30DaysExpenses";


const Home = () => {
    useUserAuth();
    const navigate = useNavigate();

    const [dashboardData, setDashboardData] = useState(null);
    const [statisticData, setStatisticData] = useState(null);
    const [PercentageChangeData, setPercentageChangeData] = useState(null);

    const [loading, setLoading] = useState(false);

    const fetchDashboardData = async () => {
        if (loading) return;

        setLoading(true);
        try {
            const response = await axiosInstence.get(API_PATHS.DASHBOARD.GET_DATA);
            if (response.data?.success) {
                setDashboardData(response.data.data);
            }
        } catch (error) {
            console.log("Something went wrong. Please try again.", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchStatistic = async () => {
        if (loading) return;

        setLoading(true);
        try {
            const response = await axiosInstence.get(API_PATHS.EXPENSE.GET_STATISTICS);
            if (response.data?.success) {
                setStatisticData(response.data.data);
            }
        } catch (error) {
            console.log("Something went wrong. Please try again.", error);
        } finally {
            setLoading(false);
        }
    };


    const fetchChangePercentage = async () => {
        if (loading) return;

        setLoading(true);
        try {
            const response = await axiosInstence.get(API_PATHS.EXPENSE.GET_PERCENTAGE);
            if (response.data?.success) {
                setPercentageChangeData(response.data.data);
            }
        } catch (error) {
            console.log("Something went wrong. Please try again.", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchDashboardData();
        fetchStatistic();
        fetchChangePercentage();
    }, []);


    useEffect(() => {
        if (statisticData && Array.isArray(statisticData) && statisticData.length >= 2) {

            setDashboardData(prevData => {

                const currentMonth = prevData?.totalExpense || 0;
                const lastMonth = currentMonth * 0.9;
                const expenditureChange = lastMonth !== 0 ? ((currentMonth - lastMonth) / lastMonth) * 100 : 0;

                return {
                    ...prevData,

                    top3ExpenseDays: statisticData[0]?.map(item => ({
                        expense_date: new Date(item.date).toLocaleDateString('en-IN'),
                        total_expense: parseFloat(item.total_spent)
                    })) || [],

                    predictedExpenditure: statisticData[1]?.[0]?.predicted_next_month_expense
                        ? parseFloat(statisticData[1][0].predicted_next_month_expense)
                        : 0,

                    expenditureChange: expenditureChange
                };
            });
        }
    }, [statisticData]);

    return (
        <DashboardLayout activeMenu="Dashboard">
            <div className="my-6 mx-auto max-w-7xl">
                {/* Insights Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Financial Insights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Top 3 Spending Days */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 flex items-center">
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <LuHandCoins className="text-white text-xl" />
                                </div>
                                <h3 className="text-white font-semibold ml-3">Top 3 Spending Days</h3>
                            </div>
                            <div className="p-5">
                                {dashboardData?.top3ExpenseDays?.length > 0 ? (
                                    <div className="space-y-3">
                                        {dashboardData.top3ExpenseDays.map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-center border-b border-gray-100 pb-2">
                                                <span className="font-medium text-gray-700">{item.expense_date}</span>
                                                <span className="text-purple-600 font-semibold">₹{addThousandsSeparator(item.total_expense)}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-6 text-gray-500">No data available</div>
                                )}
                            </div>
                        </div>

                        {/* Monthly Expenditure Change */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
                            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 flex items-center">
                                <div className="bg-white/20 p-3 rounded-lg">
                                    {dashboardData?.expenditureChange > 0 ? (
                                        <LuArrowUpRight className="text-white text-xl" />
                                    ) : (
                                        <LuArrowDownRight className="text-white text-xl" />
                                    )}
                                </div>
                                <h3 className="text-white font-semibold ml-3">Monthly Expenditure Change</h3>
                            </div>
                            <div className="p-5 flex justify-center items-center h-32">
                                {dashboardData?.expenditureChange > 0 ? (
                                    <div className="text-center">
                                        <span className="text-3xl font-bold text-red-600 flex items-center justify-center">
                                            <LuArrowUpRight className="mr-1" />
                                            {PercentageChangeData?.[0][0].percentage_change}
                                        </span>
                                        <p className="text-gray-500 mt-2">Increase from last month</p>
                                    </div>
                                ) : dashboardData?.expenditureChange < 0 ? (
                                    <div className="text-center">
                                        <span className="text-3xl font-bold text-green-600 flex items-center justify-center">
                                            <LuArrowDownRight className="mr-1" />
                                            {Math.abs(dashboardData.expenditureChange).toFixed(2)}%
                                        </span>
                                        <p className="text-gray-500 mt-2">Decrease from last month</p>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <span className="text-3xl font-bold text-gray-600">0%</span>
                                        <p className="text-gray-500 mt-2">No change from last month</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Predicted Next Month Spend */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex items-center">
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <LuCalendar className="text-white text-xl" />
                                </div>
                                <h3 className="text-white font-semibold ml-3">Predicted Next Month Spend</h3>
                            </div>
                            <div className="p-5 flex justify-center items-center h-32">
                                <div className="text-center">
                                    <span className="text-3xl font-bold text-blue-600">
                                        ₹{addThousandsSeparator(dashboardData?.predictedExpenditure || 0)}
                                    </span>
                                    <p className="text-gray-500 mt-2">Based on your spending patterns</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Activity & Analysis Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Activity & Analysis</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
                            <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4">
                                <h3 className="text-white font-semibold">Recent Transactions</h3>
                            </div>
                            <div className="p-4">
                                <RecentTransactions
                                    transaction={dashboardData?.recentTransaction || []}
                                    onSeeMore={() => navigate("/expense")}
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
                            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-4">
                                <h3 className="text-white font-semibold">Finance Overview</h3>
                            </div>
                            <div className="p-4">
                                <FinanceOverview
                                    totalBalance={dashboardData?.totalBalance || 0}
                                    totalIncome={dashboardData?.totalIncome || 0}
                                    totalExpense={dashboardData?.totalExpense || 0}
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
                            <div className="bg-gradient-to-r from-red-600 to-red-700 p-4">
                                <h3 className="text-white font-semibold">Expense Transactions</h3>
                            </div>
                            <div className="p-4">
                                <ExpenseTransactions
                                    transaction={
                                        dashboardData?.recentTransaction?.filter((t) => t.type === "expense") || []
                                    }
                                    onSeeMore={() => navigate("/expense")}
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
                            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4">
                                <h3 className="text-white font-semibold">Last 30 Days Expenses</h3>
                            </div>
                            <div className="p-4">
                                <Last30DaysExpenses
                                    data={
                                        dashboardData?.recentTransaction?.filter((t) => t.type === "expense") || []
                                    }
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;