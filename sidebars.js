// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

@type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
*/
const sidebars = {

  aboutSidebar: [
     'about/ywam', 'about/ywamsendai', 'about/values', 'about/covenants', 'about/history', 'about/act', 'about/whyjapan', 'about/payment'
  ],
  communitySidebar: [
     'community/communication', 'community/culture', 'community/biblepoverty', 'community/friendshipwithgod', 'community/intercession',
    {
       type: 'category',
       label: 'Japanese Language',
       items: ['community/language', 'community/language2', 'community/language3']
    }
  ],
  staffSidebar: [
    'staff/staffing', 'staff/ywamsendailife', 'staff/gettingsettled', 'staff/driving', 'staff/money', 'staff/phones', 'staff/disaster', 'staff/visaRenew',
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
    'students/welcome', 'students/schedule', 'students/guidelines', 'students/assignments', 'students/churches', 'students/emergency', 'students/helpfulphrases', 'students/passfail', 'students/faq', 'students/apply', 'students/dtsfundraising'
  ]
};

export default sidebars;