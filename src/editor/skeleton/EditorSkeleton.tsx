import React, {Fragment, useState} from "react";
import '../assets/RenaissanceEditor.scss';
import Skeleton from "react-loading-skeleton";
import {BLOCK_TYPES} from "../controls/block/BlockControl";
import {INLINE_TYPES} from "../controls/inline/InlineControl";
import {Button} from "../../button/Button";
import {Icon} from "../../icon/Icon";
import {DropdownButton} from "../../button/DropdownButton";

export const EditorSkeleton: React.FC = () => {
    const [showContent, setShowContent] = useState(false);
    return (
        <div className="muncher">
            <div className="muncher-main">
                <div className="muncher-toolbar">
                    <div className="muncher-toolbar--left">
                        <Button title="Undo" size="small">
                            <Icon name="undo"/>
                        </Button>
                        <Button title="Redo" size="small">
                            <Icon name="redo"/>
                        </Button>
                        <span className="muncher-separator">|</span>
                        <Button title="Ordered List" size="small">
                            <Icon name="ordered-list"/>
                        </Button>
                        <Button title="Unordered List" size="small">
                            <Icon name="unordered-list"/>
                        </Button>
                        <span className="muncher-separator">|</span>
                        <DropdownButton
                            element={<span>Heading 1 <span className="muncher--small">&#9660;</span></span>}
                            showContent={showContent}
                            setShowContent={setShowContent}
                            active={true}
                            size="small">

                            <div className="block__content">
                                {BLOCK_TYPES.map(blockType =>
                                    <div className="block__content--item" key={blockType.label}>{blockType.label}</div>
                                )}
                            </div>
                        </DropdownButton>
                        <span className="muncher-separator">|</span>
                        <Fragment>
                            {
                                INLINE_TYPES.map(inlineType =>
                                    <Button
                                        key={inlineType.style}
                                        title={inlineType.label}
                                        size="small"
                                    >
                                        {inlineType.icon}
                                    </Button>
                                )
                            }
                        </Fragment>
                    </div>

                </div>
                <h2><Skeleton width={600}/></h2>
                <p><Skeleton width={800} height={50}/></p>
                <p><Skeleton width={800} height={100}/></p>
                <p><Skeleton width={800} height={70}/></p>
                <p><Skeleton width={800}/></p>

            </div>
        </div>
    );
};