import {Container} from 'typedi';

export function Require(serviceName?: string): PropertyDecorator {
    return <T>(prototype: any, propertyKey: string) => {
        let identifier: any = serviceName;

        if (!identifier) {
            identifier = Reflect.getMetadata('design:type', prototype, propertyKey);
        }

        if (delete prototype[propertyKey]) {
            Object.defineProperty(prototype, propertyKey, {
                get() {
                    console.debug(`Resolved dependency: ${identifier}`);
                    return Container.get(identifier);
                }
            });
        }
    };
}
