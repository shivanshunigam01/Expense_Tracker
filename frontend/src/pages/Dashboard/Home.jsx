import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";
import axiosInstence from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import InfoCard from "../../components/Cards/InfoCard";

import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import { IoMdCard } from "react-icons/io";
import { addThousandsSeparator } from "../../utils/helper";
import RecentTransactions from "../../components/Dashboard/RecentTransactions";
import FinanceOverview from "../../components/Dashboard/FinanceOverview";
import ExpenseTransactions from "../../components/Dashboard/ExpenseTransactions";
import Last30DaysExpenses from "../../components/Dashboard/Last30DaysExpenses";
import RecentIncomeWithChart from "../../components/Dashboard/RecentIncomeWithChart";
import RecentIncome from "../../components/Dashboard/RecentIncome";

const Home = () => {
    useUserAuth();
    const navigate = useNavigate();

    const [dashboardData, setDashboardData] = useState(null);
    const [statisticData, setStatisticData] = useState(null);
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

    useEffect(() => {
        fetchDashboardData();
        fetchStatistic();
    }, []);

    // Process statistics data when it's available
    useEffect(() => {
        if (statisticData && Array.isArray(statisticData) && statisticData.length >= 2) {
            // Update dashboardData with statistics
            setDashboardData(prevData => {
                // Calculate expenditure change if needed (example logic - modify as needed)
                // This is placeholder logic since the API response doesn't include this value
                const currentMonth = prevData?.totalExpense || 0;
                const lastMonth = currentMonth * 0.9; // Placeholder - replace with actual previous month data
                const expenditureChange = lastMonth !== 0 ? ((currentMonth - lastMonth) / lastMonth) * 100 : 0;

                return {
                    ...prevData,
                    // Top 3 Spending Days from statisticData[0]
                    top3ExpenseDays: statisticData[0]?.map(item => ({
                        expense_date: new Date(item.date).toLocaleDateString('en-IN'),
                        total_expense: parseFloat(item.total_spent)
                    })) || [],
                    // Predicted Next Month Spend from statisticData[1]
                    predictedExpenditure: statisticData[1]?.[0]?.predicted_next_month_expense 
                        ? parseFloat(statisticData[1][0].predicted_next_month_expense) 
                        : 0,
                    // Set expenditure change value
                    expenditureChange: expenditureChange
                };
            });
        }
    }, [statisticData]);

    const renderSpendingDays = () => {
        const data = dashboardData?.top3ExpenseDays || [];
        if (!data.length) return <p className="text-gray-500">No data available</p>;

        return (
            <ul className="list-disc pl-5 text-sm text-gray-700">
                {data.map((item, idx) => (
                    <li key={idx}>
                        <span className="font-medium">{item.expense_date}</span>: ₹{addThousandsSeparator(item.total_expense)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <DashboardLayout activeMenu="Dashboard">
            <div className="my-5 mx-auto">
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InfoCard
                        icon={<IoMdCard />}
                        label="Total Balance"
                        value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
                        color="bg-primary"
                    />
                    <InfoCard
                        icon={<LuWalletMinimal />}
                        label="Total Income"
                        value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
                        color="bg-orange-500"
                    />
                    <InfoCard
                        icon={<LuHandCoins />}
                        label="Total Expense"
                        value={addThousandsSeparator(dashboardData?.totalExpense || 0)}
                        color="bg-red-500"
                    />
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {/* 🔥 Top 3 Spending Days */}
                    <InfoCard
                        icon={<LuHandCoins />}
                        label="Top 3 Spending Days"
                        value={
                            dashboardData?.top3ExpenseDays?.length > 0 ? (
                                <div className="text-sm text-left">
                                    {dashboardData.top3ExpenseDays.map((item, idx) => (
                                        <div key={idx}>
                                            <span className="font-medium">{item.expense_date}</span>: ₹
                                            {addThousandsSeparator(item.total_expense)}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                "No data"
                            )
                        }
                        color="bg-purple-500"
                    />

                    {/* 📉 Monthly Expenditure Change */}
                    <InfoCard
                        icon={<LuWalletMinimal />}
                        label="Expenditure Change"
                        value={
                            dashboardData?.expenditureChange > 0 ? (
                                <span className="text-red-600 font-semibold">
                                    ▲ {dashboardData.expenditureChange.toFixed(2)}%
                                </span>
                            ) : dashboardData?.expenditureChange < 0 ? (
                                <span className="text-green-600 font-semibold">
                                    ▼ {Math.abs(dashboardData.expenditureChange).toFixed(2)}%
                                </span>
                            ) : (
                                <span className="text-gray-600">No Change</span>
                            )
                        }
                        color="bg-yellow-500"
                    />

                    {/* 📅 Predicted Next Month Spend */}
                    <InfoCard
                        icon={<IoMdCard />}
                        label="Predicted Next Month Spend"
                        value={`${addThousandsSeparator(dashboardData?.predictedExpenditure || 0)}`}
                        color="bg-blue-500"
                    />
                </div>

                {/* 🧾 Other Dashboard Widgets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <RecentTransactions
                        transaction={dashboardData?.recentTransaction || []}
                        onSeeMore={() => navigate("/expense")}
                    />

                    <FinanceOverview
                        totalBalance={dashboardData?.totalBalance || 0}
                        totalIncome={dashboardData?.totalIncome || 0}
                        totalExpense={dashboardData?.totalExpense || 0}
                    />

                    <ExpenseTransactions
                        transaction={
                            dashboardData?.recentTransaction?.filter((t) => t.type === "expense") || []
                        }
                        onSeeMore={() => navigate("/expense")}
                    />

                    <Last30DaysExpenses
                        data={
                            dashboardData?.recentTransaction?.filter((t) => t.type === "expense") || []
                        }
                    />

                    <RecentIncomeWithChart
                        data={
                            dashboardData?.recentTransaction?.filter((t) => t.type === "income")?.slice(0, 4) ||
                            []
                        }
                        totalIncome={dashboardData?.totalIncome || 0}
                    />

                    <RecentIncome
                        transaction={
                            dashboardData?.recentTransaction?.filter((t) => t.type === "income") || []
                        }
                        onSeeMore={() => navigate("/income")}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;