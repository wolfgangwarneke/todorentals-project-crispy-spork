import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var modelObject = {};
    modelObject["rentals"] = this.store.findAll('rental');
    modelObject["announcements"] = this.store.findAll('announcement');
    return modelObject;
  },

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
