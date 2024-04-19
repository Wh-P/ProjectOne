import React, { useState } from 'react';
import { EditorState, ContentState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
const MyEditor: React.FC = () => {
  const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty());

  const onEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };
  
  return (
    <EditorDiv>
    <Editor
     editorState={editorState}
     onEditorStateChange={onEditorStateChange}
     toolbar={{
       options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign'],
       inline: { inDropdown: true },
       blockType: { inDropdown: true },
       fontSize: { inDropdown: true },
       fontFamily: { inDropdown: true },
       list: { inDropdown: true },
       textAlign: { inDropdown: true },
       colorPicker: { inDropdown: true },
       link: { inDropdown: true },
       embedded: { inDropdown: true },
       emoji: { inDropdown: false }
     }}
      placeholder='프로젝트에 대해 소개해주세요!'
    />
    </EditorDiv>
  );
};

export default MyEditor;

const EditorDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 480px;
  border: 1px solid  rgb(224, 224, 224);
  border-radius: 5px;
  .rdw-editor-main{
    height: 430px;
    border-radius: 5px;
    overflow: hidden;
  }
  .rdw-editor-toolbar{
    width: 100%
  }
  .editor-content{
    height: 410px;
  }
  .DraftEditor-root{
    margin-left: 10px;
  }
`