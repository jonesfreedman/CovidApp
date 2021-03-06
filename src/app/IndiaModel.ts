// Generated by https://quicktype.io

export interface IndiaModel {
    cases_time_series: CasesTimeSery[];
    statewise: Statewise[];
    tested: { [key: string]: string }[];
}

export interface CasesTimeSery {
    dailyconfirmed: string;
    dailydeceased: string;
    dailyrecovered: string;
    date: string;
    totalconfirmed: string;
    totaldeceased: string;
    totalrecovered: string;
}

export interface Statewise {
    active: string;
    confirmed: string;
    deaths: string;
    deltaconfirmed: string;
    deltadeaths: string;
    deltarecovered: string;
    lastupdatedtime: string;
    recovered: string;
    state: string;
    statecode: string;
    statenotes: string;
}
