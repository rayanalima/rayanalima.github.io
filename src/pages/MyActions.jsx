import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import MyActions from '../molecules/Actions/MyActions';
import DepositDraftButton from '../molecules/DepositDraftButton';

function MyAction() {
  return (
    <>
    <Navbar />
    <MyActions />
    <DepositDraftButton />
    <Footer />
    </>
  );
}

export default MyAction;
