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
            return new Promise(resolve => {
                fixDialogActions(elem);
                const dialog = mdc.dialog.MDCDialog.attachTo(elem);
                const callback = event => {
                    dialog.unlisten('MDCDialog:closing', callback);
                    resolve(event.detail.action);
                };
                dialog.listen('MDCDialog:closing', callback);
                dialog.open();
            });
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

function fixDialogActions(elem) {
    const tempAttributeName = 'temp-data-mdc-dialog-action';
    const buttons = elem.querySelectorAll('[' + tempAttributeName + ']');
    buttons.forEach(button => {
        const dialogAction = button.getAttribute(tempAttributeName);
        button.removeAttribute(tempAttributeName);
        button.setAttribute('data-mdc-dialog-action', dialogAction);
    });
}