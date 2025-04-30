import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider, Drawer, Divider, Snackbar } from 'react-native-paper'; // Thêm Snackbar
import HomeScreen from './components/BT4/HomeScreen';
import DetailsScreen from './components/BT4/DetailsScreen';

// Đổi tên Drawer thành AppDrawer để tránh xung đột
const AppDrawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Drawer tùy chỉnh
const CustomDrawerBar = ({ navigation }) => {
  const [active, setActive] = React.useState("Home");
  const [snackbarVisible, setSnackbarVisible] = React.useState(false); // Trạng thái cho Snackbar

  const handleLogout = () => {
    setSnackbarVisible(true); // Hiển thị Snackbar
    // Chuyển hướng sau 2 giây
    setTimeout(() => {
      navigation.navigate("HomeStack");
      setSnackbarVisible(false); // Ẩn Snackbar sau khi chuyển hướng
    }, 2000);
  };

  return (
    <>
      <Drawer.Section title="Admin">
        <Drawer.Item
          label="Home"
          icon="home"
          active={active === "Home"}
          onPress={() => {
            navigation.navigate("HomeStack");
            setActive("Home");
          }}
        />
        <Drawer.Item
          label="Profile"
          icon="account"
          active={active === "Profile"}
          onPress={() => {
            navigation.navigate("Profile");
            setActive("Profile");
          }}
        />
        <Divider />
        <Drawer.Item
          label="Logout"
          icon="logout"
          onPress={handleLogout} // Gọi hàm handleLogout
        />
      </Drawer.Section>

      {/* Snackbar để hiển thị thông báo */}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={2000}
      >
        Đăng xuất thành công!
      </Snackbar>
    </>
  );
};

// Stack cho Home và Details
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: true, title: "Home" }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Details" }}
      />
    </Stack.Navigator>
  );
};

// Ứng dụng chính
const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppDrawer.Navigator
          initialRouteName="HomeStack"
          drawerContent={(props) => <CustomDrawerBar {...props} />}
        >
          <AppDrawer.Screen
            name="HomeStack"
            component={HomeStackNavigator}
            options={{ drawerLabel: "Home" }}
          />
          <AppDrawer.Screen
            name="Profile"
            component={HomeScreen} 
            options={{ drawerLabel: "Profile" }}
          />
        </AppDrawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;