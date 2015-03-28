Polymer('left-drawer', {
  created: function() {
    this.links = [{
      name: 'All',
      hash: '#/all'
    }, {
      name: 'Favorites',
      hash: '#/favorites'
    }, {
      name: 'Archived',
      hash: '#/archived'
    }];
  },

  closeDrawer: function() {
    this.parentNode.closeDrawer();
  },

  navigate: function(event, detail, sender) {
    var hash = event.target.templateInstance.model.link.hash;

    window.location.hash = hash;
  }
});