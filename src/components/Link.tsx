import MuiLink, { LinkProps } from "@mui/material/Link";

export default function Link({ children, ...props }: LinkProps) {
  return <MuiLink {...props}>{children}</MuiLink>;
}
