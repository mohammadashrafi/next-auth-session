"use client"

import { useCallback, useEffect, useState } from "react";
import { hasStorageAccess, requestStorageAccess, requiresStoragePermissions } from "../components/requestStorage/requestThree";

export const useStoragePermissions = ()=> {
    const [needPermission, setNeedPermission] = useState(
      requiresStoragePermissions() ? true : false
    );
    const [haveCheckedPermission, setHaveCheckedPermission] =
      useState(false);
 
    const isHavingPermissionFn = useCallback(async () => {
      try {
        return await hasStorageAccess();
      } catch (e) {
        // Handle error gracefully and show user some message
        return false;
      }
    }, []);
 
    const checkPermission = useCallback(() => {
      isHavingPermissionFn().then((isHavingPerm) => {
        setNeedPermission(!isHavingPerm);
        setHaveCheckedPermission(true);
      });
    }, [isHavingPermissionFn]);
 
    const askForPermission = useCallback(async () => {
      try {
        await requestStorageAccess();
        checkPermission();
      } catch (e) {
        // Handle error gracefully and show user some message
      }
    }, [checkPermission]);
 
    useEffect(() => {
      if (requiresStoragePermissions()) {
        checkPermission();
      }
    }, [checkPermission]);
 
    return {
      needPermission,
      askForPermission: requiresStoragePermissions()
        ? askForPermission
        : () => {},
      haveCheckedPermission
    };
  };
 