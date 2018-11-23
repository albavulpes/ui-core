import {ActionTree, MutationTree, Store} from 'vuex';

export abstract class VuexStore {
    __stateMap: any;
    __actionsTree: ActionTree<any, any>;
    __mutationsTree: MutationTree<any>;

    __store: Store<any>;

    constructor() {
        this.__store = new Store<any>({
            state: () => this.__stateMap,
            actions: this.__actionsTree,
            mutations: this.__mutationsTree
        });
    }
}

export function State(): PropertyDecorator {
    return (target: VuexStore, propertyKey: string) => {
        // Init state props with null (so they can be reactive)
        target.__stateMap = target.__stateMap || {};
        target.__stateMap[propertyKey] = null;

        Object.defineProperty(target, propertyKey, {
            get() {
                const state = this.__store.state;
                return state[propertyKey];
            },
            set(value: any) {
                const state = this.__store.state;
                state[propertyKey] = value;
            }
        });
    };
}

export function Action(): MethodDecorator {
    return (target: VuexStore, propertyKey: string, descriptor: any) => {
        let memberMethod = descriptor.value;

        target.__actionsTree = target.__actionsTree || {};
        target.__actionsTree[propertyKey] = function (context, payload) {
            return memberMethod(payload);
        };

        descriptor.value = function (payload: any) {
            memberMethod = memberMethod.bind(this);
            return this.__store.dispatch(propertyKey, payload);
        };
    };
}

export function Mutation(): MethodDecorator {
    return (target: VuexStore, propertyKey: string, descriptor: any) => {
        let memberMethod = descriptor.value;

        target.__mutationsTree = target.__mutationsTree || {};
        target.__mutationsTree[propertyKey] = function (state, payload) {
            return memberMethod(payload);
        };

        descriptor.value = function (payload: any) {
            memberMethod = memberMethod.bind(this);
            return this.__store.commit(propertyKey, payload);
        };
    };
}