import React from "react";
import {RichUtils} from 'draft-js';
import {entityFromSelection} from "../../utilities/draft/DraftUtilities";
import {EditorStatePropsWithFocus} from "../../RenaissanceEditor";
import {Button} from "../../../button/Button";
import {Icon} from "../../../icon/Icon";

export const UnlinkControl: React.FC<EditorStatePropsWithFocus> = (
    {
        editorState,
        handleEditorStateChange,
        focusEditor
    }) => {

    const selection = editorState.getSelection();
    const selectionEntity = entityFromSelection(editorState);
    const removeLink = (e: React.MouseEvent) => {
        e.preventDefault();
        handleEditorStateChange(RichUtils.toggleLink(editorState, selection, null));
        focusEditor();
    };
    return (
        <Button title="Remove a link" onMouseDown={removeLink} size="small"
                disabled={selectionEntity === null || selectionEntity.getType() !== 'LINK'}>
            <Icon name="unlink"/>
        </Button>
    );
}