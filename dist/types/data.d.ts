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
                method: string;
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
                method: string;
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
                method: string;
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
                method: string;
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
                        top: number;
                    };
                    series: {
                        radius: string;
                    }[];
                };
            };
            source: {
                type: string;
                method: string;
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
                method: string;
            };
            width: number;
        };
        card08: {
            title: string;
            config: {
                type: string;
            };
            source: {
                type: string;
                method: string;
            };
            width: number;
        };
        card13: {
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
                        name: string;
                        type: string;
                        radius: string[];
                        avoidLabelOverlap: boolean;
                        itemStyle: {
                            borderRadius: number;
                            borderColor: string;
                            borderWidth: number;
                        };
                        label: {
                            show: boolean;
                            position: string;
                        };
                        emphasis: {
                            label: {
                                show: boolean;
                                fontSize: number;
                                fontWeight: string;
                            };
                        };
                        labelLine: {
                            show: boolean;
                        };
                    };
                };
            };
            source: {
                type: string;
                method: string;
            };
            width: number;
        };
        card05: {
            policy: string;
            title: string;
            config: {
                type: string;
            };
            source: {
                type: string;
                method: string;
            };
            width: number;
        };
    };
};
//# sourceMappingURL=data.d.ts.map