import { Button } from './styles';

export default function Buttondefault({
  children, width, primary, color,
}) {
  return (
    <Button width={width} primary={primary} color={color}>
      {children}
    </Button>
  );
}
