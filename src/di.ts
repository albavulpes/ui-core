import 'reflect-metadata';
import Bottle from 'bottlejs';

const bottle = new Bottle();

export function Service(serviceName: string): ClassDecorator {
    return (constructor: any) => {
        Reflect.defineMetadata('service:name', serviceName, constructor);

        bottle.service(serviceName, constructor);
    }
}

export function Factory(serviceName: string, factoryFunction: (container: Bottle.IContainer) => any): ClassDecorator {
    return (constructor: any) => {
        Reflect.defineMetadata('service:name', serviceName, constructor);

        bottle.factory(serviceName, factoryFunction);

        return constructor;
    }
}

export function Require(): PropertyDecorator {
    return (prototype: any, propertyKey: string) => {
        const designType = Reflect.getMetadata('design:type', prototype, propertyKey) as Function;
        const serviceName = Reflect.getMetadata('service:name', designType);

        if (delete prototype[propertyKey]) {
            Object.defineProperty(prototype, propertyKey, {
                get() {
                    console.info(`Resolved dependency: ${serviceName}`);
                    return bottle.container[serviceName];
                }
            });
        }
    };
}

export default bottle;