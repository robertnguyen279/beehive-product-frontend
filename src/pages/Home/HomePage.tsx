import React from 'react';
import HeaderHome from './Header';
import LoginContainer from './LoginContainer';
import HomeSlider from './Slider';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'reducers';
import { toggleMenuSldier } from 'actions/ui';
import Footer from './Footer';
import BackgroundImg from 'assets/imgs/login-background.jpg';
import { useHistory } from 'react-router-dom';
import { getUser } from 'actions/users';
import LoadingScreen from 'components/LoadingScreen';

function HomePage(): React.ReactElement {
  const openMenuSlider = useSelector((state: RootState) => state.ui.openMenuSlider);
  const user = useSelector((state: RootState) => state.users.user);
  const getUserError = useSelector((state: RootState) => state.users.getUserError);
  const dispatch = useDispatch();
  const history = useHistory();

  if (user) {
    history.push('/activities');
  }

  const handleToggleMenuSlider = (): void => {
    dispatch(toggleMenuSldier());
  };

  React.useEffect(() => {
    if (getUserError === undefined) {
      dispatch(getUser());
    }
  }, []);

  if (!getUserError) {
    return <LoadingScreen />;
  }

  return (
    <div
      className={`home__container${openMenuSlider ? '--slider-active' : ''} h-screen min-w-full relative`}
      style={{ background: `url('${BackgroundImg}')` }}
    >
      <HeaderHome />
      <LoginContainer />
      <HomeSlider />
      <Footer />
      <div className="home__layer absolute w-full h-20 md:h-full inset-0"></div>
      {openMenuSlider && (
        <div
          className="home__layer-2 absolute w-full h-full inset-0 z-20 cursor-pointer"
          onClick={handleToggleMenuSlider}
        ></div>
      )}
    </div>
  );
}

export default HomePage;
