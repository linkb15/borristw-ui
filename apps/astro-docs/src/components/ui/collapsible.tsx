'use client';

import { cn } from '@/lib/utils';
import { Collapsible as CollapsiblePrimitive } from '@ark-ui/react/collapsible';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleContent = forwardRef<
  ElementRef<typeof CollapsiblePrimitive.Content>,
  ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={cn(
      'data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up',
      className,
    )}
    {...props}
  />
));
CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName;

const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
