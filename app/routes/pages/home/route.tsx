import type { MetaFunction } from 'react-router';

import Hero from './components/hero';

export const meta: MetaFunction = () => {
  return [
    { title: '토스 - 금융의 모든 것' },
    { name: 'description', content: '금융의 모든 것을 토스에서 쉽고 간편하게!' },
  ];
};

export default function Home() {
  return <Hero />;
}
