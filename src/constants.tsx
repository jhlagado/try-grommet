export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const userSession = {
  user: {
    name: 'Alan Souza',
    thumbnail: '//s.gravatar.com/avatar/f850593bdae3cb1c8c535b4acfdfdb98?s=80',
  },
  items: [
    {
      label: 'Logout',
      href: '#',
    },
  ],
};

export const items = [
  {
    active: true,
    label: 'Formik Form',
    path: '/formik-form',
    exact: true,
  },
  {
    active: true,
    label: 'Recoil Todos',
    path: '/recoil-todos',
    exact: true,
  },
  {
    active: true,
    label: 'Simple Form',
    path: '/simple-form',
    exact: true,
  },
  {
    active: true,
    label: 'Top Ten',
    path: '/top-ten',
  },
  {
    active: true,
    label: 'First ten',
    path: '/first-ten',
  },
  {
    active: false,
    label: 'Info',
    path: '/info',
  },
];
