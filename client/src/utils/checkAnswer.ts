export type Category = 'AI'| 'SOFTWARE';

import sha512 from 'crypto-js/sha512';

const answers: Record<Category, Record<number, string[]>> = {
  AI: {
    1: [
      '2505b9aae3fa812d2ce24c494e7ba18089a5bed914b989a5e24089b4c4e3b52e842e2ff11d2c723b62f6a2f7ac6d808484fdcbf3e4447753846804aff4f7e8dc',
      '4ffcaca938ae516cf899e252c603ced29f1ae89ab9ee3558baabde4faec14565ed8a962ba9081b1628407abcdc9f2bc4efa90d2f21bc1f8922840f5690838c40',
    ],
    2: [
      '4ecb27853b801200be506d73703275e0fdbf6994bf4c8be1415bff91a37ec32035a7b7379786961a6f8b1f3558eab3ba288763062d74bfa796ebbcb4d7fb625d',
    ],
    3: [
      'b914878e74e748897e3514d5af1cbb428ab6624ed7fceb0af065c99e0f8e27ebc06b283cc2b81ae94312b86551928b427f9f47927978e9e4710ad9473345c4b7',
    ],
    4: [
      '08ecca8bcd398b29e81c653040e7c3787f4ea1f3f4ac9086ef84a63b67b104a569b1d61a035171d2933b7751fd85761e31a4d0d3146bf68a1619644d3a78e5ba',
    ],
    5: [
      '2541ce588c3d3f94ab9be2d54dec457dcd37065a525bb2c80d1512c4e1e639a2b03fbcb7148fb564d30eae5e415f566a9a2b7710463b962197ce4dc98f52bf31',
    ],
  },
  SOFTWARE: {
    1: ['140361d0656588c9023bd4468f6671fd8835968becaaad0abf13201ab1bda01ef8c6126440aa184974c277065ebab70c3a5c26b367fed8e930f5e903843313dd'],
    2: [
      'fc4314ceda57d7671155f54ed274c7741a4cf567bd3ff0eab74a97f5a28a302e2ff3745d471f3b08623436da12a0d8c033a4d5dd40f784f6a4c5266398b14382',
      '822aabec0fb03dbf68fa3fd431d64c434bd1eb9eb127e2a13373d18df062cf210105fb9fa68e3f7899d36dd6a9ed9ae2c83414389e7a2924ec77d5ea219be4ee',
    ],
    3: [],
    4: []
  }
};

const checkAnswer = async (category: Category, questionId: number, answer: string): Promise<boolean> =>
  answers[category][questionId].includes(sha512(answer).toString());

export default checkAnswer;
