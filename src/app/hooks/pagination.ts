// Create a usePagination hook that will be used to paginate the data.

import { useState } from 'react';

export default function usePagination(
  totalItems: number,
  itemsPerPage: number,
  currentPage: number = 1
) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const from = (currentPage - 1) * itemsPerPage + 1;
  const to = Math.min(currentPage * itemsPerPage, totalItems);

  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return {
    from,
    to,
    hasPrevious,
    hasNext,
    totalPages,
  };
}