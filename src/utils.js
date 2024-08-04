export const observeSize = (element, callback) => {
  const observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      callback(entry.contentRect.width);
    });
  });

  observer.observe(element);
};
