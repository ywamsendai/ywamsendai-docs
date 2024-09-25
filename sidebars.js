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
     'about/ywam', 'about/ywamsendai', 'about/values', 'about/covenants', 'about/history', 'about/act', 'about/whyjapan', 'about/payment'
  ],
  communitySidebar: [
     'community/communication', 'community/disaster', 'community/culture', 'community/biblepoverty', 'community/friendshipwithgod', 
    {
       type: 'category',
       label: 'Japanese Language',
       items: ['community/language', 'community/language2', 'community/language3']
    }, 'community/phones'
  ],
  staffSidebar: [
    'staff/staffing', 'staff/ywamsendailife', 'staff/gettingsettled', 'staff/driving', 'staff/money', 'staff/visaRenew',
    {
      type: 'category',
      label: 'Join',
      items: ['staff/join', 'staff/fundraising', 'staff/visaApply']
    },
    {
      type: 'category',
      label: 'Japanese Tax',
      items: ['staff/tax', 'staff/tax2', 'staff/tax3']
    }
  ],
  studentsSidebar: [
    'students/apply', 'students/faq', 'students/dtsfundraising', 'students/guidelines', 'students/passfail'
  ]
}
