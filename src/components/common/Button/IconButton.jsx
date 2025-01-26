import {
  Badge,
  badgeClasses,
  IconButton as Button,
  styled,
  Tooltip,
  tooltipClasses,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

const IconButton = ({ children, title, count, ...props }) => {
  return (
    <BootstrapTooltip title={title} placement="right">
      <Button size="small" {...props}>
        {children}
        {count && count > 0 && (
          <CartBadge badgeContent={count} color="primary" overlap="circular" />
        )}
      </Button>
    </BootstrapTooltip>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  count: PropTypes.number,
};

export default IconButton;
