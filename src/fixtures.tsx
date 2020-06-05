import { StoryItem, CommentItem } from './types';

export const storyIds = [10, 20, 30];

export const oneStoryItem: StoryItem = {
  by: 'elsewhen',
  descendants: 164,
  id: 10,
  kids: [1, 2, 3, 4],
  score: 262,
  time: 1590008498,
  title: 'What Is Nix?',
  type: 'story',
  url: 'https://engineering.shopify.com/blogs/engineering/what-is-nix',
};

// bad data
export const badStoryItem: StoryItem = {} as StoryItem;

export const oneCommentItem: CommentItem = {
  by: 'sitkack',
  id: 23252797,
  parent: 23246170,
  text:
    'I can&#x27;t believe of the 363 comments no one has mentioned Samy K and his awesome Poisontap project. Parts of which did this local scanning and connecting to your internal router management page.<p><a href="https:&#x2F;&#x2F;github.com&#x2F;samyk&#x2F;poisontap" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;samyk&#x2F;poisontap</a><p>See also, <a href="https:&#x2F;&#x2F;www.theregister.co.uk&#x2F;2010&#x2F;01&#x2F;05&#x2F;geo_location_stealing_hack&#x2F;" rel="nofollow">https:&#x2F;&#x2F;www.theregister.co.uk&#x2F;2010&#x2F;01&#x2F;05&#x2F;geo_location_steali...</a>',
  time: 1590014112,
  type: 'comment',
};
