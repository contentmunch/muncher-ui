import React, {ReactNode, useState} from "react";

import "./assets/Tabs.scss";
import {Paper} from "../paper/Paper";
import {Button} from "../button/Button";

export const Tabs: React.FC<TabsProps> = ({children}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const {tabs} = children;
    return (
        <section className="muncher-tabs">
            <Paper>
                <header>
                    {tabs.map((tab, index) =>
                        <>
                            <Button key={"muncher-tab-header" + index} variant="transparent"
                                    active={currentIndex === index}
                                    size="small"
                                    title={tab.headerTitle}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                    }}>
                                {tab.header}
                            </Button>
                            {index !== tabs.length - 1 ? <span className="spacer">|</span> : ""}
                        </>
                    )}
                </header>
                {tabs.map((tab, index) =>
                    <section key={"muncher-tab-" + index}
                             className={currentIndex === index ? "muncher-tab muncher-tab--active" : "muncher-tab"}>
                        {tab.body}
                    </section>
                )}
            </Paper>
        </section>
    );
}

export interface TabsProps {
    children: {
        tabs: {
            header: string,
            headerTitle?: string,
            body: ReactNode
        }[]
    }
}