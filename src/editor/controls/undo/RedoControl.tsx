import React from "react";
import {EditorState} from "draft-js";
import {EditorStateProps} from "../../RenaissanceEditor";
import {Button} from "../../../button/Button";
import {Icon} from "../../../icon/Icon";

export const RedoControl: React.FC<EditorStateProps> = ({handleEditorStateChange, editorState}) => {
    return (
        <Button title="Redo"
                size="small"
                disabled={editorState.getRedoStack().size === 0}
                onMouseDown={() => {
                    handleEditorStateChange(EditorState.redo(editorState));
                }}>
            <Icon name="redo"/>
        </Button>
    );
}
