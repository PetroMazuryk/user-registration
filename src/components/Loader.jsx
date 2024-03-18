import { Vortex } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <Vortex
        visible={true}
        height="160"
        width="160"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
};
