import {AnyAction} from 'redux'

type Matchable<AC extends () => AnyAction> = AC & {
    type:ReturnType<AC>['type'];
    match(action:AnyAction): action is ReturnType<AC>
}


export function withMatcher<AC extends ()=>AnyAction & {type:string}>(actionCreator: AC):Matchable<AC>


export function withMatcher<AC extends (...args:any[]) => AnyAction & {type:string}>(actionCreator: AC):Matchable<AC>

export function withMatcher(actionCreator:Function) {
    const type = actionCreator().type
    return Object.assign(actionCreator,{
        type,
        match(action:AnyAction) {
            return action.type === type
        }
    })
}

export type ActionWithPayload<T,P> = {
    type:T;
    payload:P;
}

export type ActionNoPayload<T>={
    type:T;
}


//function overload > we use the same name for a function but with different props
//func with payload
export function createAction<T extends string,P>(type:T,payload:P): ActionWithPayload<T,P>

//func without payload
export function createAction<T extends string>(type:T,payload:void): ActionNoPayload<T>

export function createAction<T extends string,P>(type:T,payload:P){
    return{type,payload}
}
