import { useEffect } from "react";

export const formatDate = (seconds: number) => {
  const date = new Date(seconds * 1000);

  const ts = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

  const ds = date.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return `${ts} ${ds}`;
};

export const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}