import { Button, FileUploadDropzone, Image, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { PhotoUpload } from './PhotoUpload';
import { usePouch } from 'use-pouchdb';
import { Controller, useForm } from 'react-hook-form';

export const CreateProductForm = () => {
    const db = usePouch();
    const { control, register, handleSubmit, watch, formState: {errors}} = useForm();

    const onSubmit = (data) => {
      console.log({submitted: data});
    };


    return(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller 
          render={({ field: { onChange }}) => (
            <PhotoUpload onChange={onChange} />
          )}
          name='image'
          control={control}
          rules={{ required: true }}
        />
        <Input placeholder="SKU #" {...register('sku', { required: true})} />
        <Input placeholder="Product name" {...register('name', { required : true})} />
        <Input placeholder="Description" {...register('description')} />
        <Button type="submit">Submit</Button>
      </form>
    );
};