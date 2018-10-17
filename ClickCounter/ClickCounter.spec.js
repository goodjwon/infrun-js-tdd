describe('App.ClickCounter', ()=>{

    let counter;

    //준비
    beforeEach(()=>{
        counter = App.ClickCounter();
    })

    describe('getValue', ()=>{
        it('초기값이 0인 카운터 값을 반환한다.',()=>{
            //todo
            expect(counter.getValue()).toBe(0)
        });
    });

    describe('increase()', ()=> {
        it('카운터 1을 올린다.', ()=>{
            //준비 => beforEach로 이


            //실행
            const initValue = counter.getValue();
            counter.increase();


            //단언
            expect(counter.getValue()).toBe(initValue+1);

        })
    })
});


