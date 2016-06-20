
// to control binding scope on child elements
ko.bindingHandlers.stopBinding = {
    init: function() {
        return { controlsDescendantBindings: true };
    }
};
ko.virtualElements.allowedBindings.stopBinding = true;


var Warden = function() {
  var self = this;

  self.firstName = ko.observable();
  self.lastName = ko.observable();
  self.dashboard = ko.observableArray([]);

  self.foo = {
    "fa": ko.observable("1"),
    "fi": "2"
  }

  self.updateDashboard = function(a){
    self.dashboard(a);
  }

  self.fullName = ko.computed(function() {
    return self.firstName() + ' ' + self.lastName();
  }, this);

  $.ajax({
    url: "js/user.json",
    success: function(data) {
      console.log(data);

      self.firstName(data.firstName);
      self.lastName(data.lastName);
      self.dashboard(data.dashboard);
    }
  })
};

var warden = new Warden();

// use #!/ instead of the default #
pager.Href.hash = '#!/';
// extend your view-model with pager.js specific data
pager.extendWithPage(warden);
// apply the view-model using KnockoutJS as normal
ko.applyBindings(warden);
// start pager.js
pager.start();


// // use HTML5 history
// pager.useHTML5history = true;
// // use History instead of history
// pager.Href5.history = History;
// // extend your view-model with pager.js specific data
// pager.extendWithPage(warden);
// // apply the view-model using KnockoutJS as normal
// ko.applyBindings(warden);
// // start pager.js
// pager.startHistoryJs();
