import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeStackNavigation"
            tabBarOptions={{
                keyboardHidesTabBar: true,
                activeTintColor: '#7E5FF9',
                inactiveTintColor: '#DCDBE6',
                showIcon: true,
                style: {
                    backgroundColor: "#fff",
                    elevation: 0,
                    borderTopWidth: 0,
                    // marginBottom: 0
                }
            }}
        >
            {/*<Tab.Screen*/}
            {/*    name="UserMyStackNavigation"*/}
            {/*    component={UserMyStackNavigation}*/}
            {/*    options={{*/}
            {/*        tabBarLabel: 'My',*/}
            {/*        tabBarIcon: ({ focused }) => {*/}
            {/*            return focused === true ?*/}
            {/*                <IconMy /> : <OnIconMy />*/}
            {/*        }*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Tab.Screen*/}
            {/*    name="FriendStackNavigation"*/}
            {/*    component={FriendStackNavigation}*/}
            {/*    options={{*/}
            {/*        tabBarLabel: '친구',*/}
            {/*        tabBarIcon: ({ focused }) => {*/}
            {/*            return focused === true ?*/}
            {/*                <IconFriend /> : <OnIconFriend />*/}
            {/*        }*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Tab.Screen*/}
            {/*    name="HomeStackNavigation"*/}
            {/*    component={HomeStackNavigation}*/}
            {/*    options={{*/}
            {/*        tabBarLabel: '홈',*/}
            {/*        tabBarIcon: ({ focused }) => {*/}
            {/*            return focused === true ?*/}
            {/*                <IconHome /> : <OnIconHome />*/}
            {/*        }*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Tab.Screen*/}
            {/*    name="UserPaymentStackNavigation"*/}
            {/*    component={UserPaymentStackNavigation}*/}
            {/*    options={{*/}
            {/*        tabBarLabel: '결제',*/}
            {/*        tabBarIcon: ({ focused }) => {*/}
            {/*            return focused === true ?*/}
            {/*                <IconPayment /> : <OnIconPayment />*/}
            {/*        }*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Tab.Screen*/}
            {/*    name="LikeStackNavigation"*/}
            {/*    component={LikeStackNavigation}*/}
            {/*    options={{*/}
            {/*        tabBarLabel: '좋아요',*/}
            {/*        tabBarIcon: ({ focused}) => {*/}
            {/*            return focused === true ?*/}
            {/*                <IconLike /> : <OnIconLike />*/}
            {/*        },*/}
            {/*        unmountOnBlur: true,*/}
            {/*    }}*/}
            {/*/>*/}

        </Tab.Navigator>
    )
}
export default TabNavigation
