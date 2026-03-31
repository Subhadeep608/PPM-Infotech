export const pathBuilder = (...parts) => {
  const result =
    "/" +
    parts
      .map((p) => p.replace(/^\/|\/$/g, ""))
      .filter(Boolean)
      .join("/");

  console.log("PATH BUILT:", parts, "→", result);

  return result;
};
