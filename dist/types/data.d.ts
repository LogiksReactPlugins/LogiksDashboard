export declare const example: {
    title: string;
    endPoints: {
        baseURL: string;
        accessToken: string;
        dbopsGetHash: string;
        dbopsGetRefId: string;
        dbopsCreate: string;
        dbopsUpdate: string;
        dbopsFetch: string;
        registerQuery: string;
        runQuery: string;
    };
    cards: {
        card7: {
            title: string;
            width: number;
            config: {
                type: string;
                subType: string;
                options: {
                    title: {
                        text: string;
                    };
                    tooltip: {
                        trigger: string;
                    };
                    xAxis: {
                        type: string;
                    };
                    yAxis: {
                        type: string;
                    };
                    series: {
                        type: string;
                        name: string;
                        smooth: boolean;
                    }[];
                };
            };
            source: {
                type: string;
                table: string;
                cols: string;
                where: {
                    "leads_tbl.blocked": string;
                    "leads_tbl.guid='{$_SESSION['SESS_GUID']}'": string;
                    "lead_date >='{$startDate}'": string;
                    "lead_date <='{$endDate}'": string;
                    "(leads_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
                };
                groupby: string;
            };
        };
    };
};
export declare const exapmle1: {
    title: string;
    endPoints: {
        baseURL: string;
        accessToken: string;
        dbopsGetHash: string;
        dbopsGetRefId: string;
        dbopsCreate: string;
        dbopsUpdate: string;
        dbopsFetch: string;
        registerQuery: string;
        runQuery: string;
    };
    cards: {
        card0: {
            title: string;
            width: number;
            config: {
                type: string;
                subType: string;
                options: {
                    title: {
                        text: string;
                    };
                    tooltip: {
                        trigger: string;
                    };
                    xAxis: {
                        type: string;
                    };
                    yAxis: {
                        type: string;
                    };
                    series: {
                        type: string;
                        name: string;
                        smooth: boolean;
                    }[];
                };
            };
            source: {
                type: string;
                table: string;
                cols: string;
                where: {
                    "lead_tbl.blocked": string;
                    "lead_tbl.guid='{$_SESSION['SESS_GUID']}'": string;
                    "lead_date >='{$startDate}'": string;
                    "lead_date <='{$endDate}'": string;
                    "(lead_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
                };
                groupby: string;
            };
        };
        card1: {
            title: string;
            width: number;
            config: {
                type: string;
            };
            source: {
                type: string;
                method: string;
            };
        };
        card2: {
            title: string;
            width: number;
            config: {
                type: string;
            };
            source: {
                type: string;
                method: string;
            };
        };
        card3: {
            title: string;
            width: number;
            config: {
                type: string;
            };
            source: {
                type: string;
                method: string;
            };
        };
        card7: {
            title: string;
            width: number;
            config: {
                type: string;
                subType: string;
                options: {
                    title: {
                        text: string;
                    };
                    tooltip: {
                        trigger: string;
                    };
                    xAxis: {
                        type: string;
                    };
                    yAxis: {
                        type: string;
                    };
                    series: {
                        type: string;
                        name: string;
                        smooth: boolean;
                    }[];
                };
            };
            source: {
                type: string;
                table: string;
                cols: string;
                where: {
                    "lead_tbl.blocked": string;
                    "lead_tbl.guid='{$_SESSION['SESS_GUID']}'": string;
                    "lead_date >='{$startDate}'": string;
                    "lead_date <='{$endDate}'": string;
                    "(lead_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
                };
                groupby: string;
            };
        };
        card6: {
            title: string;
            width: number;
            config: {
                type: string;
                subType: string;
                options: {
                    title: {
                        text: string;
                    };
                    xAxis: {
                        type: string;
                    };
                    yAxis: {
                        type: string;
                    };
                    series: {
                        type: string;
                    }[];
                };
            };
            source: {
                type: string;
                table: string;
                cols: string;
                where: {
                    "lead_tbl.blocked": string;
                    "lead_tbl.guid": string;
                    "YEAR(lead_tbl.lead_date)='{$year}' AND (lead_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.manager='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.closed_by='{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
                };
                groupby: string;
            };
        };
        card8: {
            title: string;
            width: number;
            config: {
                type: string;
                subType: string;
                options: {
                    title: {
                        text: string;
                    };
                    tooltip: {
                        trigger: string;
                    };
                    xAxis: {
                        type: string;
                    };
                    yAxis: {
                        type: string;
                    };
                    series: {
                        type: string;
                        name: string;
                        smooth: boolean;
                    }[];
                };
            };
            source: {
                type: string;
                table: string;
                cols: string;
                where: never[];
                join: {
                    query: string;
                    condition: string;
                    as: string;
                    type: string;
                }[];
                groupby: string;
                orderby: string;
            };
        };
        card5: {
            title: string;
            width: number;
            config: {
                type: string;
                subType: string;
                options: {
                    tooltip: {
                        trigger: string;
                    };
                    legend: {
                        bottom: number;
                    };
                    series: {
                        radius: string;
                    }[];
                };
            };
            source: {
                type: string;
                table: string;
                cols: string;
                where: {
                    "lead_tbl.blocked": string;
                    "lead_tbl.guid": string;
                    "YEAR(lead_tbl.lead_date)='{$year}' AND (lead_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.manager='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.closed_by='{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
                };
                groupby: string;
            };
        };
        card04: {
            policy: string;
            title: string;
            config: {
                type: string;
                subType: string;
                options: {
                    tooltip: {
                        trigger: string;
                    };
                    legend: {
                        bottom: number;
                    };
                    series: {
                        radius: string;
                    }[];
                };
            };
            source: {
                type: string;
                table: string;
                cols: string;
                where: {
                    "lead_tbl.blocked": string;
                    "YEAR(lead_tbl.lead_date)='{$year}' AND lead_tbl.lead_status in ('order','lost') AND (lead_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.manager='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.closed_by='{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
                };
                groupby: string;
            };
            width: number;
        };
        card13: {
            title: string;
            config: {
                type: string;
            };
            source: {
                type: string;
                table: string;
                cols: string;
                where: {
                    "lead_tbl.blocked": string;
                    "lead_tbl.guid": string;
                    "lead_tbl.lead_status != 'junk'": string;
                    "(lead_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
                };
                groupby: string;
            };
            width: number;
        };
        card09: {
            title: string;
            config: {
                type: string;
            };
            source: {
                type: string;
                table: string;
                cols: string;
                where: never[];
                join: {
                    query: string;
                    condition: string;
                    as: string;
                    type: string;
                }[];
                groupby: string;
                orderby: string;
                limit: number;
            };
            width: number;
        };
        card06: {
            title: string;
            config: {
                type: string;
            };
            source: {
                type: string;
                table: string;
                cols: string;
                where: {
                    "lead_tbl.blocked": string;
                    "lead_tbl.guid": string;
                    "YEAR(lead_tbl.lead_date) IN (YEAR(NOW()),YEAR(NOW()) - 1,YEAR(NOW()) - 2)": string;
                    "(lead_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
                };
                groupby: string;
                orderby: string;
            };
            width: number;
        };
        card07: {
            title: string;
            config: {
                type: string;
                stacked: boolean;
            };
            source: {
                type: string;
                table: string;
                cols: string;
                where: {
                    "lead_tbl.blocked": string;
                    "lead_tbl.lead_status in ('order','lost') AND YEAR(lead_tbl.lead_date) IN (YEAR(NOW()),YEAR(NOW()) - 1,YEAR(NOW())-2)": string;
                    "(lead_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
                };
                groupby: string;
                orderby: string;
            };
            width: number;
        };
        card08: {
            title: string;
            config: {
                type: string;
                stacked: boolean;
            };
            source: {
                type: string;
                table: string;
                cols: string;
                where: {
                    "lead_tbl.guid": string;
                    "lead_tbl.blocked='false' AND YEAR(lead_tbl.lead_date) IN (YEAR(NOW()),YEAR(NOW()) - 1,YEAR(NOW()) - 2)": string;
                    "(lead_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
                };
                groupby: string;
                orderby: string;
            };
            width: number;
        };
        card05: {
            policy: string;
            title: string;
            config: {
                type: string;
                stacked: boolean;
            };
            source: {
                type: string;
                table: string;
                cols: string;
                where: {
                    "profiletbl.blocked": string;
                    "lead_tbl.guid": string;
                    "lead_tbl.customer_id = profiletbl.id AND lead_tbl.lead_status != 'junk' AND (profiletbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
                };
                groupby: string;
                orderby: string;
            };
            width: number;
        };
    };
};
//# sourceMappingURL=data.d.ts.map