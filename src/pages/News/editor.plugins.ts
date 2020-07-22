import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'

export const EDITOR_JS_TOOLS = {
    embed: Embed,
    table: Table,
    paragraph: {
        class: Paragraph,
        inlineToolbar: true
    },
    list: {
        class: List,
        inlineToolbar: true
    },
    warning: Warning,
    code: Code,
    linkTool: {
        class: LinkTool,
        inlineToolbar: true
    },
    image: {
        class: Image,
        config: {
            endpoints: {
                byFile: "",
                byUrl: "httpslalhost"
            },
            buttonContent: "选择一张不大于1MB的图片",
            captionPlaceholder: "标题"
        }
    },
    raw: Raw,
    header: {
        class: Header,
        inlineToolbar: true
    },
    quote: {
        class: Quote,
        inlineToolbar: true
    },
    marker: Marker,
    checklist: {
        class: CheckList,
        inlineToolbar: true
    },
    delimiter: Delimiter,
    inlineCode: {
        class: InlineCode,
        inlineToolbar: true
    },
    simpleImage: SimpleImage
}