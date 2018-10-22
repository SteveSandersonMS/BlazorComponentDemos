window.demoJsFuncs = {

  showPrompt: function (message, someInstance) {
    callFromJS(someInstance);
    return prompt(message);
  },

  superDialog: {
    show: function (elem) {
      const dialog = mdc.dialog.MDCDialog.attachTo(elem);
      dialog.open();
    }
  }

};

async function callFromJS(someInstance) {
  // To show it's unrelated to original call
  await new Promise(resolve => setTimeout(resolve, 500));

  const result = await someInstance.invokeMethodAsync('GetCurrentTime');

  alert('.NET says current time is: ' + result);

  someInstance.dispose();
}
