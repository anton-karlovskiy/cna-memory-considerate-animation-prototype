
import AdaptivePostList from '../pages/AdaptivePostList';
import Layout from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <div className='container'>
        <AdaptivePostList />
      </div>
    </Layout>
  );
};

export default Home;
