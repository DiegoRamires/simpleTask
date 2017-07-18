import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  date: DS.att('date'),
  created: DS.attr('string', {
    defaultValue: function(){
      return new Date();
    }
  })
});
