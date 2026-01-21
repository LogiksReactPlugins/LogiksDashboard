export const example = {
    title: "E-Office Dashboard",
    "endPoints": {
        "baseURL": "http://192.168.0.20:9999",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwiYXBwSWQiOiJkZW1vIiwiaWQiOjEsInVzZXJJZCI6ImFkbWluIiwidXNlcm5hbWUiOiJBZG1pbiIsInRlbmFudElkIjoiU0lMSyIsImd1aWQiOiJTSUxLIiwicm9sZXMiOltdLCJzY29wZXMiOltdLCJpcCI6IjE5Mi4xNjguMC42NiIsImRldmljZVR5cGUiOiJ3ZWIiLCJpYXQiOjE3NjcxNzkxOTcsImV4cCI6MTc2NzE4Mjc5NywianRpIjoiYWNjOjE6MTc2NzE3OTE5NzI3NDp3ZWIifQ.sfBSvZ-s2jxhj7aNSWgjJrU6V51tFomWOGj2xGQVng8",
        "dbopsGetHash": "/api/dbops",
        "dbopsGetRefId": "/api/dbops/save",
        "dbopsCreate": "/api/dbops/create",
        "dbopsUpdate": "/api/dbops/update",
        "dbopsFetch": "/api/dbops/fetch",
        "registerQuery": "/api/query/save",
        "runQuery": "/api/query/run"
    },
    cards: {
        "card1": {
            "title": "Total Won/Lost Ratio",
            "width": 3,
            "config": { "type": "number" },
            "source": {
                "type": "sql",
                "table": "leads_tbl",
                "cols": "count(leads_tbl.id) as value,leads_tbl.lead_status as title",
                "where": {
                    "leads_tbl.blocked": "false",
                    "leads_tbl.guid='{$_SESSION['SESS_GUID']}'": "RAW",
                    "lead_date >='{$startDate}'": "RAW",
                    "lead_date <='{$endDate}'": "RAW",
                    "(leads_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": "RAW"
                },
                "groupby": "leads_tbl.lead_status"
            }
        },

    },

};


export const exapmle1 = {
    "title": "Untitled Dashboard",
    "endPoints": {
        "baseURL": "http://192.168.0.20:9999",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwiYXBwSWQiOiJkZW1vIiwiaWQiOjEsInVzZXJJZCI6ImFkbWluIiwidXNlcm5hbWUiOiJBZG1pbiIsInRlbmFudElkIjoiU0lMSyIsImd1aWQiOiJTSUxLIiwicm9sZXMiOltdLCJzY29wZXMiOltdLCJpcCI6IjE5Mi4xNjguMC42NiIsImRldmljZVR5cGUiOiJ3ZWIiLCJpYXQiOjE3NjczMjk4NDMsImV4cCI6MTc2NzMzMzQ0MywianRpIjoiYWNjOjE6MTc2NzMyOTg0Mzc5OTp3ZWIifQ.M98AlNXZHz7FLIWO5wie6hU1ENYR_KMmp8objGZrkWk",
        "dbopsGetHash": "/api/dbops",
        "dbopsGetRefId": "/api/dbops/save",
        "dbopsCreate": "/api/dbops/create",
        "dbopsUpdate": "/api/dbops/update",
        "dbopsFetch": "/api/dbops/fetch",
        "registerQuery": "/api/query/save",
        "runQuery": "/api/query/run"
    },
    "cards": {


        "card1": {
            "title": "Total Won/Lost Ratio",
            "width": 3,
            "config": { "type": "number" },
            "source": {
                "type": "sql",
                "table": "leads_tbl",
                "cols": "count(leads_tbl.id) as value,leads_tbl.lead_status as title",
                "where": {
                    "leads_tbl.blocked": "false",
                    "leads_tbl.guid='{$_SESSION['SESS_GUID']}'": "RAW",
                    "lead_date >='{$startDate}'": "RAW",
                    "lead_date <='{$endDate}'": "RAW",
                    "(leads_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": "RAW"
                },
                "groupby": "leads_tbl.lead_status"
            }
        },

        "card2": {
            "title": "Total Enquiry",
            "width": 3,
            "config": { "type": "number" },
            "source": { "type": "method", "method": "getTotalEnquiry" }
        },

        "card3": {
            "title": "Total Deal",
            "width": 3,
            "config": { "type": "number" },
            "source": { "type": "method", "method": "getTotalDeal" }
        },
        "card4": {
            "title": "Total Sales Revenue",
            "width": 3,
            "config": { "type": "number" },
            "source": { "type": "method", "method": "getTotalRevenue" }
        },


        "card7": {
            "title": "Task Status",
            "width": 8,
            "config": {
                "type": "line",
                "subType": "basic",
                "options": {
                    "title": { "text": "Revenue Growth" },
                    "tooltip": { "trigger": "axis" },
                    "xAxis": { "type": "category" },
                    "yAxis": { "type": "value" },
                    "series": [{ "type": "line", "name": "Sales", smooth: true }]
                }
            },
            "source": {
                "type": "method",
                "method": "getLineChartData"

            }
        },

        "card5": {
            "title": "Top 10 High Priority Pending Task",
            "width": 4,
            "config": {
                "type": "pie",
                "subType": "basic",
                "options": {
                    "tooltip": { "trigger": "item" },
                    "legend": { "bottom": 0 },
                    "series": [{ "radius": "50%" }]
                }
            },
            "source": {
                "type": "method",
                "method": "getPendingTask"

            },
        },

        "card6": {
            "title": "Tasks By Status",
            "width": 6,
          
            "config": {
                "type": "bar",
                "subType": "stacked",
                "options": {
                    "title": { "text": "Sales" },
                    "xAxis": { "type": "category" },
                    "yAxis": { "type": "value" },
                    "series": [{ "type": "bar" }]
                }
            },
            "source": {
                "type": "method",
                "method": "getTaskDataByStatus"

            },
        },

        "card8": {
            "title": "Tasks By User",
            "width": 6,

            "config": {
                "type": "line",
                "subType": "area",
                "options": {
                    "title": { "text": "Revenue Growth" },
                    "tooltip": { "trigger": "axis" },
                    "xAxis": { "type": "category" },
                    "yAxis": { "type": "value" },
                    "series": [{ "type": "line", "name": "Sales", smooth: true }]
                }
            },

            "source": {
                "type": "method",
                "method": "getTaskDataByUser"

            },
        },


        "card04": {
            "policy": "my_dashboard.lead.access",
            "title": "Orders Converted v/s Lost in {$year}",
            "config": {
                "type": "pie",
                "subType": "basic",
                "options": {
                    "tooltip": { "trigger": "item" },
                    "legend": { "top": 0 },
                    "series": [{ "radius": "50%" }]
                }
            },
            "source": {
                "type": "method",
                "method": "getPendingTask",
            },
            "width": 4
        },
            "card09": {
            "title": "Lead Value in {$year}",
            "config": {
                "type": "line"
            },
            "source": {
                "type": "method",
                 "method":"getTaskDataByStatus"
            },
            "width": 8
        },

        "card08": {
            "title": "Enquiry Type Wise Leads for 3 Years",
            "config": {
                "type": "grid",
                
            },
            "source": {
                "type": "method",
                "method": "getTaskDataByUser",
             
            },
            "width": 12
        },
        "card13": {
            "title": "Direct v/s Client Generated Leads",
            "config": {
                "type": "pie",
                "subType": "donut",
                "options": {
                    "tooltip": { "trigger": "item" },
                    "legend": { "bottom": 0 },
                    "series": {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                       
                    }
                }

            },
            "source": {
                "type": "method",
                "method": "getPendingTask"

            },
            "width": 8
        },
    

        "card05": {
            "policy": "my_dashboard.lead.access",
            "title": "Client wise Leads Generated",
            "config": {
                "type": "bar",
                
            },
            "source": {
                "type": "method",
                "method":"getTaskDataByUser"
               
            },
            "width": 4
        }


    }
}





