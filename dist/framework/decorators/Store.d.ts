import { ActionTree, MutationTree, Store } from 'vuex';
export declare abstract class VuexStore {
    __stateMap: any;
    __actionsTree: ActionTree<any, any>;
    __mutationsTree: MutationTree<any>;
    __store: Store<any>;
    constructor();
}
export declare function State(): PropertyDecorator;
export declare function Action(): MethodDecorator;
export declare function Mutation(): MethodDecorator;
//# sourceMappingURL=Store.d.ts.map