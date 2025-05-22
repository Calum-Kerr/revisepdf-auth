'use client';

import { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { FileUpload } from '@/components/ui/file-upload';

export default function PDFCompressor() {
  const t = useTranslations();
  const [file, setFile] = useState<File | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [compressedFileUrl, setCompressedFileUrl] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setCompressedFileUrl(null);
    } else {
      toast.error('Please upload a valid PDF file');
    }
  }, []);

  const simulateCompression = () => {
    if (!file) return;

    setIsCompressing(true);
    setProgress(0);

    // Simulate compression progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsCompressing(false);
          // Create a fake compressed file URL
          setCompressedFileUrl(URL.createObjectURL(file));
          toast.success(t('tools.compression.success'));
          return 100;
        }
        return newProgress;
      });
    }, 500);
  };

  const resetCompressor = () => {
    setFile(null);
    setProgress(0);
    setCompressedFileUrl(null);
  };

  return (
    <div className="space-y-6">
      {!file && !compressedFileUrl ? (
        <FileUpload
          onDrop={onDrop}
          accept={{ 'application/pdf': ['.pdf'] }}
          maxFiles={1}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12 text-muted-foreground"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M8 13h2" />
              <path d="M8 17h2" />
              <path d="M14 13h2" />
              <path d="M14 17h2" />
            </svg>
            <div>
              <p className="text-lg font-medium">{t('tools.compression.dragDrop')}</p>
              <p className="text-sm text-muted-foreground mt-1">{t('tools.compression.or')}</p>
            </div>
            <Button variant="outline" size="sm">
              {t('tools.compression.browse')}
            </Button>
          </div>
        </FileUpload>
      ) : (
        <div className="space-y-6">
          {file && (
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-primary"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <div>
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={resetCompressor}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </Button>
            </div>
          )}

          {isCompressing ? (
            <div className="space-y-4">
              <p className="text-center font-medium">{t('tools.compression.compressing')}</p>
              <Progress value={progress} className="h-2" />
            </div>
          ) : compressedFileUrl ? (
            <div className="flex flex-col items-center space-y-4">
              <Button asChild className="w-full sm:w-auto">
                <a href={compressedFileUrl} download={`compressed-${file?.name}`}>
                  {t('tools.compression.download')}
                </a>
              </Button>
              <Button variant="outline" onClick={resetCompressor}>
                Compress Another PDF
              </Button>
            </div>
          ) : (
            <Button onClick={simulateCompression} className="w-full">
              {t('tools.compression.upload')}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
