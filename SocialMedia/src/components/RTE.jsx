import React from 'react'
import plugin from 'tailwindcss'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from '@tinymce/tinymce-react'


export default function RTE({
    name,
    control,
    label,

    defaulValue = ""
}) {
    return (
        // <Editor
        //     initialValue='default value'
        //     init={
        //         {
        //             branding: false,
        //             height: 500,
        //             menubar: true,
        //             plugins: [
        //                 'advlist autolink lists links image charmap print preview anchor',
        //                 'searchreplace visualblocks code fullscreen',
        //                 'insertdatetime media table paste code help wordcount'


        //             ],
        //             toolbar:
        //                 'undo redo | formatselect | bold italic backcolor| \
        //                 alignleft aligncenter alignright alignjustify |\
        //                 bullist numlist outdent indent | removeformat | help'

        //         }
        //     }
        // />
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1 '>{label}</label>}

            <Controller
                name={name || "content"}
                control={control}
                render={({ feild: { onchange } }) => {
                    <Editor
                        initialValue='defaultValue'
                        init={
                            {
                                initialValue: defaulValue,
                                height: 500,
                                menubar: true,
                                plugins: [
                                    "image",
                                    "advlist",
                                    "autolink",
                                    "lists",
                                    "link",
                                    "image",
                                    "charmap",
                                    "preview",
                                    "anchor",
                                    "searchreplace",
                                    "visualblocks",
                                    "code",
                                    "fullscreen",
                                    "insertdatatime",
                                    "media",
                                    "table",
                                    "code",
                                    "help",
                                    "wordcount",
                                    "anchor"
                                ],
                                toolbar:
                                    "undo redo | blocks | image |bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |help",
                                content_style: "body{ font-family:Helvetica,Arial,sans-serif;font-size:14px}"
                            }
                        }
                        onEditorChange={onchange}
                    />

                }}

            />
        </div>
    )
}

