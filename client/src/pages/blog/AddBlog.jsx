import React, { useEffect, useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import slugify from 'slugify';
import { showToast } from '@/helpers/showToast';
import { getEnv } from '@/helpers/getEnv';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useFetch } from '@/hooks/useFetch';
import Dropzone from 'react-dropzone';
import Editor from '@/components/Editor';

const AddBlog = () => {
  // To fetch all category list
  const {
    data: categoryData,
    loading,
    error,
  } = useFetch(`${getEnv('VITE_API_BASE_URL')}/category/all-category`, {
    method: 'get',
    credentials: 'include',
  });

  const [file, setFile] = useState();
  const [filePreview, setFilePreview] = useState();

  const formSchema = z.object({
    category: z.string().min(3, {
      message: 'Category Name must be at least 3 characters long.',
    }),
    title: z.string().min(3, {
      message: 'Title must be at least 3 characters long.',
    }),
    slug: z.string().min(3, {
      message: 'Slug must be at least 3 characters long.',
    }),
    blogContent: z.string().min(3, {
      message: 'Blog content must be at least 3 characters long.',
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: '',
      title: '',
      slug: '',
      blogContent: '',
    },
  });

  // Editor data handling
  const handleEditorData = (event, editor) => {
    const data = editor.getData();
    form.setValue('blogContent', data);
  };

  const blogTitle = form.watch('title');
  // Updating Slug automatically
  useEffect(() => {
    if (blogTitle) {
      const slug = slugify(blogTitle, { lower: true });
      form.setValue('slug', slug);
    }
  }, [blogTitle]);

  // Add Blog Button Function
  async function onSubmit(values) {
    // try {
    //   const response = await fetch(
    //     `${getEnv('VITE_API_BASE_URL')}/category/add`,
    //     {
    //       method: 'post',
    //       headers: { 'Content-type': 'application/json' },
    //       body: JSON.stringify(values),
    //     },
    //   );
    //   const data = await response.json();
    //   if (!response.ok) {
    //     return showToast('error', data.message);
    //   }
    //   form.reset();
    //   showToast('success', data.message);
    // } catch (error) {
    //   showToast('error', error.message);
    // }
  }

  const handleFileSelection = (files) => {
    const file = files[0];
    const preview = URL.createObjectURL(file);
    setFile(file);
    setFilePreview(preview);
  };

  return (
    <div>
      <Card className="pt-5">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* Category */}
              <div className="mb-3">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categoryData &&
                              categoryData.category.length > 0 &&
                              categoryData.category.map((category) => (
                                <SelectItem
                                  key={category._id}
                                  value={category._id}
                                >
                                  {category.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Title */}
              <div className="mb-3">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter blog title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Slug */}
              <div className="mb-3">
                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter a slug" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Feature Images */}
              <div className="mb-3">
                <span className="mb-2 block">Featured Image</span>
                <Dropzone
                  onDrop={(acceptedFiles) => handleFileSelection(acceptedFiles)}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <div className="flex justify-center items-center w-36 h-28 border-2 border-dashed rounded">
                        <img src={filePreview} alt="feature image" />
                      </div>
                    </div>
                  )}
                </Dropzone>
              </div>

              {/* Contents */}
              <div className="mb-3">
                <FormField
                  control={form.control}
                  name="blogContent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Blog Content</FormLabel>
                      <FormControl>
                        <Editor
                          props={{
                            initialData: '',
                            onChange: handleEditorData,
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddBlog;
