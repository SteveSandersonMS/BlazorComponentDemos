window.demoJsFuncs = {

  showPrompt: function (message, callbackInstance) {
    callFromJS(callbackInstance);    
    return prompt(message);
  },

  superDialog: {
    show: function (elem) {
      const dialog = mdc.dialog.MDCDialog.attachTo(elem);
      dialog.open();
    }
  }

};

async function callFromJS() {
  // To show it's unrelated to original call
  await new Promise(resolve => setTimeout(resolve, 500));

  const result = await DotNet.invokeMethodAsync(
    'BlazorOffsiteDemos.App', 'GetCurrentTime');

  alert('.NET says current time is: ' + result);
}
