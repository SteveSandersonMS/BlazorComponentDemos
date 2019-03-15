window.BlazorMaterial = {
  button: {
    init: function (elem) {
      mdc.ripple.MDCRipple.attachTo(elem);
    }
  },

  drawer: {
    toggle: function (elem, isOpen) {
      const drawer = mdc.drawer.MDCDrawer.attachTo(elem);
      drawer.open = isOpen;
    }
  },

  topAppBar: {
    init: function (elem, scrollTarget) {
      const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(elem);
      if (scrollTarget) {
        topAppBar.setScrollTarget(document.querySelector(scrollTarget));
      }
    }
  },

  dialog: {
    show: function (elem) {
      const dialog = mdc.dialog.MDCDialog.attachTo(elem);
      dialog.open();
    }
  },

  select: {
    init: function (elem) {
      mdc.select.MDCSelect.attachTo(elem);
    }
  },
  
  textField: {
    init: function (elem) {
      mdc.textField.MDCTextField.attachTo(elem);
    }
  },

  switch: {
    setChecked: function (elem, isChecked) {
      const switchControl = mdc.switchControl.MDCSwitch.attachTo(elem);
      switchControl.checked = isChecked;
    }
  }
};
