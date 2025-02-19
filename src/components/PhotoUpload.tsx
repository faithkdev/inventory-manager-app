import { FileAcceptDetails } from "@chakra-ui/react/dist/types/components/file-upload/namespace";
import { useState } from "react";
import { FileUploadDropzone, Image } from '@chakra-ui/react';
import {
    FileUploadRoot,
  } from './ui/file-upload';

type Props = {
    onFileUpload: (file: File) => void;
};

export const PhotoUpload = ({ onFileUpload }: Props) => {
    const [previewUrl, setPreviewUrl] = useState('');

    const onUpload = (details: FileAcceptDetails) => {
        const file = details.files[0];
        console.log({ file });
        if (!['image/png', 'image/jpg'].includes(file?.type)) {
            return;
        }
        const test = URL.createObjectURL(file);
        setPreviewUrl(test);
        onFileUpload(file);
        // const doc = {
        //   _id: crypto.randomUUID(),
        //   name: file.name,
        //   _attachments: {
        //     'file': {
        //       content_type: file.type,
        //       data: file,
        //     }
        //   }
        // };
        // await db.put(doc);
        // console.log("Done");
    };

    return (
        <>
            {!previewUrl && <FileUploadRoot allowDrop accept={['image/png', 'image/jpg']} maxW="x1" alignItems="stretch" maxFiles={1} onFileAccept={(details: FileAcceptDetails) => onUpload(details)}>
                <FileUploadDropzone
                >
                    Upload an image
                    .png, ,jpg only
                </FileUploadDropzone>
            </FileUploadRoot>}
            {previewUrl && <Image src={previewUrl} />}
        </>
    )

};
