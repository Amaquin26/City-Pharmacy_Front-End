export const colorAvailability = (
    status: string | undefined
): "primary" | "default" | "secondary" | "success" | "warning" | "danger" | undefined => {
  switch (status) {
    case "none":
      return "danger";
    case "low":
      return "warning";
    case "high":
      return "success";
    default:
      return "primary";
  }
};
