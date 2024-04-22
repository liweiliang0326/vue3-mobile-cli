// export * from './userInfoService.ts';
import testService1 from './module/testService1.ts';
import testService2 from './module/testService2.ts';

export default {
    ...testService1,
    ...testService2
}