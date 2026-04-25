/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/#installation/NoNgNARAzAdADDATBSBWRiQHYAsqoAcWiAnFDlAIxw6WKEGUmokmI0Wo4kE6LU4UEAKYA7FHDDBKYGXLCTKAXUg8KAQwDGcCEqA=
 */

import { useState, useEffect, useMemo } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor,
  Autosave,
  Essentials,
  Paragraph,
  Autoformat,
  BlockQuote,
  Bold,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  TextTransformation,
  Underline,
  Fullscreen,
  List,
  TodoList,
  MediaEmbed,
  Markdown,
  PasteFromMarkdownExperimental,
  Strikethrough,
  Code,
  Subscript,
  Superscript,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Highlight,
  HorizontalLine,
  CodeBlock,
  Alignment,
  Style,
  GeneralHtmlSupport,
  ImageInline,
  ImageToolbar,
  ImageBlock,
  ImageUpload,
  CloudServices,
  ImageInsertViaUrl,
  AutoImage,
  ImageStyle,
  LinkImage,
  ImageCaption,
  ImageTextAlternative,
  Table,
  TableToolbar,
  PlainTableOutput,
  TableCaption,
  ShowBlocks,
  TextPartLanguage,
  Title,
  Mention,
  SourceEditing,
  HtmlComment,
  BalloonToolbar,
  BlockToolbar,
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

// import './App.css';

/**
 * Create a free account with a trial: https://portal.ckeditor.com/checkout?plan=free
 */
const LICENSE_KEY = 'GPL'; // or <YOUR_LICENSE_KEY>.

export default function Editor({ props }) {
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);

  const { editorConfig } = useMemo(() => {
    if (!isLayoutReady) {
      return {};
    }

    return {
      editorConfig: {
        root: {
          placeholder: 'Type or paste your content here!',
          initialData: props?.initialData || '',
        },
        toolbar: {
          items: [
            'undo',
            'redo',
            '|',
            'sourceEditing',
            'showBlocks',
            'textPartLanguage',
            'fullscreen',
            '|',
            'heading',
            'style',
            '|',
            'fontSize',
            'fontFamily',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'subscript',
            'superscript',
            'code',
            '|',
            'horizontalLine',
            'link',
            'mediaEmbed',
            'insertTable',
            'highlight',
            'blockQuote',
            'codeBlock',
            '|',
            'alignment',
            '|',
            'bulletedList',
            'numberedList',
            'todoList',
            'outdent',
            'indent',
          ],
          shouldNotGroupWhenFull: false,
        },
        plugins: [
          Alignment,
          Autoformat,
          AutoImage,
          Autosave,
          BalloonToolbar,
          BlockQuote,
          BlockToolbar,
          Bold,
          CloudServices,
          Code,
          CodeBlock,
          Essentials,
          FontBackgroundColor,
          FontColor,
          FontFamily,
          FontSize,
          Fullscreen,
          GeneralHtmlSupport,
          Heading,
          Highlight,
          HorizontalLine,
          HtmlComment,
          ImageBlock,
          ImageCaption,
          ImageInline,
          ImageInsertViaUrl,
          ImageStyle,
          ImageTextAlternative,
          ImageToolbar,
          ImageUpload,
          Indent,
          IndentBlock,
          Italic,
          Link,
          LinkImage,
          List,
          Markdown,
          MediaEmbed,
          Mention,
          Paragraph,
          PasteFromMarkdownExperimental,
          PlainTableOutput,
          ShowBlocks,
          SourceEditing,
          Strikethrough,
          Style,
          Subscript,
          Superscript,
          Table,
          TableCaption,
          TableToolbar,
          TextPartLanguage,
          TextTransformation,
          Title,
          TodoList,
          Underline,
        ],
        licenseKey: LICENSE_KEY,
        balloonToolbar: [
          'bold',
          'italic',
          '|',
          'link',
          '|',
          'bulletedList',
          'numberedList',
        ],
        blockToolbar: [
          'fontSize',
          'fontColor',
          'fontBackgroundColor',
          '|',
          'bold',
          'italic',
          '|',
          'link',
          'insertTable',
          '|',
          'bulletedList',
          'numberedList',
          'outdent',
          'indent',
        ],
        fontFamily: {
          supportAllValues: true,
        },
        fontSize: {
          options: [10, 12, 14, 'default', 18, 20, 22],
          supportAllValues: true,
        },
        fullscreen: {
          onEnterCallback: (container) =>
            container.classList.add(
              'editor-container',
              'editor-container_classic-editor',
              'editor-container_include-style',
              'editor-container_include-block-toolbar',
              'editor-container_include-fullscreen',
              'main-container',
            ),
        },
        heading: {
          options: [
            {
              model: 'paragraph',
              title: 'Paragraph',
              class: 'ck-heading_paragraph',
            },
            {
              model: 'heading1',
              view: 'h1',
              title: 'Heading 1',
              class: 'ck-heading_heading1',
            },
            {
              model: 'heading2',
              view: 'h2',
              title: 'Heading 2',
              class: 'ck-heading_heading2',
            },
            {
              model: 'heading3',
              view: 'h3',
              title: 'Heading 3',
              class: 'ck-heading_heading3',
            },
            {
              model: 'heading4',
              view: 'h4',
              title: 'Heading 4',
              class: 'ck-heading_heading4',
            },
            {
              model: 'heading5',
              view: 'h5',
              title: 'Heading 5',
              class: 'ck-heading_heading5',
            },
            {
              model: 'heading6',
              view: 'h6',
              title: 'Heading 6',
              class: 'ck-heading_heading6',
            },
          ],
        },
        htmlSupport: {
          allow: [
            {
              name: /^.*$/,
              styles: true,
              attributes: true,
              classes: true,
            },
          ],
        },
        image: {
          toolbar: [
            'toggleImageCaption',
            'imageTextAlternative',
            '|',
            'imageStyle:inline',
            'imageStyle:wrapText',
            'imageStyle:breakText',
          ],
        },
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: 'https://',
          decorators: {
            toggleDownloadable: {
              mode: 'manual',
              label: 'Downloadable',
              attributes: {
                download: 'file',
              },
            },
          },
        },
        mention: {
          feeds: [
            {
              marker: '@',
              feed: [
                /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
              ],
            },
          ],
        },
        style: {
          definitions: [
            {
              name: 'Article category',
              element: 'h3',
              classes: ['category'],
            },
            {
              name: 'Title',
              element: 'h2',
              classes: ['document-title'],
            },
            {
              name: 'Subtitle',
              element: 'h3',
              classes: ['document-subtitle'],
            },
            {
              name: 'Info box',
              element: 'p',
              classes: ['info-box'],
            },
            {
              name: 'CTA Link Primary',
              element: 'a',
              classes: ['button', 'button--green'],
            },
            {
              name: 'CTA Link Secondary',
              element: 'a',
              classes: ['button', 'button--black'],
            },
            {
              name: 'Marker',
              element: 'span',
              classes: ['marker'],
            },
            {
              name: 'Spoiler',
              element: 'span',
              classes: ['spoiler'],
            },
          ],
        },
        table: {
          contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
        },
      },
    };
  }, [isLayoutReady]);

  return (
    <div className="main-container">
      <div className="editor-container editor-container_classic-editor editor-container_include-style editor-container_include-block-toolbar editor-container_include-fullscreen">
        <div className="editor-container__editor">
          {editorConfig && (
            <CKEditor
              onChange={props.onChange}
              editor={ClassicEditor}
              config={editorConfig}
            />
          )}
        </div>
      </div>
    </div>
  );
}
