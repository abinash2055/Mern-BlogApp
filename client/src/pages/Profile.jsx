import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getEnv } from '@/helpers/getEnv';
import { showToast } from '@/helpers/showToast';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { useFetch } from '@/hooks/useFetch';
import { setUser } from '@/redux/user/user.slice';
import Loading from '@/components/Loading';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const {
    data: userData,
    loading,
    error,
  } = useFetch(
    `${getEnv('VITE_API_BASE_URL')}/user/get-user/${user.user._id}`,
    {
      method: 'get',
      credentials: 'include',
    },
  );

  const dispatch = useDispatch();

  const formSchema = z.object({
    name: z.string().min(3, {
      message: 'Name must be atleast 3 character long...',
    }),
    email: z.string().email(),
    bio: z.string().min(3, {
      message: 'Bio must be atleast 3 character long...',
    }),
    password: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      bio: '',
      password: '',
    },
  });

  async function onSubmit(values) {
    try {
      const response = await fetch(
        `${getEnv('VITE_API_BASE_URL')}/auth/login`,
        {
          method: 'post',
          headers: { 'Content-type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(values),
        },
      );

      const data = await response.json();
      if (!response.ok) {
        return showToast('error', data.message);
      }
      dispatch(setUser(data.user));
      showToast('success', data.message);
    } catch (error) {
      showToast('error', error.message);
    }
  }

  if (loading) return <Loading />;

  return (
    <div>
      <Card className="max-w-screen-md mx-auto">
        <CardContent>
          <div className="flex justify-center items-center mt-10">
            <Avatar className="w-28 h-28">
              <AvatarImage src={userData.user.avatar} />
            </Avatar>
          </div>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* Name */}
                <div className="mb-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Bio */}
                <div className="mb-3">
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter bio" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full cursor-pointer">
                  Save Changes
                </Button>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
