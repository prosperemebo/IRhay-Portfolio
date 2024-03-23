import { useCallback, useEffect, useState } from 'react';

export default function useReadyImages() {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  const loader = useCallback(() => {
    // const images = document.images;
    const elementsWithDataImportant =
      document.querySelectorAll('[data-important]');
    const images = Array.from(elementsWithDataImportant).filter(
      function (element) {
        return element.tagName.toLowerCase() === 'img';
      }
    );

    let count = 0;
    let noOfImages = images.length;

    if (noOfImages === 0) {
      setProgress(100);
      return doneLoading();
    }

    function imgLoaded() {
      count += 1;
      let perc = ((100 / noOfImages) * count) << 0;

      setProgress(perc);

      if (count === noOfImages) return doneLoading();
    }

    function doneLoading() {
      setReady(true);
    }

    for (let i = 0; i < noOfImages; i++) {
      let tImg = new Image();
      tImg.onload = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src = images[i].src;
    }
  }, []);

  useEffect(() => {
    loader();
  }, [loader]);

  return [ready, progress];
}

// Promise.all(
//     Array.from(document.images)
//       .filter((img, i) => {
//         setProgress((prev) => {
//           return {
//             ...prev,
//             distance: i,
//           };
//         });
//         return !img.complete;
//       })
//       .map((img, i) => {
//         return new Promise((resolve) => {
//           img.onload = img.onerror = resolve;
//         }).then((res) => {
//           setProgress((prev) => {
//             return {
//               ...prev,
//               value: i,
//             };
//           });
//         });
//       })
//   ).then(() => {
//     setReady(true);
//   });
