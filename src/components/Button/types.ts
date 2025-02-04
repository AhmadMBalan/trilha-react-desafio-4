export interface IButtonProps {
    title: string; // The text displayed on the button
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // Optional click handler
    disabled?: boolean; // Optional disabled state
  }