import { Container } from 'typedi';
export function Require(serviceName) {
    return function (prototype, propertyKey) {
        var identifier = serviceName;
        if (!identifier) {
            identifier = Reflect.getMetadata('design:type', prototype, propertyKey);
        }
        if (delete prototype[propertyKey]) {
            Object.defineProperty(prototype, propertyKey, {
                get: function () {
                    console.debug("Resolved dependency: " + identifier);
                    return Container.get(identifier);
                }
            });
        }
    };
}

//# sourceMappingURL=di.js.map
