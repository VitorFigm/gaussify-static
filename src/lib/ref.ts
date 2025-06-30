export const assignRef = <T>(ref: React.Ref<T>, value: T) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    (ref as any).current = value;
  }
};
