import { Image, StyleSheet, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedIcon } from '@/components/ThemedIcon';

import { Dogs, sizeMap, energyLevelMap } from '@/constants/Dogs';

export default function HomeScreen() {
  const firstDog = Dogs[0]

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <ThemedView style={styles.contentContainer}>
          <Image source={{uri: firstDog.image}} style={styles.heroImage} />
          <ThemedView style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8}} >
            <ThemedText type="title" style={{ alignSelf: 'center'}}>{firstDog.name}</ThemedText>
            <ThemedIcon size={32} name={firstDog.gender === 'female' ? 'female-outline' : 'male-outline'} />
          </ThemedView>
          <ThemedText>Ras: {firstDog.breed}</ThemedText>
          <ThemedText>Storlek: {sizeMap[firstDog.size]}</ThemedText>
          <ThemedText>Kastrerad: {firstDog.neutered ? 'Ja' : 'Nej'}</ThemedText>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'column',
    borderRadius: 10,
    gap: 8,
    padding: 8,
  },
  container: {
    padding: 10,
  },
  heroImage: {
    alignSelf: 'center', 
    width: '100%', 
    aspectRatio: 1/1,
    borderRadius: 10,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
