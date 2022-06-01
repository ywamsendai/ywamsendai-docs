/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

// /* @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
//const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
//};

//module.exports = sidebars;


module.exports = {
  aboutSidebar: [
    'about/ywam', 'about/values', 'about/covenants', 'about/history', 'about/whyjapan', 'about/biblepoverty'
   ],
  staffSidebar: [
     'staff/communication', 'staff/finances', 'staff/visaRenew',
      {
        type: 'category',
        label: 'Join',
        items: ['staff/join', 'staff/onboarding', 'staff/fundraising', 'staff/visaApply']
      }
   ],
   operationsSidebar: [
      {
        type: 'category',
        label: 'Visa',
        items: ['operations/visaApply', 'operations/visaRenew']
      }
    ],
}
