'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string;
  initialOpen?: boolean;
}

export function CodeBlockWrapper({
  expandButtonTitle = 'View Code',
  className = 'my-6 overflow-hidden rounded-md',
  children,
  initialOpen = false,
  ...props
}: CodeBlockProps) {
  const [isOpened, setIsOpened] = React.useState(initialOpen);

  return (
    <Collapsible open={isOpened} onOpenChange={({ open }) => setIsOpened(open)}>
      <div className={cn('relative overflow-hidden [&_.copy_button]:hover:opacity-75', className)} {...props}>
        <CollapsibleContent className="block  [--start-height:8rem] data-[state=closed]:max-h-32 overflow-hidden">
          <div
            className={cn(
              '[&_pre]:my-0 [&_pre]:!max-h-[650px] [&_pre]:pb-[100px] [&_.copy]:z-20',
              !isOpened ? '[&_pre]:overflow-hidden' : '[&_pre]:overflow-auto',
            )}
          >
            {children}
          </div>
        </CollapsibleContent>

        <div
          className={cn(
            'absolute flex items-center z-10 justify-center bg-gradient-to-b from-zinc-300/30 to-zinc-50/90 dark:from-zinc-700/30 dark:to-zinc-950/90 p-2',
            isOpened ? 'inset-x-0 bottom-0 h-12' : 'inset-0',
          )}
        >
          <CollapsibleTrigger asChild>
            <Button variant="secondary" className="h-8 text-xs">
              {isOpened ? 'Collapse' : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  );
}
