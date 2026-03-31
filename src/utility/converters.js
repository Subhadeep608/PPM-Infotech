export const pathBuilder = (...parts) => {
  const result =
    "/" +
    parts
      .map((p) => p.replace(/^\/|\/$/g, ""))
      .filter(Boolean)
      .join("/");
  return result;
};
