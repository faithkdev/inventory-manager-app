import { Button, FileUploadDropzone, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { PhotoUpload } from './PhotoUpload';

export const CreateProductForm = () => {
    const db = usePouch();
    const [image, setImage] = useState<File>();    

    return(
      <>
        <PhotoUpload onFileUpload={(file: File) => setImage(file)} />
      </>
    );
};