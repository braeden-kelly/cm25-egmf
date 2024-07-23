import type { FC } from 'react';

export type AccountSceneProps = {};
export type AccountScene = FC<AccountSceneProps>;

export interface LoginSceneProps {
  onLoginSuccess?: () => void;
}
export type LoginScene = FC<LoginSceneProps>;
