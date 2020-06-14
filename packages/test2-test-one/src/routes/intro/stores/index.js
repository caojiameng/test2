import React, { createContext, useMemo } from 'react';
import { DataSet } from 'choerodon-ui/pro';
import { demoDs } from '../../../stores/introDs';


const Store = createContext();

export default Store;

export const StoreProvider = (props) => {
  const { children } = props;
  const demoDataSet = useMemo(() => new DataSet(demoDs()), []);
  console.log('demoDataSet', demoDataSet);
  const value = {
    ...props,
    demoDataSet,
  };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};
