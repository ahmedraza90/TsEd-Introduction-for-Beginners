import { SecretWordService, SecretNumberService } from '../../services/sevice';
import { Controller, Get, PathParams,  } from "@tsed/common";
import {Returns, Description} from "@tsed/schema";
import { AuthMiddleware } from '../../middlewares/authToken';

@Controller("/secretMessage") //https://tsed.io/docs/controllers.html#routing
export class SecretMessageController {
  constructor(
    private readonly secretWordService: SecretWordService,
    private readonly secretNumberService: SecretNumberService
  ) { }

  @Get("/word")  //https://tsed.io/docs/controllers.html#routing
  @Description("Get secret word.") //https://tsed.io/docs/controllers.html#request
  @Returns(401, Object) //https://tsed.io/docs/controllers.html#request
  getSecretWord() {
    return { secretMessage: this.secretWordService.getSecretWord() };
  }

  @Get("/number/:id")
  @Description("Get secret word.")
  @Returns(401, Object)
  getSecretNumber(@PathParams('id') id: number) {
    return { secretMessage: this.secretNumberService.getSecretNumber(id) }
  }
}
