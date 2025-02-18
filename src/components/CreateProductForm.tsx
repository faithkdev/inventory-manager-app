import { Button, FileUploadDropzone, Image } from '@chakra-ui/react';
import {
    FileUploadRoot,
  } from './ui/file-upload';
import { usePouch } from 'use-pouchdb';
import { FileAcceptDetails } from '@chakra-ui/react/dist/types/components/file-upload/namespace';
import { useState } from 'react';

export const CreateProductForm = () => {
    const db = usePouch();
    const [previewUrl, setPreviewUrl] = useState('');

    const onFileUpload = async(details: FileAcceptDetails) => {
      console.log({details});
      const file = details.files[0];
      console.log({file});
      if (!['image/png', 'image/jpg'].includes(file?.type)) {
        return;
      }
      const test = URL.createObjectURL(file);
      setPreviewUrl(test);
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

    return(
      <>
        {!previewUrl && <FileUploadRoot allowDrop accept={['image/png', 'image/jpg']} maxW="x1" alignItems="stretch" maxFiles={1} onFileAccept={(details: FileAcceptDetails) => onFileUpload(details)}>
          <FileUploadDropzone 
          >
            Upload an image
            .png, ,jpg only
          </FileUploadDropzone>
      </FileUploadRoot>}
      {previewUrl && <Image src={previewUrl} />}
      </>
    );
};