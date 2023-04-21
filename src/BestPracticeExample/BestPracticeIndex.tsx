import MasterProvider from './Providers/MasterProvider';
import BestPracticeApp from './BestPracticeApp';

const BestPracticeIndex = () => {
  return (
    <MasterProvider>
      <BestPracticeApp />
    </MasterProvider>
  );
};

export default BestPracticeIndex;
