import { RemixLink } from "~/components";
import { classx } from "~/utils";

import type { RemixLinksProps, VechaiButtonProps } from "~/types";

export type RemixLinkButtonProps = VechaiButtonProps & RemixLinksProps;
/**
 * Note: interface cannot simultaneously extend types
 */

export const RemixLinkButton = ({
  children,
  className,
  color,
  leftIcon,
  rightIcon,
  size,
  to,
  variant,
  ...props
}: RemixLinkButtonProps) => {
  return (
    <RemixLink
      prefetch="intent"
      to={to || "/"}
      data-color={color || "primary"}
      className={classx(
        `btn-${variant || "solid"} btn btn-${size || "md"} rounded-base`,
        className,
      )}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </RemixLink>
  );
};
