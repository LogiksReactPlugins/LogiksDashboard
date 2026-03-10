export interface sqlOpsUrls {
    baseURL: string;
    registerQuery: string;
    runQuery: string;
    accessToken: string;
}

export interface DashboardJson {
    title?: string | undefined;
    cards: Record<string, CardConfig>;
    filter?: Record<string, any>;
    endPoints?: sqlOpsUrls | undefined;
    module_refid?: string;
}

export interface CardConfig {
    title: string;
    config: Record<string, any>;
    source: Record<string, any>;
    width?: number;
    card_type?: string;
    url?:string;
}

export interface CardProps {
    config: CardConfig;
    methods?: Record<string, Function>;
    sqlOpsUrls?: sqlOpsUrls | undefined;
    module_refid?: string | undefined;
    onClick?: () => void;
}

export type ApiResponse<T = any> = {
    success?: boolean;
    message?: string;
    data: T;
};

export interface sqlQueryProps {
    table: string;
    cols: string;
    where?: Record<string, string>;
    orderby?: string;
    groupby?: string;
};

export interface CardRendererProps {
    cardConfig: CardConfig;
    methods?: Record<string, Function>;
    sqlOpsUrls?: sqlOpsUrls | undefined;
    module_refid?: string | undefined
}

export interface DashData {
    [key: string]: string | number | boolean | null | undefined;
    // add other fields here...
}

export interface DashboardProps {

    dashboardJson: DashboardJson;
    methods?: Record<string, Function>;
    handleAction?: (value:string) => void;



}
