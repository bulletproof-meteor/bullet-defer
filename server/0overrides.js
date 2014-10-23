// Now we are faking email sending a bit
// Here we are manually adding 1200ms wait time to mimic 
// Actual time spent on sending emails

var orig = AppConfig.configurePackage;
AppConfig.configurePackage = function(type) {
  if(type == 'email') {
    Meteor._sleepForMs(2300);
  }
  return orig.apply(this, arguments);
};