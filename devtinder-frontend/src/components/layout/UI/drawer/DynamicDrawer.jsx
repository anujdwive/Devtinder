import * as React from "react";
import { Drawer, Box, Typography, Button } from "@mui/material";

export default function DynamicDrawer({
  open,
  onClose,
  title = "Header",
  children,
  primaryText = "Save",
  secondaryText = "Cancel",
  onPrimaryClick,
  customWidth,
  styles = {},
}) {
  return (
    <Drawer anchor='right' open={open} onClose={onClose}>
      <Box
        sx={{
          width: customWidth || 350,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          ...styles.container,
        }}>
        {/* Header */}
        <Box sx={{ p: 2, borderBottom: "1px solid #ddd", ...styles.header }}>
          <Typography variant='h6'>{title}</Typography>
        </Box>

        {/* Content */}
        <Box sx={{ flex: 1, p: 2, ...styles.content }}>{children}</Box>

        {/* Footer */}
        <Box
          sx={{
            p: 2,
            borderTop: "1px solid #ddd",
            display: "flex",
            justifyContent: "flex-end",
            gap: 1,
            ...styles.footer,
          }}>
          <Button onClick={onClose}>{secondaryText}</Button>

          <Button
            variant='contained'
            onClick={() => {
              onPrimaryClick?.();
              onClose(); // close after action
            }}>
            {primaryText}
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
