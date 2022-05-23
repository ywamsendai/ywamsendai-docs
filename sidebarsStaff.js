module.exports = {
  staff: [
     'join','onboarding','finances','fundraising',
      {
        type: 'category',
        label: 'Visa',
        link: {type: 'doc', id: 'visa'},
        items: ['visaApply', 'visaRenew']
      },'communication'
   ],
}
