import { useRef , useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './tiny.css'
export default function TinyMCE() {
  const [content,setContent] = useState('')  
  const editorRef = useRef(null);
  const apiKey = '7fzhtn9w33p5bfpuuno3t960ffee508n0sxbu5ajxfl1tcb7' 
  // Tiny.cloud dashboard 
  const log = () => {
    if (editorRef.current) {
      setContent(editorRef.current.getContent())
    }
  };

  return (
    <div className="side-by-side">
       
    <div>
      <Editor
        apiKey={apiKey}
        onEditorChange={()=>{log()}}
        onInit={(evt, editor) => editorRef.current = editor }
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </div>
        <div>{content ? <div dangerouslySetInnerHTML={{__html:content}}></div> : null}</div> 
    </div>
  );
}