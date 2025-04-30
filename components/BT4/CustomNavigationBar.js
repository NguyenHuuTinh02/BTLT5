import React from 'react';
import { Appbar, Menu, Snackbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';

const CustomNavigationBar = ({
  navigation,
  route,
  options,
  back,
}) => {
  const [visible, setVisible] = React.useState(false); // Menu
  const [logoutVisible, setLogoutVisible] = React.useState(false); // Snackbar

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const title = getHeaderTitle(options, route.name);

  const handleLogout = () => {
    closeMenu(); // Đóng menu
    setLogoutVisible(true); // Hiện snackbar

    // Chuyển hướng sau 1 giây (hoặc gọi API đăng xuất)
    setTimeout(() => {
      navigation.navigate('Home'); // Hoặc Login, tùy bạn
    }, 1000);
  };

  return (
    <>
      <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title={title} />
        {!back ? (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action icon="dots-vertical" onPress={openMenu} />
            }>
            <Menu.Item
              onPress={() => {
                navigation.navigate("Home");
              }}
              title="Home"
            />
            <Menu.Item
              onPress={() => {
                navigation.navigate("Details");
              }}
              title="Detail"
            />
            <Menu.Item
              onPress={handleLogout}
              title="Logout"
            />
          </Menu>
        ) : null}
      </Appbar.Header>

      {/* Snackbar */}
      <Snackbar
        visible={logoutVisible}
        onDismiss={() => setLogoutVisible(false)}
        duration={2000}
      >
        Đăng xuất thành công!
      </Snackbar>
    </>
  );
};

export default CustomNavigationBar;