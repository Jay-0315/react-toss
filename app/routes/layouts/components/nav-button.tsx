import { Button } from '~/components/ui/button';

interface Props {
  children?: React.ReactNode;
}
export default function NavButton({ children }: Props) {
  return (
    <Button
      variant="ghost"
      className="leading[1.5] text-[15px] font-[500] text-[rgb(78,89,104)] hover:text-[#3182f6]"
    >
      {children ?? ''}
    </Button>
  );
}
