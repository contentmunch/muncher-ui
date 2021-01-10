import {EditorState} from "draft-js";

export const entityFromSelection = (editorState: EditorState) => {
    const selectionState = editorState.getSelection();
    if (!selectionState.isCollapsed()) {
        const anchorKey = selectionState.getAnchorKey();

        const currentContent = editorState.getCurrentContent();

        const currentContentBlock = currentContent.getBlockForKey(anchorKey);

        const start = selectionState.getStartOffset();

        const entityId = currentContentBlock.getEntityAt(start);

        if (entityId !== null) {
            return currentContent.getEntity(entityId);
        }
    }
    return null;
};

export const getBlock = (editorState: EditorState) => {
    const selection = editorState.getSelection();
    return editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey());
};
export const getBlockType = (editorState: EditorState) => {

    return getBlock(editorState)?.getType();
};
export const getBlockAlignment = (editorState: EditorState) => {
    return getBlock(editorState)?.getData().get('textAlign');
};

export const getCurrentInlineStyle = (editorState: EditorState) => {
    try {
        return editorState.getCurrentInlineStyle();
    } catch (e) {

    }

};
export const moveFocusToEnd = (editorState: EditorState) => {
    editorState = EditorState.moveSelectionToEnd(editorState);
    return EditorState.forceSelection(editorState, editorState.getSelection());
}
export const getPlainText = (editorState: EditorState) => editorState.getCurrentContent().getPlainText('\u0001');
