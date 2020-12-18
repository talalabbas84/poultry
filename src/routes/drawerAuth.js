import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/home';
import Rates from '../screens/rates';
import Available from '../screens/availableList';
import CreatePost from '../screens/createPosts';
import SideDrawer from '../screens/drawer';
import Favourites from '../screens/favourites';
import allAds from '../screens/allAds';
import ViewImages from '../screens/viewImages';
import AvailableAdd from '../screens/availableAdd';
import AvailableForChicks from '../screens/availableForChicks';
import EggsMenu from '../screens/eggsMenu';
import ChickMenu from '../screens/chickMenu';
import RateMenu from '../screens/rateMenu';
import Mazeed from '../screens/mazeed';
import ChickenForRates from '../screens/chickMenu/forRates';
import eggsMenuForRate from '../screens/eggsMenu/eggsMenuForRate';
import ChicksForBroiler from '../screens/chickMenu/chicksForBroiler';
import GoldenMisriAdd from '../screens/golderMisriCreateAdd';
import GolderMisiShowAdd from '../screens/golderMisriAddShow';
import EggsLayerAdd from '../screens/eggsMenu/eggsLayer/addshow';
import CreateAddForEggLayer from '../screens/eggsMenu/eggsLayer/createAddForEggLayer';
import showAddForEggsGolderMisri from '../screens/eggsMenu/eggsGolderMisri/showAdd';
import CreateAddForEgssGolderMisri from '../screens/eggsMenu/eggsGolderMisri/createAddForGoldenMisriAdd';
import AddForFarm from '../screens/mazeed/farmMenu/add';
import createAddForFarm from '../screens/mazeed/farmMenu/createAdd';
import AddForLabour from '../screens/mazeed/labourMenu/add';
import createAddForLabour from '../screens/mazeed/labourMenu/createAdd';
import CreateAddForBroiler from '../screens/chickMenu/broiler/createAddForBroiler';
import newRateScreen from '../screens/newRates';
import Cities from '../screens/citites';
import GraphScreen from '../screens/mazeed/graphScreen';
import BroilerCat from '../screens/allAds/BroilerCat';
import GoldenCat from '../screens/allAds/GoldenMisriCat';
import MurghiCar from '../screens/allAds/MurghiBachaCat';
import AndaCat from '../screens/allAds/AndaCat';
import ShedCat from '../screens/allAds/ShedCat';
import EggRates from '../screens/rateMenu/eggRate';
import HowTouser from '../screens/howtoUse';

import createAdForOneDayOldChick from '../screens/eggsMenu/oneDayOldChick/createAdForOneDayOldChick';

import editAdBroiler from '../screens/editAdBroiler';
import editAdEgg from '../screens/editAdEgg';
import editAdOneDatOldChick from '../screens/editAdOneDayOldChick';

import EditAdGoldenMisri from '../screens/editAdGoldenMisri';

import myAds from '../screens/myAds';
import myAdsGoldenMisri from '../screens/myAdsGoldenMishri/';
import myAdEgg from '../screens/myAdsEgg';
import myAdsOneDayOldChick from '../screens/myAdsOneDayOldChick';
const Stack = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="allAds"
      drawerContent={(props) => <SideDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EditAd" component={editAdBroiler} />
      <Stack.Screen name="EditAdEgg" component={editAdEgg} />
      <Stack.Screen name="EditAdGoldenMisri" component={EditAdGoldenMisri} />
      <Stack.Screen
        name="EditAdOneDayOldChick"
        component={editAdOneDatOldChick}
      />

      <Stack.Screen name="myAdsGoldenMisri" component={myAdsGoldenMisri} />
      <Stack.Screen name="myAdEgg" component={myAdEgg} />
      <Stack.Screen name="myAds" component={myAds} />
      <Stack.Screen
        name="myAdsOneDayOldChick"
        component={myAdsOneDayOldChick}
      />

      <Stack.Screen name="Rates" component={Rates} />
      <Stack.Screen name="Available" component={Available} />

      <Stack.Screen name="CreatePost" component={CreatePost} />

      <Stack.Screen name="Favourites" component={Favourites} />
      <Stack.Screen name="allAds" component={allAds} />
      <Stack.Screen name="ViewImages" component={ViewImages} />
      <Stack.Screen name="AvailableAdd" component={AvailableAdd} />
      <Stack.Screen name="AvailableForChicks" component={AvailableForChicks} />
      <Stack.Screen name="EggsMenu" component={EggsMenu} />
      <Stack.Screen name="ChickMenu" component={ChickMenu} />
      <Stack.Screen name="RateMenu" component={RateMenu} />

      <Stack.Screen name="Mazeed" component={Mazeed} />

      <Stack.Screen name="ChickenForRates" component={ChickenForRates} />

      <Stack.Screen name="eggsMenuForRate" component={eggsMenuForRate} />

      <Stack.Screen name="ChicksForBroiler" component={ChicksForBroiler} />
      <Stack.Screen name="GoldenMisriAdd" component={GoldenMisriAdd} />
      <Stack.Screen name="GolderMisiShowAdd" component={GolderMisiShowAdd} />
      <Stack.Screen name="EggsLayerAdd" component={EggsLayerAdd} />
      <Stack.Screen
        name="CreateAddForEggLayer"
        component={CreateAddForEggLayer}
      />
      <Stack.Screen
        name="showAddForEggsGolderMisri"
        component={showAddForEggsGolderMisri}
      />

      <Stack.Screen
        name="CreateAddForEgssGolderMisri"
        component={CreateAddForEgssGolderMisri}
      />
      <Stack.Screen name="AddForFarm" component={AddForFarm} />
      <Stack.Screen name="createAddForFarm" component={createAddForFarm} />

      <Stack.Screen name="AddForLabour" component={AddForLabour} />

      <Stack.Screen name="createAddForLabour" component={createAddForLabour} />
      <Stack.Screen
        name="CreateAddForBroiler"
        component={CreateAddForBroiler}
      />

      <Stack.Screen name="newRateScreen" component={newRateScreen} />
      <Stack.Screen name="Cities" component={Cities} />
      <Stack.Screen name="GraphScreen" component={GraphScreen} />
      <Stack.Screen name="BroilerCat" component={BroilerCat} />
      <Stack.Screen name="GoldenCat" component={GoldenCat} />
      <Stack.Screen name="MurghiCar" component={MurghiCar} />
      <Stack.Screen name="AndaCat" component={AndaCat} />
      <Stack.Screen name="ShedCat" component={ShedCat} />
      <Stack.Screen name="EggRates" component={EggRates} />
      <Stack.Screen name="HowTouser" component={HowTouser} />
      <Stack.Screen
        name="createAdForOneDayOldChick"
        component={createAdForOneDayOldChick}
      />
    </Stack.Navigator>
  );
};

export default DrawerStack;
