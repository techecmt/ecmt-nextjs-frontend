import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Education Blog | Edusphere College Singapore',
  description:
    'Read Edusphere insights on diploma programmes, career guidance, interview preparation, and practical learning tips in Singapore.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
      <p className="text-gray-600">Coming soon...</p>
    </div>
  );
}
