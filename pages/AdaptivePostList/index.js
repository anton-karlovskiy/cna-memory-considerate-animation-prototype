
import { Suspense, Fragment, useState } from 'react';

import AnimationPostList from '../../components/AnimationPostList';
import SimplePostList from '../../components/SimplePostList';
import Nav from '../../components/Nav';
import posts from '../../data/posts';
import { useMemoryStatus } from '../../utils/hooks';

const Loading = () => <Fragment>Loading...</Fragment>;

const AdaptivePostList = () => {
  const [manualEnabled, setManualEnabled] = useState(false);
  const [isAnimationOn, setAnimationOn] = useState(true);
  const memoryStatus = useMemoryStatus();

  const enableManualAnimationHandler = flag => {
    setManualEnabled(flag);
  };

  const toggleAnimationHandler = event => {
    setAnimationOn(event.target.checked);
  };
  
  if (!memoryStatus) return <Loading />;
  const { overLoaded } = memoryStatus;

  let isAnimationPost = true;
  if (manualEnabled) {
    isAnimationPost = isAnimationOn;
  } else {
    isAnimationPost = !overLoaded;
  }

  const adaptivePost = isAnimationPost ? (
    <AnimationPostList posts={posts} />
  ) : (
    <SimplePostList posts={posts} />
  );

  return (
    <Fragment>
      <Nav 
        manualEnabled={manualEnabled}
        enableManualAnimation={enableManualAnimationHandler}
        toggleAnimation={toggleAnimationHandler}/>
      <h1 className='post-list-title'>
        {isAnimationOn ? 'Next.js & Framer Motion Page' : 'Next.js & Simple Page(No Animation)'}
      </h1>
      <Suspense fallback={<Loading />}>
        {adaptivePost}
      </Suspense>
      <style jsx>{`
        .post-list-title {
          margin: 0;
          width: 100%;
          line-height: 1.15;
          font-size: 32px;
        }
        .post-list-title,
        .description {
          text-align: center;
        }
      `}</style>
    </Fragment>
  );
};

export default AdaptivePostList;
