//why are there services ?
//To make the system more loosely-coupled, we can utilize Ts.ED by implementing separate services and injecting our controller.
import { Service } from "@tsed/common";

@Service() //@Service()decorator to the class tells Ts.ED that it is a service provider. Then, we can inject the services to our previous controller:
export class SecretWordService {
    private readonly secretWord: string = "hello";
    getSecretWord(): string {
        return this.secretWord;
    }
}

@Service()
export class SecretNumberService {
    private readonly secretNumber: number = 123;
    getSecretNumber(id: number): number {
        return this.secretNumber + id;
    }
}   