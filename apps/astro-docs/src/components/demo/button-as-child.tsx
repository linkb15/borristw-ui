import { Button } from '@/components/ui/button';

export const ButtonAsChild = () => {
  return (
    <Button asChild>
      <a href="/login" className="no-underline">
        Login
      </a>
    </Button>
  );
};
