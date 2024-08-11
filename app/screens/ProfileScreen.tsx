// // import React from "react";
// // import { View, Text, Button, StyleSheet } from "react-native";
// // import { NavigationProp, useNavigation } from "@react-navigation/native";
// // import { useAuth } from "@/providers/AuthProvider";
// // import { ThemedText } from "@/components/ThemedText";
// // import { ThemedView } from "@/components/ThemedView";
// // import DocumentScan from "@/components/DocumentScan";

import { useNavigation } from "@/app/hooks/useNavigation";

// // type RootStackParamList = {
// //   Auth: undefined;
// //   Home: undefined;
// //   Profile: undefined;
// // };
// // const ProfileScreen: React.FC = () => {
// //   const navigation = useNavigation<NavigationProp<RootStackParamList>>();
// //   const { user } = useAuth();
// //   return (
// //     // <ThemedView style={styles.container}>
// //     //   <ThemedText style={styles.title}>Profile Screen</ThemedText>
// //     //   <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
// //     // </ThemedView>
// //     <DocumentScan />
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   title: {
// //     fontSize: 24,
// //     marginBottom: 16,
// //   },
// // });

// // export default ProfileScreen;

// // import { StatusBar } from "expo-status-bar";
// // import { useState, useEffect, useRef } from "react";
// // import { StyleSheet, View, Image, Text } from "react-native";
// // import Button from "@/components/Button";
// // import Select from "@/components/Select";
// // import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

// import React from "react";
// import { Image } from "react-native";

// const ProfileScreen = () => {
//   return (
//     // <Image
//     //   source={require("../assets/images/react-logo.png")} // Adjust the path accordingly
//     //   style={{ width: 100, height: 100 }}
//     // />
//     <></>
//   );
// };

// export default ProfileScreen;
// // const colorModes = ["Black&White", "Gray", "Color"];

// // export default function Profile() {
// //   const path = useRef("");
// //   const [devices, setDevices] = useState(["Camera"]);
// //   const [selectedDeviceIndex, setSelectedDeviceIndex] = useState(0);
// //   const [selectedColorMode, setSelectedColorMode] = useState("Color");
// //   const [image, setImage] = useState(PlaceholderImage);

// //   const renderBody = () => {
// //     return (
// //       <View style={styles.home}>
// //         <View style={styles.imageContainer}>
// //           <Image source={image} style={styles.image} />
// //         </View>
// //         <View style={styles.footerContainer}>
// //           <View style={styles.option}>
// //             <Text style={styles.label}>Device:</Text>
// //             <Select
// //               style={styles.select}
// //               label={devices[selectedDeviceIndex]}
// //             ></Select>
// //           </View>
// //           <View style={styles.option}>
// //             <Text style={styles.label}>Color Mode:</Text>
// //             <Select style={styles.select} label={selectedColorMode}></Select>
// //           </View>
// //           <View style={styles.buttons}>
// //             <View style={styles.buttonContainer}>
// //               <Button label="Scan" onPress={() => scan()} />
// //             </View>
// //             <View style={styles.buttonContainer}>
// //               <Button
// //                 style={styles.button}
// //                 label="Share"
// //                 onPress={() => share()}
// //               />
// //             </View>
// //           </View>
// //           <View>
// //             <Button style={styles.button} label="History" />
// //           </View>
// //         </View>
// //       </View>
// //     );
// //   };

// //   return (
// //     <SafeAreaProvider>
// //       <SafeAreaView style={styles.container}>
// //         {renderBody()}
// //         <StatusBar style="auto" />
// //       </SafeAreaView>
// //     </SafeAreaProvider>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   button: {
// //     marginBottom: 5,
// //   },
// //   buttons: {
// //     flexDirection: "row",
// //   },
// //   buttonContainer: {
// //     width: "50%",
// //   },
// //   home: {
// //     flex: 1,
// //     width: "100%",
// //     backgroundColor: "#25292e",
// //     alignItems: "center",
// //   },
// //   footerContainer: {
// //     flex: 3 / 5,
// //     width: "100%",
// //   },
// //   option: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginHorizontal: 20,
// //     height: 40,
// //   },
// //   label: {
// //     flex: 3 / 7,
// //     color: "white",
// //     marginRight: 10,
// //   },
// //   select: {
// //     flex: 1,
// //   },
// //   imageContainer: {
// //     flex: 1,
// //     paddingTop: 20,
// //     alignItems: "center",
// //   },
// //   image: {
// //     width: 320,
// //     height: "95%",
// //     borderRadius: 18,
// //     resizeMode: "contain",
// //   },
// // });

const UploadScreen = () => {
  const navigation = useNavigation();

  return <></>;
};

export default UploadScreen;
