'use client';

import { ArrowLongLeftIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { classNames } from "@/utils/common";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      className={
        classNames(
          'inline-flex items-center px-4 py-2 shadow-sm text-base font-medium rounded-md',
          'border-2 border-pomegranate',
          'text-pomegranate hover:bg-pomegranate-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pomegranate-500'
        )
      }
      onClick={() => router.back()}
    >
      <ArrowLongLeftIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
      Volver
    </button>
  );
}