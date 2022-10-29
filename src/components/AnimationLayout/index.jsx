import { Outlet } from 'react-router-dom';
import classes from './styles.module.scss';
import gsap from 'gsap';
import { useCallback, useContext, useEffect } from 'react';
import AppContext from '../../store/app-context';
// import ReactRouterPause from '@allpro/react-router-pause';

// polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)
// polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)

const AnimationLayout = () => {
  const appCtx = useContext(AppContext);

  const enterAnimation = useCallback(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      `.${classes.overlay}`,
      {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      },
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1.2,
        ease: 'expo.inOut',
      }
    );
  }, []);

  const leaveAnimation = useCallback(() => {
    const tl = gsap.timeline();

    tl.to(`.${classes.overlay}`, {
      clipPath: 'polygon(100% 0,100% 0,100% 100%,100% 100%)',
      duration: 1.2,
      ease: 'expo.inOut',
    });
  }, []);

  const animation = useCallback(
    (type) => {
      if (type === 'LEAVE') {
        enterAnimation();
      } else {
        leaveAnimation();
      }
    },
    [enterAnimation, leaveAnimation]
  );

  useEffect(() => {
    animation(appCtx.pageStatus);
  }, [animation, appCtx.pageStatus]);

  return (
    <>
      <Outlet />
      <div className={classes.overlay}>
        <div className={classes.content}>
          <h1 className='heading-primary'>
            <span>I</span>
            <span>R</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default AnimationLayout;
