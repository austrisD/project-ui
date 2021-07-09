interface rootStructure {
  id: number;
  url: string;
  title: string;
  children: any;
}

export const Roots: rootStructure = {
  id: 1,
  url: '',
  title: 'home',
  children: {
    personalInfo: { id: 11, url: 'personalInfo', title: 'Personal Info' },
    register: { id: 12, url: 'register', title: 'Register' },
    gallery: { id: 13, url: 'gallery', title: 'Gallery' },
  },
};
