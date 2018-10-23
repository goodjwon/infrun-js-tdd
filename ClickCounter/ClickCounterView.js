var App = App ||{}

App.ClickCounter = (clickCounter, updateEl) => {
    return {
        updateView(){
            updateEl.innerHTML = clickCounter.getValue();
        }
    }
}