import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'car',
  exposes: {
    './Routes': 'apps/car/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
