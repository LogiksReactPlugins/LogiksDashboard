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
        card1: {
            title: string;
            width: number;
            config: {
                type: string;
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
        card1: {
            title: string;
            width: number;
            config: {
                type: string;
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
        card4: {
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
                    "leads_tbl.blocked": string;
                    "leads_tbl.guid='{$_SESSION['SESS_GUID']}'": string;
                    "lead_date >='{$startDate}'": string;
                    "lead_date <='{$endDate}'": string;
                    "(leads_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
                };
                groupby: string;
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
                    "leads_tbl.blocked": string;
                    "leads_tbl.guid='{$_SESSION['SESS_GUID']}'": string;
                    "lead_date >='{$startDate}'": string;
                    "lead_date <='{$endDate}'": string;
                    "(leads_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
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
                    "leads_tbl.blocked": string;
                    "leads_tbl.guid": string;
                    "YEAR(leads_tbl.lead_date)='{$year}' AND (leads_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.manager='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.closed_by='{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
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
                    "leads_tbl.blocked": string;
                    "leads_tbl.guid": string;
                    "YEAR(leads_tbl.lead_date)='{$year}' AND (leads_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.manager='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.closed_by='{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
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
                    "leads_tbl.blocked": string;
                    "YEAR(leads_tbl.lead_date)='{$year}' AND leads_tbl.lead_status in ('order','lost') AND (leads_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.manager='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.closed_by='{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
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
                    "leads_tbl.blocked": string;
                    "leads_tbl.guid": string;
                    "leads_tbl.lead_status != 'junk'": string;
                    "(leads_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
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
                    "leads_tbl.blocked": string;
                    "leads_tbl.guid": string;
                    "YEAR(leads_tbl.lead_date) IN (YEAR(NOW()),YEAR(NOW()) - 1,YEAR(NOW()) - 2)": string;
                    "(leads_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
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
                    "leads_tbl.blocked": string;
                    "leads_tbl.lead_status in ('order','lost') AND YEAR(leads_tbl.lead_date) IN (YEAR(NOW()),YEAR(NOW()) - 1,YEAR(NOW())-2)": string;
                    "(leads_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
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
                    "leads_tbl.guid": string;
                    "leads_tbl.blocked='false' AND YEAR(leads_tbl.lead_date) IN (YEAR(NOW()),YEAR(NOW()) - 1,YEAR(NOW()) - 2)": string;
                    "(leads_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
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
                    "leads_tbl.guid": string;
                    "leads_tbl.customer_id = profiletbl.id AND leads_tbl.lead_status != 'junk' AND (profiletbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
                };
                groupby: string;
                orderby: string;
            };
            width: number;
        };
    };
};
//# sourceMappingURL=data.d.ts.map