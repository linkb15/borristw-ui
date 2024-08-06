import { lazy, Suspense } from 'react';

const ButtonWrapper2 = lazy(() =>
  import('@/components/button-wrapper-2').then((mod) => ({
    default: mod.ButtonWrapper2,
  })),
);

export const ButtonWrapper = () => {
  return (
    <Suspense fallback={<>Loading ...</>}>
      <ButtonWrapper2 />
    </Suspense>
  );
};
