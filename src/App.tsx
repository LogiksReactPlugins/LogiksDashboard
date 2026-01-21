
import LogiksDashboard from "./components/dashboard/index.js";

import { exapmle1 } from "./data.js";

function App() {
    const getLineChartData = () => ([
        { "category": "Jan", "Sales": 1200, "Profit": 400 },
        { "category": "Feb", "Sales": 1500, "Profit": 500 },
        { "category": "Mar", "Sales": 1700, "Profit": 600 },
        { "category": "Apr", "Sales": 1400, "Profit": 450 }
    ]);

    const getTaskDataByStatus = () => ([
        { "category": "Jan", "Sales": 1200, "Profit": 400 },
        { "category": "Feb", "Sales": 1500, "Profit": 500 },
        { "category": "Mar", "Sales": 1700, "Profit": 600 },
        { "category": "Apr", "Sales": 1400, "Profit": 450 }
    ]);

    const getPendingTask = () => ([
  { "category":"Closed", "value":261 },
  { "category":"Open",   "value":120 },
  { "category":"Pending","value":40 },
  { "category":"Rejected","value":20 }
]);

    const getWorkLoadTask = () => ({
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        series: [
            { name: "Workload", data: [30, 60, 50, 75, 90] }
        ]
    });

    const getTotalRevenue = () => 321000;
    const getTotalWonLostRatio = () => "15:3";
    const getTotalEnquiry = () => 1200;
    const getTotalDeal = () => 350;

    const getTaskDataByUser = () => {
        return [
            { "category": "Jan", "Sales": 1200, "Profit": 400 },
            { "category": "Feb", "Sales": 1500, "Profit": 500 },
            { "category": "Mar", "Sales": 1700, "Profit": 600 },
            { "category": "Apr", "Sales": 1400, "Profit": 450 }
        ]

    }


    return (
        <>
            <LogiksDashboard
                dashboardJson={exapmle1}
                methods={{
                    getLineChartData, getTaskDataByStatus, getPendingTask, getWorkLoadTask,
                    getTotalRevenue, getTotalWonLostRatio, getTotalEnquiry, getTotalDeal,
                    getTaskDataByUser

                }} />
        </>
    )
}

export default App
