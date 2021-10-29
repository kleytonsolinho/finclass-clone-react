import { Button } from './styles';

export default function Buttondefault({
  children,
  width,
  primary,
  color,
  onClick,
}) {
  return (
    <Button
      width={width}
      primary={primary}
      color={color}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
