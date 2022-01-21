import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

export const useDetectDevice = () => {
  const [isDeviceMobile, setIsDeviceMobile] = useState<boolean>(false);

  useEffect(() => {
    if (isMobile) {
      setIsDeviceMobile(true);
    } else {
      setIsDeviceMobile(false);
    }
  }, []);

  return { isDeviceMobile };
};
