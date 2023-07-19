interface Props {
  label: string;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}

function Button({ label, color, onClick }: Props) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
