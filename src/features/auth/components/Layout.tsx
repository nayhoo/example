import * as React from 'react';

import { Head } from '@/components/Head';

import { Box, Heading } from '@nayhoo/components';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head title={title} />
      <Box className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Box className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Box className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Heading size="2" className="mb-3">
              {title}
            </Heading>

            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};
