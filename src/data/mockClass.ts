export interface Member {
  name: string
  isNew: boolean
  notes?: string
}

export interface Floor {
  name: string
  rooms: string[]
}

export interface MockClass {
  gymName: string
  className: string
  time: string
  coach: string
  members: Member[]
  layout: {
    floor1: Floor
    floor2: Floor
  }
  equipmentRules: {
    gi: string
    noGi: string
  }
}

export const mockClass: MockClass = {
  gymName: 'Northside Martial Arts',
  className: 'BJJ Fundamentals',
  time: '6:00 PM',
  coach: 'Alex Martin',
  members: [
    { name: 'Jordan Lee', isNew: true, notes: 'first class' },
    { name: 'Sam Rivera', isNew: true, notes: 'trial' },
    { name: 'Chris Park', isNew: false },
    { name: 'Morgan Blake', isNew: false },
    { name: 'Taylor Kim', isNew: false },
  ],
  layout: {
    floor1: {
      name: 'Floor 1 — Main Entrance',
      rooms: ['Front desk & check-in', 'Changing rooms', 'Mat area (Fundamentals)'],
    },
    floor2: {
      name: 'Floor 2 — Upper Level',
      rooms: ['Advanced mat area', 'Strength & conditioning', 'Coach office'],
    },
  },
  equipmentRules: {
    gi: 'Wear a clean gi with a white belt (or your current rank). No shoes on the mat.',
    noGi: 'Wear a rash guard and grappling shorts. No zippers, pockets, or jewelry.',
  },
}
