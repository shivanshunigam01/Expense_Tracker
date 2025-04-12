import React, { useEffect, useState } from "react";
import { useUserAuth } from "../../hooks/useUserAuth";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import axiosInstence from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import toast from "react-hot-toast";
import ExpenseOverview from "../../components/Expense/ExpenseOverview";
import AddExpenseForm from "../../components/Expense/AddExpenseForm";
import Model from "../../components/Model";
import ExpenseList from "../../components/Expense/ExpenseList";
import DeleteAlert from "../../components/DeleteAlert";

const Expense = () => {
  useUserAuth();
  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });
  const [openAddExpenseModel, setOpenAddExpenseModel] = useState(false);

  // Fetch all expense details
  const fetchExpenseDetails = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstence.get(API_PATHS.EXPENSE.GET_ALL_EXPENSE);
      if (response.data && response.data.data) {
        setExpenseData(response.data.data);
      }
    } catch (error) {
      console.log("Something went wrong", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Add expense
  const handleAddExpense = async (expense) => {
    const { category, amount, date, icon } = expense;

    if (!category.trim()) {
      toast.error("Category is required.");
      return;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Amount should be a valid number greater than 0.");
      return;
    }

    if (!date) {
      toast.error("Date is required.");
      return;
    }

    try {
      const response = await axiosInstence.post(API_PATHS.EXPENSE.ADD_EXPENSE, {
        category,
        amount,
        date,
        icon,
      });

      if (response.data.success) {
        setOpenAddExpenseModel(false);
        toast.success("Expense added successfully.");
        fetchExpenseDetails();
      } else {
        toast.error("Failed to add expense.");
      }
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        toast.error("Request timeout. Please try again later.");
      } else {
        console.error("Something went wrong while adding expense.", error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  // Delete expense
  const deleteExpense = async (id) => {
    debugger
    const expenseId = Number(id);
    if (!expenseId || isNaN(expenseId)) {
      toast.error("Invalid expense ID.");
      return;
    }

    try {
      await axiosInstence.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(expenseId));
      setOpenDeleteAlert({ show: false, data: null });
      toast.success("Expense deleted successfully.");
      fetchExpenseDetails();
    } catch (error) {
      console.error("Error deleting expense.", error?.response?.data?.message || error.message);
      toast.error("Failed to delete expense.");
    }
  };

  // Handle download
  const handleDownloadIncomeDetails = async () => {
    try {
      const response = await axiosInstence.get(API_PATHS.EXPENSE.DOWNLOAD_EXPENSE, {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "expense_details.xlsx");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error Downloading expense details:", error);
      toast.error("Failed to download expense details.");
    }
  };

  useEffect(() => {
    fetchExpenseDetails();
  }, []);

  return (
    <DashboardLayout activeMenu="Expense">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <ExpenseOverview
            transactions={expenseData}
            onExpenseIncome={() => setOpenAddExpenseModel(true)}
          />

          <ExpenseList
            transactions={expenseData}
            onDelete={(id) => {
              const numericId = Number(id);
              if (!isNaN(numericId)) {
                setOpenDeleteAlert({ show: true, data: numericId });
              } else {
                toast.error("Invalid ID received for deletion.");
              }
            }}
            onDownload={handleDownloadIncomeDetails}
          />
        </div>

        {/* Add Expense Modal */}
        <Model
          isOpen={openAddExpenseModel}
          onClose={() => setOpenAddExpenseModel(false)}
          title="Add Expense"
        >
          <AddExpenseForm onAddExpense={handleAddExpense} />
        </Model>

        {/* Delete Alert Modal */}
        <Model
          isOpen={openDeleteAlert.show}
          onClose={() => setOpenDeleteAlert({ show: false, data: null })}
          title="Delete Expense"
        >
          <DeleteAlert
            content="Are you sure you want to delete this expense detail?"
            onDelete={() => deleteExpense(openDeleteAlert.data)}
          />
        </Model>
      </div>
    </DashboardLayout>
  );
};

export default Expense;
