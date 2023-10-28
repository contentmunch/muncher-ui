import React, { ReactNode } from "react";
export declare const Tabs: React.FC<TabsProps>;
export interface TabsProps {
    children: {
        tabs: {
            header: string;
            headerTitle?: string;
            body: ReactNode;
        }[];
    };
    handleTabSelected?: (index: number) => void;
}
