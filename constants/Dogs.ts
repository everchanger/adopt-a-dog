export type Dog = {
  name: string
  age: number
  description: string
  image: string
  breed: string
  gender: 'male' | 'female'
  neutered: boolean
  size: 'small' | 'medium' | 'large'
  energyLevel: 'low' | 'medium' | 'high'
  location?: { lat: number; lon: number; label: string }
  attributes?: {[key: string]: boolean}
}

export const sizeMap = Object.freeze({
  small: 'Liten',
  medium: 'Mellan',
  large: 'Stor'
});

export const energyLevelMap = Object.freeze({
  low: 'Låg',
  medium: 'Mellan',
  high: 'Hög'
});

export const Dogs: Dog[] = [{
  name: 'Thor',
  age: 4,
  description: 'Thor är en lurvig kille med mycket energi ...',
  image: 'https://images.dog.ceo/breeds/rottweiler/n02106550_8776.jpg',
  breed: 'Rottweiler',
  gender: 'male',
  neutered: true,
  energyLevel: 'medium',
  size: 'medium',
  attributes: {
    'Funkar med katt': true,
  }
}, {
  name: 'Kajsa',
  age: 2,
  description: 'Kajsa är en mindre hund och mycket trofast',
  image: 'https://images.dog.ceo/breeds/puggle/IMG_143138.jpg',
  breed: 'Puggle',
  gender: 'female',
  neutered: false,
  energyLevel: 'low',
  size: 'small',
  attributes: {
    'Funkar med andra hundar': false,
  }
}]