export const colorAvailability = (
    status: string
): "primary" | "default" | "secondary" | "success" | "warning" | "danger" | undefined => {
  switch (status) {
    case "low":
      return "danger";
    case "medium":
      return "warning";
    case "high":
      return "success";
    default:
      return undefined;
  }
};
