/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { NetInfo } from 'react-native';

const initialStatus = {
  type: null, effectiveType: null,
};

export default () => {
  const [networkStatus, setNetworkStatus] = useState(initialStatus);

  async function netInfo() {
    const connectionInfo = await NetInfo.getConnectionInfo();
    setNetworkStatus(connectionInfo);
  }

  useEffect(() => netInfo(), []);

  useEffect(() => {
    function statusChange(status) {
      setNetworkStatus(status);
    }

    NetInfo.addEventListener('connectionChange', statusChange);
    return () => {
      NetInfo.removeEventListener('connectionChange', statusChange);
    };
  }, []);

  return networkStatus;
};
