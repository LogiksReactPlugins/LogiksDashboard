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
}

export interface CardConfig {
    title: string;
    config: Record<string, any>;
    source: Record<string, any>;
    width?: number;
    card_type?: string;
}

export interface CardProps {
    config: CardConfig;
    methods?: Record<string, Function>;
    sqlOpsUrls?: sqlOpsUrls | undefined;
}



export interface CardRendererProps {
    cardConfig: CardConfig;
    methods?: Record<string, Function>;
    sqlOpsUrls?: sqlOpsUrls | undefined;
}

export interface DashboardProps {

    dashboardJson: DashboardJson;
    methods?: Record<string, Function>



}
