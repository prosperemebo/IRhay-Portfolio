import { useCallback, useEffect, useState } from 'react';

export default function useReadyImages() {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  const loader = useCallback(() => {
    const img = document.images;
    let c = 0;
    let noOfImages = img.length;

    if (noOfImages === 0) return doneLoading();

    function imgLoaded() {
      c += 1;
      let perc = ((100 / noOfImages) * c) << 0;

      setProgress(perc);

      if (c === noOfImages) return doneLoading();
    }

    function doneLoading() {
      setReady(true);
    }

    for (var i = 0; i < noOfImages; i++) {
      var tImg = new Image();
      tImg.onload = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src = img[i].src;
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
