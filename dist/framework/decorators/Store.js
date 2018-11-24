import { Store } from 'vuex';
var VuexStore = (function () {
    function VuexStore() {
        var _this = this;
        this.__store = new Store({
            state: function () { return _this.__stateMap; },
            actions: this.__actionsTree,
            mutations: this.__mutationsTree
        });
    }
    return VuexStore;
}());
export { VuexStore };
export function State() {
    return function (target, propertyKey) {
        target.__stateMap = target.__stateMap || {};
        target.__stateMap[propertyKey] = null;
        Object.defineProperty(target, propertyKey, {
            get: function () {
                var state = this.__store.state;
                return state[propertyKey];
            },
            set: function (value) {
                var state = this.__store.state;
                state[propertyKey] = value;
            }
        });
    };
}
export function Action() {
    return function (target, propertyKey, descriptor) {
        var memberMethod = descriptor.value;
        target.__actionsTree = target.__actionsTree || {};
        target.__actionsTree[propertyKey] = function (context, payload) {
            return memberMethod(payload);
        };
        descriptor.value = function (payload) {
            memberMethod = memberMethod.bind(this);
            return this.__store.dispatch(propertyKey, payload);
        };
    };
}
export function Mutation() {
    return function (target, propertyKey, descriptor) {
        var memberMethod = descriptor.value;
        target.__mutationsTree = target.__mutationsTree || {};
        target.__mutationsTree[propertyKey] = function (state, payload) {
            return memberMethod(payload);
        };
        descriptor.value = function (payload) {
            memberMethod = memberMethod.bind(this);
            return this.__store.commit(propertyKey, payload);
        };
    };
}

//# sourceMappingURL=Store.js.map
