import { useEffect, useState } from 'react';

export default function useReadyImages() {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState({ distance: 0, value: 0 });

  useEffect(() => {
    Promise.all(
      Array.from(document.images)
        .filter((img, i) => {
          setProgress((prev) => {
            return {
              ...prev,
              distance: i,
            };
          });
          return !img.complete;
        })
        .map((img, i) => {
          return new Promise((resolve) => {
            img.onload = img.onerror = resolve;

            setProgress((prev) => {
              return {
                ...prev,
                value: i,
              };
            });
          });
        })
    ).then(() => {
      setReady(true);
    });

    return () => {};
  }, []);

  return [ready, progress];
}
