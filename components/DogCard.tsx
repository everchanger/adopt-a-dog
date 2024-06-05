import { CSSProperties } from "react";
import { StyleSheet, Image } from "react-native";
import { sizeMap, energyMap, type Dog } from "@/constants/Dogs";
import { ThemedIcon } from "@/components/ThemedIcon";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function DogCard({
  dog,
  style,
}: {
  dog: Dog;
  style?: CSSProperties;
}) {
  return (
    <ThemedView style={[style, styles.container]}>
      <Image source={{ uri: dog.image }} style={styles.image} />
      <ThemedView style={styles.title}>
        <ThemedText type="title" style={{ alignSelf: "center" }}>
          {dog.name}
        </ThemedText>
        <ThemedIcon
          size={32}
          name={dog.gender === "female" ? "female-outline" : "male-outline"}
        />
      </ThemedView>
      <ThemedText>Ras: {dog.breed}</ThemedText>
      <ThemedText>Storlek: {sizeMap[dog.size]}</ThemedText>
      <ThemedText>Kastrerad: {dog.neutered ? "Ja" : "Nej"}</ThemedText>
      {dog.attributes &&
        Object.entries(dog.attributes).map(([attribute, value]) => (
          <ThemedText key={attribute}>
            {attribute}: {value ? "Ja" : "Nej"}
          </ThemedText>
        ))}
      <ThemedText>Energinivå: {energyMap[dog.energy]}</ThemedText>
      <ThemedText type="defaultSemiBold">{dog.description}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: 10,
    gap: 8,
    padding: 8,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  image: {
    alignSelf: "center",
    width: "100%",
    aspectRatio: 1 / 1,
    borderRadius: 10,
  },
});
