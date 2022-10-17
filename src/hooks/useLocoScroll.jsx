import { useEffect } from 'react';

export default function useLocoScroll(ref) {
  useEffect(() => {
    let scroll;
    // @ts-ignore
    import('locomotive-scroll').then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: ref.current,
        smooth: true,
        // smoothMobile: true,
        // resetNativeScroll: true,
        // lerp: 0.12,
      });
    });
    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, [ref]);
}
