import * as React from 'react';

import { Head } from '../Head';

import { Box } from '@nayhoo/components';

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <Box className="py-6">
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        </Box>
        <Box className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</Box>
      </Box>
    </>
  );
};
