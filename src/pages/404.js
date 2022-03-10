import React, { useEffect, useRef } from 'react';

import Layout from '../layout';
import Seo from '../components/seo';

import { Link } from 'gatsby';
import '../styles/404/404.scss';

function NotFoundPage() {
  const ref = useRef(0);

  const mouseMove = (e) => {
    ref.current.style.backgroundPositionX = `${-e.clientX / 5}px`;
    ref.current.style.backgroundPositionY = `${-e.clientY / 5}px`;
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <Layout>
      <Seo title="404: Not found" />
      <div className="bg" ref={ref}>
        <h1>404</h1>
        <h3>Page Not Found ...</h3>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
