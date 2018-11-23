import {ActionTree, MutationTree, Store} from 'vuex';

export abstract class VuexStore {
    __actionsTree: ActionTree<any, any>;
    __mutationsTree: MutationTree<any>;

    __store: Store<any>;

    constructor() {
        this.__store = new Store<any>({
            actions: this.__actionsTree,
            mutations: this.__mutationsTree
        });
    }
}

export function State(): PropertyDecorator {
    return (target: VuexStore, propertyKey: string) => {
        Object.defineProperty(target, propertyKey, {
            get() {
                return this.__store.state[propertyKey];
            },
            set(value: any) {
                this.__store.state[propertyKey] = value;
            }
        });
    };
}

export function Action(): MethodDecorator {
    return (target: VuexStore, propertyKey: string, descriptor: any) => {
        const memberMethod = descriptor.value;

        target.__actionsTree = target.__actionsTree || {};
        target.__actionsTree[propertyKey] = function (context, payload) {
            return memberMethod(payload);
        };

        descriptor.value = function (payload: any) {
            console.log(target);
            debugger;
            console.log('dispatch', propertyKey);

            memberMethod.bind(this);
            return this.__store.dispatch(propertyKey, payload);
        };
    };
}

export function Mutation(): MethodDecorator {
    return (target: VuexStore, propertyKey: string, descriptor: any) => {
        const memberMethod = descriptor.value;

        target.__mutationsTree = target.__mutationsTree || {};
        target.__mutationsTree[propertyKey] = function (state, payload) {
            return memberMethod(payload);
        };

        descriptor.value = function (payload: any) {
            console.log(target);
            debugger;
            console.log('commit', propertyKey);

            memberMethod.bind(this);
            return this.__store.commit(propertyKey, payload);
        };
    };
}