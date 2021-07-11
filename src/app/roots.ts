interface linkStructure {
  id: number;
  url: string;
  title: string;
  children: any;
}

// export const Roots: rootStructure = {
//   id: 1,
//   url: '',
//   title: 'home',
//   children: [
//     { id: 11, url: 'personalInfo', title: 'Personal Info' },
//     { id: 12, url: 'register', title: 'Register' },
//     { id: 13, url: 'gallery', title: 'Gallery' },
//     { id: 14, url: 'favorite-games', title: 'favorite games' },
//   ],
// };

export const Roots = [
  { id: 11, url: 'personalInfo', title: 'Personal Info' },
  { id: 12, url: 'register', title: 'Register' },
  { id: 13, url: 'gallery', title: 'Gallery' },
  { id: 14, url: 'favorite-games', title: 'favorite games' },
];
