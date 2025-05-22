'use client';

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { cn } from '@/lib/utils';

interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  onDrop: (acceptedFiles: File[]) => void;
  accept?: Record<string, string[]>;
  maxFiles?: number;
  maxSize?: number;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function FileUpload({
  onDrop,
  accept,
  maxFiles = 1,
  maxSize,
  disabled = false,
  className,
  children,
  ...props
}: FileUploadProps) {
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (!disabled) {
        onDrop(acceptedFiles);
      }
    },
    [disabled, onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept,
    maxFiles,
    maxSize,
    disabled,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        'border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors',
        isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25 hover:border-primary/50',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      <input {...getInputProps()} />
      {children}
    </div>
  );
}
