import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: number;
}

const RichTextEditor = ({ value, onChange, placeholder = "Digite seu conteúdo...", minHeight = 200 }: RichTextEditorProps) => {
  const [editorValue, setEditorValue] = useState(value);

  useEffect(() => {
    setEditorValue(value);
  }, [value]);

  const handleChange = (content: string) => {
    setEditorValue(content);
    onChange(content);
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  return (
    <div className="rich-text-editor">
      <style>{`
        .ql-editor {
          min-height: ${minHeight}px;
          font-family: inherit;
          font-size: 14px;
          line-height: 1.5;
        }
        .ql-toolbar {
          border-top: 1px solid hsl(var(--border));
          border-left: 1px solid hsl(var(--border));
          border-right: 1px solid hsl(var(--border));
          background: hsl(var(--background));
        }
        .ql-container {
          border-bottom: 1px solid hsl(var(--border));
          border-left: 1px solid hsl(var(--border));
          border-right: 1px solid hsl(var(--border));
          background: hsl(var(--background));
        }
        .ql-editor.ql-blank::before {
          color: hsl(var(--muted-foreground));
          font-style: normal;
        }
        .ql-snow .ql-tooltip {
          background: hsl(var(--popover));
          border: 1px solid hsl(var(--border));
          color: hsl(var(--popover-foreground));
        }
        .ql-snow .ql-tooltip input[type=text] {
          background: hsl(var(--input));
          border: 1px solid hsl(var(--border));
          color: hsl(var(--foreground));
        }
        .ql-snow .ql-picker-options {
          background: hsl(var(--popover));
          border: 1px solid hsl(var(--border));
        }
        .ql-snow .ql-picker-item:hover {
          background: hsl(var(--accent));
        }
      `}</style>
      <ReactQuill
        theme="snow"
        value={editorValue}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
    </div>
  );
};

export default RichTextEditor;