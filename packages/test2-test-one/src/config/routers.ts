import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  // Insert New Router
  {
    path: '/test2-test-one/hello',
    component: () => import('../routes/hello/HelloTestOnePage'),
    authorized: true,
    title: 'Hello Test2TestOne',
  },
  {
    path: '/test2-test-one/intro',
    component: () => import('../routes/intro/IntroPage'),
    authorized: true,
    title: 'Hello Test2TestOne1',
  },
];

export default config;
