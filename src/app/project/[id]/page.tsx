"use client"

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import SingleProject from '@/components/SingleProject';

export default function SingleProjectPage() {
  const { id } = useParams();

  // Convert id to a number, handling both array and non-numeric string cases
  const projectId = Array.isArray(id) ? NaN : Number(id);

  if (isNaN(projectId) || projectId > 6 || projectId <= 0) {
    notFound();
    return null;
  }

  return <SingleProject id={projectId} />;
}
