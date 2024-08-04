import 'react-native-gesture-handler/jestSetup';



jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const mockedNavigate = jest.fn()
const mockedGoBack = jest.fn()
const mockedPopToTop = jest.fn()
const mockedPush = jest.fn()

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native')
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      goBack: mockedGoBack,
      popToTop: mockedPopToTop,
      push: mockedPush,
    }),
  }
})