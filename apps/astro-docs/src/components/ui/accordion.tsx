'use client';

import { Accordion as AccordionPrimitive } from '@ark-ui/react/accordion';
import { ChevronDownIcon } from 'lucide-react';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.ItemTrigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.ItemTrigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.ItemTrigger
    ref={ref}
    className={cn(
      'flex bg-transparent cursor-pointer items-center justify-between py-4 text-sm font-medium transition-all hover:underline',
      className,
    )}
    {...props}
  >
    {children}
    <AccordionPrimitive.ItemIndicator className="data-[state=open]:rotate-180">
      <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.ItemIndicator>
  </AccordionPrimitive.ItemTrigger>
));
AccordionTrigger.displayName = AccordionPrimitive.ItemTrigger.displayName;

const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.ItemContent>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.ItemContent>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.ItemContent
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.ItemContent>
));
AccordionContent.displayName = AccordionPrimitive.ItemContent.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
