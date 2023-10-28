import React, { ReactElement, ReactNode } from "react";
export declare const Table: React.FC<TableProps>;
export interface TableProps {
    children: {
        header: Head[];
        rows: Col[][];
    };
    skeleton?: ReactNode;
    sortBy?: Sort;
    fileName?: string;
    defaultPageSize?: number;
    excludeDownload?: true;
    includeUpload?: true;
    isUploading?: boolean;
    handleOnUpload?: (file: File) => void;
    uploadWarningMessage?: string;
    uploadSuccessMessage?: string;
}
export interface Page {
    num: number;
    size: number;
}
export interface Sort {
    index: number;
    desc?: boolean;
}
export interface Head {
    name: ReactElement | string;
    title?: string;
    visibility?: "large-screen" | "hidden";
    csvExclude?: boolean;
    sort?: (a: Col[], b: Col[]) => number;
}
export interface Col {
    value: string;
    content: ReactNode;
    csv?: string;
}
