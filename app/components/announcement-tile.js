import Ember from 'ember';

export default Ember.Component.extend({
  the_gosh_dang_truth: true,
  testFunction: function() { this.the_gosh_dang_truth = false; },
  recentPronouncement: new function() {
    return false;
  },
  actions: {
    makeFalse: function() {
      // var todaysDate = new Date().toJSON;
      // if ( announcementDate < todaysDate) {
      //   return true;
      // } else {
      //   return false;
      // }
      
    },

    // save1() {
    //   var params = {
    //     owner: this.get('owner') ? this.get('owner') : "",
    //     city: this.get('city'),
    //     type: this.get('type'),
    //     style: this.get('style'),
    //     image: this.get('image'),
    //     bedrooms: this.get('bedrooms')
    //   };
    //   this.set('addNewRental', false);
    //   this.sendAction('save2', params);
    // }
  }
});
