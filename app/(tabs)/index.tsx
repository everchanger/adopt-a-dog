import PocketBase from "pocketbase";
import { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Animated, PanResponder } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DogCard from "@/components/DogCard";

import type { Dog } from "@/constants/Dogs";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [dogIndex, setDogIndex] = useState(0);

  useEffect(() => {
    const pb = new PocketBase("https://adopt-a-dog.pockethost.io");
    const fetchDogs = async () => {
      const result = await pb.collection<Dog>("dogs").getList(1, 50);
      setDogs(result.items);
      setDogIndex(result.items.length - 1);
    };

    fetchDogs();
  }, []);

  const position = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: position.x, // x,y are Animated.Value,
          },
        ],
        { useNativeDriver: false },
      ),
      onPanResponderRelease: (evt, gestureState) => {
        Animated.spring(
          position, // Auto-multiplexed
          { toValue: { x: 0, y: 0 }, useNativeDriver: true }, // Back to zero
        ).start();
      },
    }),
  ).current;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {dogs.map((dog, index) => {
          const rotate = position.x.interpolate({
            inputRange: [-200, 0, 200],
            outputRange: ["-30deg", "0deg", "30deg"],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={dog.id}
              {...(index === dogIndex ? panResponder.panHandlers : {})}
              style={[
                styles.dogWrapper,
                dogIndex === index
                  ? {
                      transform: [
                        {
                          rotate,
                        },
                        ...position.getTranslateTransform(),
                      ],
                    }
                  : {},
              ]}
            >
              <DogCard dog={dog} style={{ width: "100%" }} />
            </Animated.View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    margin: 10,
  },
  dogWrapper: { position: "absolute", width: "100%", top: 0 },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
