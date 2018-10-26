var App = App || {}

App.ClickCounterView = (clickCounter, options) => {

    if(!clickCounter) throw Error(App.ClickCounterView.message.noClickCounter);
    if(!options.updateEl) throw new Error(App.ClickCounterView.message.noUpdateEl)

    const view ={
        updateView(){
            options.updateEl.innerHTML = clickCounter.getValue();
        },

        increaseAndUpdateView(){
            clickCounter.increase();
            this.updateView();
        }
    }


    options.triggerEl.addEventListener('click',()=>{
        view.increaseAndUpdateView();
    })

    return view;
}

App.ClickCounterView.messages = {
    noClickCounter: 'clickCount를 주입해야 합니다.',
    noUpdateEl: 'updateEl를 주입해야 합니다.'
}